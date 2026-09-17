'use strict';

(function attachQuestionSource(globalScope) {
    const DEFAULT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzXtFt8EnumliCYLSoJNoq57HDRgH8gxHOZEV1F5KbGJzDZLMFxnP7VXOa1HBCy6klk/exec';
    const UNIT_7_ID = 'unit7-sexual-health-and-relationships-checkup';

    function normalizeText(value) {
        return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
    }

    function explanationHtmlError(value) {
        const explanation = String(value || '');
        const withoutAllowedTags = explanation.replace(/<\/?strong>/g, '');
        if (/<[^>]*>/.test(withoutAllowedTags)) {
            return 'Explanations may use only <strong> formatting.';
        }

        let depth = 0;
        const tags = explanation.match(/<\/?strong>/g) || [];
        for (const tag of tags) {
            depth += tag === '<strong>' ? 1 : -1;
            if (depth < 0) {
                return 'An explanation contains an unmatched </strong> tag.';
            }
        }
        return depth === 0 ? null : 'An explanation contains an unmatched <strong> tag.';
    }

    function validateQuestionBank(checkupId, questions) {
        if (!Array.isArray(questions)) {
            return { valid: false, error: 'The published question bank is not an array.' };
        }
        if (questions.length !== 50) {
            return { valid: false, error: `Expected 50 questions, received ${questions.length}.` };
        }

        const ids = new Set();
        const wording = new Set();
        const topics = new Map();
        let trueCount = 0;

        for (const question of questions) {
            if (!question || question.type !== 'tf'
                || typeof question.id !== 'string' || !question.id.trim()
                || typeof question.topic !== 'string' || !question.topic.trim()
                || typeof question.question !== 'string' || !question.question.trim()
                || typeof question.correct !== 'boolean'
                || typeof question.explanation !== 'string' || !question.explanation.trim()) {
                return { valid: false, error: 'A published question has an invalid or missing field.' };
            }

            if (ids.has(question.id)) {
                return { valid: false, error: `Duplicate question ID: ${question.id}.` };
            }
            ids.add(question.id);

            const normalizedWording = normalizeText(question.question);
            if (wording.has(normalizedWording)) {
                return { valid: false, error: 'The published bank contains duplicate question wording.' };
            }
            wording.add(normalizedWording);

            const htmlError = explanationHtmlError(question.explanation);
            if (htmlError) {
                return { valid: false, error: htmlError };
            }

            if (!topics.has(question.topic)) {
                topics.set(question.topic, []);
            }
            topics.get(question.topic).push(question);
            if (question.correct) {
                trueCount += 1;
            }
        }

        if (topics.size !== 10) {
            return { valid: false, error: `Expected 10 topics, received ${topics.size}.` };
        }
        for (const [topic, topicQuestions] of topics) {
            if (topicQuestions.length !== 5) {
                return { valid: false, error: `${topic} contains ${topicQuestions.length} questions instead of five.` };
            }
            if (checkupId === UNIT_7_ID) {
                const topicTrueCount = topicQuestions.filter((question) => question.correct).length;
                if (topicTrueCount < 2 || topicTrueCount > 3) {
                    return { valid: false, error: `${topic} cannot support balanced Unit 7 selections.` };
                }
            }
        }
        if (trueCount !== 25) {
            return { valid: false, error: `Expected 25 true and 25 false answers, received ${trueCount} true.` };
        }

        return { valid: true, error: null };
    }

    function sanitizeExplanation(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
            .replace(/&lt;strong&gt;/g, '<strong>')
            .replace(/&lt;\/strong&gt;/g, '</strong>');
    }

    async function loadCheckup(checkupId, fallbackQuestions, options = {}) {
        const endpoint = options.endpoint === undefined ? DEFAULT_ENDPOINT : options.endpoint;
        const fetchImpl = options.fetchImpl || globalScope.fetch;
        if (!endpoint || typeof fetchImpl !== 'function') {
            return { questions: fallbackQuestions, source: 'backup', version: null, error: null };
        }

        try {
            const url = new URL(endpoint);
            url.searchParams.set('checkup', checkupId);
            url.searchParams.set('_', String(Date.now()));
            const response = await fetchImpl(url.toString(), {
                cache: 'no-store',
                redirect: 'follow'
            });
            if (!response.ok) {
                throw new Error(`Question service returned ${response.status}.`);
            }

            const payload = await response.json();
            if (payload.error) {
                throw new Error(payload.error);
            }
            if (payload.schemaVersion !== 1 || payload.checkupId !== checkupId) {
                throw new Error('Question service returned an incompatible response.');
            }

            const validation = validateQuestionBank(checkupId, payload.questions);
            if (!validation.valid) {
                throw new Error(validation.error);
            }

            return {
                questions: payload.questions,
                source: 'google-sheet',
                version: payload.version || null,
                error: null
            };
        } catch (error) {
            if (globalScope.console && typeof globalScope.console.warn === 'function') {
                globalScope.console.warn('Using the bundled StudyPhysio question backup.', error);
            }
            return {
                questions: fallbackQuestions,
                source: 'backup',
                version: null,
                error: error instanceof Error ? error.message : String(error)
            };
        }
    }

    const questionSource = {
        loadCheckup,
        sanitizeExplanation,
        validateQuestionBank
    };

    globalScope.StudyPhysioQuestionSource = questionSource;
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = questionSource;
    }
}(typeof globalThis !== 'undefined' ? globalThis : window));
