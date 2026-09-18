'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const scriptSource = fs.readFileSync(
    path.join(__dirname, '..', 'google-apps-script', 'Code.gs'),
    'utf8'
);
const context = {};
vm.createContext(context);
vm.runInContext(
    `${scriptSource};globalThis.__workflow = {buildCandidateFromData_, validateQuestionSet_};`,
    context
);
const workflow = context.__workflow;

const existingCheckupIds = [
    'unit1-pillar-checkup1',
    'unit1-pillar-checkup2',
    'unit2-cardiovascular-checkup',
    'unit3-self-defense-checkup1',
    'unit3-self-defense-checkup2',
    'unit4-brain-on-drugs-checkup',
    'unit6-human-performance-checkup',
    'unit7-sexual-health-and-relationships-checkup'
];

const config = [
    ...existingCheckupIds.map((id, index) => ({
        id,
        title: id,
        exactBalance: id === 'unit7-sexual-health-and-relationships-checkup',
        active: true,
        order: index + 1
    })),
    {
        id: 'unit5-checkup',
        title: 'Unit 5 Checkup',
        exactBalance: false,
        active: false,
        order: 7
    }
];

function makeBank(checkupId) {
    return Array.from({ length: 50 }, (_, index) => {
        const topicIndex = Math.floor(index / 5);
        const withinTopic = index % 5;
        const trueQuestionsForTopic = topicIndex % 2 === 0 ? 3 : 2;
        return {
            id: `${checkupId}-q${String(index + 1).padStart(3, '0')}`,
            checkup: checkupId,
            topic: `Topic ${topicIndex + 1}`,
            question: `${checkupId} question ${index + 1}`,
            correct: withinTopic < trueQuestionsForTopic,
            explanation: `Explanation for ${checkupId} question ${index + 1}.`
        };
    });
}

function questionToRow(question, ready) {
    return [
        question.id,
        question.checkup,
        question.topic,
        question.question,
        question.correct ? 'TRUE' : 'FALSE',
        question.explanation,
        ready,
        ready ? 'Ready to publish' : 'Unit draft',
        '',
        ''
    ];
}

const published = existingCheckupIds.flatMap(makeBank);
const unit5 = makeBank('unit5-checkup');

test('the current 400-question publication remains valid with Unit 5 inactive', () => {
    assert.deepEqual(
        Array.from(workflow.validateQuestionSet_(published, config)),
        []
    );
});

test('ordinary edits publish while blank Unit 5 draft rows remain ignored', () => {
    const edited = { ...published[0], explanation: 'Updated existing explanation.' };
    const existingReadyRow = questionToRow(edited, true);
    const blankUnit5Rows = unit5.map((question) => questionToRow({
        ...question,
        topic: '',
        question: '',
        correct: null,
        explanation: ''
    }, false));

    const result = workflow.buildCandidateFromData_(
        [existingReadyRow, ...blankUnit5Rows],
        published,
        config,
        8
    );

    assert.equal(result.ok, true);
    assert.equal(result.candidate.length, 400);
    assert.deepEqual(Array.from(result.newlyActivatedCheckupIds), []);
    assert.equal(result.candidate[0].explanation, 'Updated existing explanation.');
});

test('a partial Unit 5 selection is blocked and cannot change the live snapshot', () => {
    const rows = unit5.map((question, index) => questionToRow(question, index < 49));
    const result = workflow.buildCandidateFromData_(rows, published, config, 408);

    assert.equal(result.ok, false);
    assert.equal(result.candidate.length, 400);
    assert.match(result.errors.join(' '), /49 of 50 rows are marked Ready to Publish/);
});

test('all 50 complete Unit 5 rows validate and activate together', () => {
    const rows = unit5.map((question) => questionToRow(question, true));
    const result = workflow.buildCandidateFromData_(rows, published, config, 408);

    assert.equal(result.ok, true);
    assert.equal(result.candidate.length, 450);
    assert.deepEqual(Array.from(result.newlyActivatedCheckupIds), ['unit5-checkup']);
    assert.deepEqual(Array.from(workflow.validateQuestionSet_(result.candidate, config)), []);
});

test('50 ready Unit 5 rows with missing content remain blocked', () => {
    const rows = unit5.map((question, index) => questionToRow(
        index === 0 ? { ...question, explanation: '' } : question,
        true
    ));
    const result = workflow.buildCandidateFromData_(rows, published, config, 408);

    assert.equal(result.ok, false);
    assert.equal(result.candidate.length, 450);
    assert.match(result.errors.join(' '), /missing a required field/);
});

test('50 ready Unit 5 rows with a blank answer remain blocked', () => {
    const rows = unit5.map((question) => questionToRow(question, true));
    rows[0][4] = '';
    const result = workflow.buildCandidateFromData_(rows, published, config, 408);

    assert.equal(result.ok, false);
    assert.match(result.errors.join(' '), /must use TRUE or FALSE/);
});

test('the website keeps Unit 5 hidden until its remote bank exists', () => {
    const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    const configSource = fs.readFileSync(path.join(__dirname, '..', 'js', 'checkup-config.js'), 'utf8');

    assert.match(html, /data-remote-checkup="unit5-checkup" hidden/);
    assert.match(configSource, /'unit5-checkup'[\s\S]*remoteOnly: true/);
});
