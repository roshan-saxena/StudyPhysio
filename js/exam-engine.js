(function attachExamEngine(globalScope) {
    'use strict';

    function shuffle(items, random = Math.random) {
        const copy = [...items];
        for (let index = copy.length - 1; index > 0; index -= 1) {
            const swapIndex = Math.floor(random() * (index + 1));
            [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
        }
        return copy;
    }

    function groupByTopic(questions) {
        const topics = new Map();
        questions.forEach((question) => {
            if (!topics.has(question.topic)) {
                topics.set(question.topic, []);
            }
            topics.get(question.topic).push(question);
        });
        return topics;
    }

    function combinations(items, count) {
        const results = [];

        function visit(start, selected) {
            if (selected.length === count) {
                results.push([...selected]);
                return;
            }

            const remainingNeeded = count - selected.length;
            for (let index = start; index <= items.length - remainingNeeded; index += 1) {
                selected.push(items[index]);
                visit(index + 1, selected);
                selected.pop();
            }
        }

        visit(0, []);
        return results;
    }

    function selectExactlyBalanced(topicPools, questionsPerTopic, random) {
        const totalQuestions = topicPools.length * questionsPerTopic;
        if (totalQuestions % 2 !== 0) {
            return null;
        }

        const targetFalse = totalQuestions / 2;
        const candidates = topicPools.map((pool) => shuffle(
            combinations(pool, questionsPerTopic),
            random
        ));
        const memo = new Set();

        function search(topicIndex, falseRemaining) {
            if (topicIndex === candidates.length) {
                return falseRemaining === 0 ? [] : null;
            }

            const key = `${topicIndex}:${falseRemaining}`;
            if (memo.has(key)) {
                return null;
            }

            for (const candidate of candidates[topicIndex]) {
                const falseCount = candidate.filter((question) => question.correct === false).length;
                if (falseCount > falseRemaining) {
                    continue;
                }

                const remainder = search(topicIndex + 1, falseRemaining - falseCount);
                if (remainder) {
                    return [candidate, ...remainder];
                }
            }

            memo.add(key);
            return null;
        }

        const result = search(0, targetFalse);
        return result ? result.flat() : null;
    }

    function buildExam({
        questions,
        selectedTopics,
        questionsPerTopic,
        exactBalance = false,
        random = Math.random
    }) {
        const grouped = groupByTopic(questions);
        const topicNames = [...selectedTopics];

        if (!Number.isInteger(questionsPerTopic) || questionsPerTopic < 1) {
            return { questions: [], error: 'Choose a valid number of questions per topic.' };
        }

        if (topicNames.length === 0) {
            return { questions: [], error: 'Select at least one topic.' };
        }

        const pools = [];
        for (const topic of topicNames) {
            const pool = grouped.get(topic);
            if (!pool || pool.length < questionsPerTopic) {
                return { questions: [], error: `Not enough questions are available for ${topic}.` };
            }
            pools.push(pool);
        }

        let selected;
        if (exactBalance) {
            selected = selectExactlyBalanced(pools, questionsPerTopic, random);
            if (!selected) {
                return {
                    questions: [],
                    error: 'This selection cannot produce an exact 50/50 true/false exam. Choose a different even-sized topic and question-count combination.'
                };
            }
        } else {
            selected = pools.flatMap((pool) => shuffle(pool, random).slice(0, questionsPerTopic));
        }

        return { questions: shuffle(selected, random), error: null };
    }

    function isAnswered(answer) {
        return answer && typeof answer.value === 'boolean';
    }

    function gradeExam(questions, answers) {
        const topicMap = new Map();
        let correct = 0;

        questions.forEach((question, index) => {
            const answer = answers[index];
            const isCorrect = isAnswered(answer) && answer.value === question.correct;
            if (isCorrect) {
                correct += 1;
            }

            if (!topicMap.has(question.topic)) {
                topicMap.set(question.topic, { name: question.topic, correct: 0, total: 0 });
            }
            const topic = topicMap.get(question.topic);
            topic.total += 1;
            if (isCorrect) {
                topic.correct += 1;
            }
        });

        const total = questions.length;
        return {
            correct,
            incorrect: total - correct,
            total,
            percentage: total === 0 ? 0 : Math.round((correct / total) * 100),
            topicBreakdown: [...topicMap.values()].map((topic) => ({
                ...topic,
                percentage: Math.round((topic.correct / topic.total) * 100)
            }))
        };
    }

    const engine = {
        buildExam,
        gradeExam,
        groupByTopic,
        isAnswered,
        shuffle
    };

    globalScope.StudyPhysioExam = engine;
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = engine;
    }
}(typeof globalThis !== 'undefined' ? globalThis : window));
