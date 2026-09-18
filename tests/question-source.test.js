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
        fetchImpl: async () => { throw new Error('offline'); },
        retryDelays: [0]
    });
    assert.equal(result.source, 'backup');
    assert.equal(result.questions, fallback);
});

test('a transient 404 is retried before using the backup', async () => {
    const bank = loadBank('unit2-cardiovascular-checkup.js');
    let attempts = 0;
    const result = await questionSource.loadCheckup(bank.checkupId, [], {
        endpoint: 'https://example.com/questions',
        retryDelays: [0, 0],
        fetchImpl: async () => {
            attempts += 1;
            if (attempts === 1) {
                return { ok: false, status: 404 };
            }
            return {
                ok: true,
                json: async () => ({
                    schemaVersion: 1,
                    version: 'test-version',
                    checkupId: bank.checkupId,
                    questions: bank.questions
                })
            };
        }
    });

    assert.equal(attempts, 2);
    assert.equal(result.source, 'google-sheet');
    assert.equal(result.version, 'test-version');
    assert.equal(result.questions.length, 50);
});
