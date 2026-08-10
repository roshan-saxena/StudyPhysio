'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');
const engine = require('../js/exam-engine.js');

function makeQuestions(topic, answers) {
    return answers.map((correct, index) => ({
        type: 'tf',
        topic,
        question: `${topic} ${index}`,
        correct,
        explanation: 'Explanation'
    }));
}

test('buildExam preserves the requested topic counts', () => {
    const questions = [
        ...makeQuestions('A', [true, true, false, false, true]),
        ...makeQuestions('B', [false, true, false, true, false])
    ];
    const result = engine.buildExam({
        questions,
        selectedTopics: new Set(['A', 'B']),
        questionsPerTopic: 3,
        random: () => 0.5
    });

    assert.equal(result.error, null);
    assert.equal(result.questions.length, 6);
    assert.equal(result.questions.filter((question) => question.topic === 'A').length, 3);
    assert.equal(result.questions.filter((question) => question.topic === 'B').length, 3);
});

test('exact balancing returns equal true and false answers', () => {
    const questions = [
        ...makeQuestions('A', [true, true, true, false, false]),
        ...makeQuestions('B', [false, false, false, true, true])
    ];
    const result = engine.buildExam({
        questions,
        selectedTopics: new Set(['A', 'B']),
        questionsPerTopic: 3,
        exactBalance: true,
        random: () => 0.5
    });

    assert.equal(result.error, null);
    assert.equal(result.questions.filter((question) => question.correct).length, 3);
    assert.equal(result.questions.filter((question) => !question.correct).length, 3);
});

test('exact balancing rejects odd-sized configurations', () => {
    const result = engine.buildExam({
        questions: makeQuestions('A', [true, true, true, false, false]),
        selectedTopics: new Set(['A']),
        questionsPerTopic: 1,
        exactBalance: true
    });
    assert.ok(result.error);
});

test('gradeExam attributes results using question topics after shuffling', () => {
    const questions = [
        ...makeQuestions('B', [false]),
        ...makeQuestions('A', [true]),
        ...makeQuestions('B', [true]),
        ...makeQuestions('A', [false])
    ];
    const answers = {
        0: { value: false },
        1: { value: false },
        2: { value: true },
        3: { value: true }
    };
    const result = engine.gradeExam(questions, answers);
    const topicA = result.topicBreakdown.find((topic) => topic.name === 'A');
    const topicB = result.topicBreakdown.find((topic) => topic.name === 'B');

    assert.equal(result.correct, 2);
    assert.deepEqual({ correct: topicA.correct, total: topicA.total }, { correct: 0, total: 2 });
    assert.deepEqual({ correct: topicB.correct, total: topicB.total }, { correct: 2, total: 2 });
});

test('Unit 7 produces an exact split at every full-topic assessment size', () => {
    const file = path.join(__dirname, '..', 'js', 'questions', 'unit7-sexual-health-and-relationships-checkup.js');
    const source = fs.readFileSync(file, 'utf8');
    const context = {};
    vm.createContext(context);
    vm.runInContext(`${source};globalThis.__bank = unit7SexualHealthAndRelationshipsCheckup;`, context);
    const questions = context.__bank['unit7-sexual-health-and-relationships-checkup'];
    const topics = new Set(engine.groupByTopic(questions).keys());

    for (let questionsPerTopic = 1; questionsPerTopic <= 5; questionsPerTopic += 1) {
        const result = engine.buildExam({
            questions,
            selectedTopics: topics,
            questionsPerTopic,
            exactBalance: true,
            random: () => 0.5
        });
        assert.equal(result.error, null);
        assert.equal(result.questions.length, questionsPerTopic * 10);
        assert.equal(
            result.questions.filter((question) => question.correct).length,
            result.questions.length / 2
        );
    }
});
