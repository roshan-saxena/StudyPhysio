'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const questionsDirectory = path.join(__dirname, '..', 'js', 'questions');

function loadBanks() {
    return fs.readdirSync(questionsDirectory)
        .filter((file) => file.endsWith('.js'))
        .sort()
        .map((file) => {
            const source = fs.readFileSync(path.join(questionsDirectory, file), 'utf8');
            const declaration = source.match(/const\s+(\w+)\s*=/);
            assert.ok(declaration, `${file} must declare a question-bank constant`);
            const context = {};
            vm.createContext(context);
            vm.runInContext(`${source};globalThis.__bank = ${declaration[1]};`, context);
            const [section, questions] = Object.entries(context.__bank)[0];
            return { file, section, questions };
        });
}

const banks = loadBanks();

test('the repository contains eight complete question banks', () => {
    assert.equal(banks.length, 8);
    assert.equal(banks.reduce((total, bank) => total + bank.questions.length, 0), 400);
});

for (const bank of banks) {
    test(`${bank.section} has valid true/false question data`, () => {
        assert.equal(bank.questions.length, 50);
        const topics = new Map();

        bank.questions.forEach((question) => {
            assert.equal(question.type, 'tf');
            assert.equal(typeof question.topic, 'string');
            assert.ok(question.topic.trim());
            assert.equal(typeof question.question, 'string');
            assert.ok(question.question.trim());
            assert.equal(typeof question.correct, 'boolean');
            assert.equal(typeof question.explanation, 'string');
            assert.ok(question.explanation.trim());
            topics.set(question.topic, (topics.get(question.topic) || 0) + 1);
        });

        assert.equal(topics.size, 10);
        topics.forEach((count) => assert.equal(count, 5));
    });
}

test('question wording is unique across the site', () => {
    const normalized = banks.flatMap((bank) => bank.questions)
        .map((question) => question.question.trim().toLowerCase());
    assert.equal(new Set(normalized).size, normalized.length);
});

test('every complete bank has an exact 25/25 answer split', () => {
    banks.forEach((bank) => {
        const trueCount = bank.questions.filter((question) => question.correct).length;
        assert.equal(trueCount, 25, `${bank.section} has ${trueCount} true answers`);
    });
});
