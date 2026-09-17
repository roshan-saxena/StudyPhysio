'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const questionSource = require('../js/question-source');

function loadBank(fileName) {
    const source = fs.readFileSync(path.join(__dirname, '..', 'js', 'questions', fileName), 'utf8');
    const declaration = source.match(/const\s+(\w+)\s*=/);
    const context = {};
    vm.createContext(context);
    vm.runInContext(`${source};globalThis.__bank = ${declaration[1]};`, context);
    const [checkupId, questions] = Object.entries(context.__bank)[0];
    return {
        checkupId,
        questions: questions.map((question, index) => ({
            id: `${checkupId}-q${String(index + 1).padStart(3, '0')}`,
            ...question
        }))
    };
}

test('a current complete bank passes remote validation', () => {
    const bank = loadBank('unit2-cardiovascular-checkup.js');
    assert.deepEqual(questionSource.validateQuestionBank(bank.checkupId, bank.questions), {
        valid: true,
        error: null
    });
});

test('unsafe explanation markup is rejected', () => {
    const bank = loadBank('unit2-cardiovascular-checkup.js');
    bank.questions[0].explanation = '<img src=x onerror=alert(1)>';
    assert.equal(questionSource.validateQuestionBank(bank.checkupId, bank.questions).valid, false);
});

test('plain-text explanation rendering does not interpret markup', () => {
    assert.equal(
        questionSource.sanitizeExplanation('Use <strong>this</strong> <script>bad()</script>'),
        'Use <strong>this</strong> <script>bad()</script>'
    );
});

test('the bundled bank is used when the remote service fails', async () => {
    const fallback = [{ question: 'backup' }];
    const result = await questionSource.loadCheckup('unit2-cardiovascular-checkup', fallback, {
        endpoint: 'https://example.invalid/questions',
        fetchImpl: async () => { throw new Error('offline'); }
    });
    assert.equal(result.source, 'backup');
    assert.equal(result.questions, fallback);
});
