'use strict';

(function attachQuestionSource(globalScope) {
    const DEFAULT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzXtFt8EnumliCYLSoJNoq57HDRgH8gxHOZEV1F5KbGJzDZLMFxnP7VXOa1HBCy6klk/exec';
    const UNIT_7_ID = 'unit7-sexual-health-and-relationships-checkup';

    function normalizeText(value) {
        return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
    }

    function explanationHtmlError(value) {
        const explanation = String(value || '');
        if (/<[^>]*>/.test(explanation)) {
            return 'Explanations must be written as plain text without HTML tags.';
        }
        return null;
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
        return String(value || '');
    }

    function wait(milliseconds) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

    function questionServiceError(message, retryable) {
        const error = new Error(message);
        error.retryable = retryable;
        return error;
    }

    async function fetchQuestionPayload(url, fetchImpl, timeoutMs) {
        const controller = typeof globalScope.AbortController === 'function'
            ? new globalScope.AbortController()
            : null;
        const timer = controller && timeoutMs > 0
            ? setTimeout(() => controller.abort(), timeoutMs)
            : null;

        try {
            const response = await fetchImpl(url.toString(), {
                cache: 'no-store',
                redirect: 'follow',
                ...(controller ? { signal: controller.signal } : {})
            });
            if (!response.ok) {
                throw questionServiceError(
                    `Question service returned ${response.status}.`,
                    response.status === 404 || response.status >= 500
                );
            }
            return await response.json();
        } finally {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }

    async function loadCheckup(checkupId, fallbackQuestions, options = {}) {
        const endpoint = options.endpoint === undefined ? DEFAULT_ENDPOINT : options.endpoint;
        const fetchImpl = options.fetchImpl || globalScope.fetch;
        if (!endpoint || typeof fetchImpl !== 'function') {
            return { questions: fallbackQuestions, source: 'backup', version: null, error: null };
        }

        const retryDelays = options.retryDelays || [0, 750, 1500];
        const timeoutMs = options.timeoutMs === undefined ? 15000 : options.timeoutMs;
        let lastError = null;

        for (let attempt = 0; attempt < retryDelays.length; attempt += 1) {
            if (retryDelays[attempt] > 0) {
                await wait(retryDelays[attempt]);
            }

            try {
                const url = new URL(endpoint);
                url.searchParams.set('checkup', checkupId);
                url.searchParams.set('_', String(Date.now()));
                const payload = await fetchQuestionPayload(url, fetchImpl, timeoutMs);
                if (payload.error) {
                    throw questionServiceError(payload.error, false);
                }
                if (payload.schemaVersion !== 1 || payload.checkupId !== checkupId) {
                    throw questionServiceError('Question service returned an incompatible response.', false);
                }

                const validation = validateQuestionBank(checkupId, payload.questions);
                if (!validation.valid) {
                    throw questionServiceError(validation.error, false);
                }

                return {
                    questions: payload.questions,
                    source: 'google-sheet',
                    version: payload.version || null,
                    error: null
                };
            } catch (error) {
                lastError = error;
                if (error && error.retryable === false) {
                    break;
                }
            }
        }

        if (!options.silent && globalScope.console && typeof globalScope.console.warn === 'function') {
            globalScope.console.warn('Using the bundled StudyPhysio question backup.', lastError);
        }
        return {
            questions: fallbackQuestions,
            source: 'backup',
            version: null,
            error: lastError instanceof Error ? lastError.message : String(lastError)
        };
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
