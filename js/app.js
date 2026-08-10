'use strict';

const appState = {
    currentSection: null,
    currentQuestionIndex: 0,
    questions: [],
    answers: {},
    submitted: false,
    results: null,
    setup: {
        selectedTopics: new Set(),
        questionsPerTopic: 1
    }
};

const elements = {
    sidebar: document.getElementById('sidebar'),
    menuToggle: document.getElementById('menuToggle'),
    closeSidebar: document.getElementById('closeSidebar'),
    overlay: document.getElementById('overlay'),
    siteTitle: document.getElementById('siteTitle'),
    startLearningBtn: document.getElementById('startLearningBtn'),
    navItems: [...document.querySelectorAll('.nav-item')],
    unitHeaders: [...document.querySelectorAll('.unit-header')],
    homeSection: document.getElementById('homeSection'),
    checkupSetupSection: document.getElementById('checkupSetupSection'),
    questionSection: document.getElementById('questionSection'),
    reviewScreen: document.getElementById('reviewScreen'),
    checkupTitle: document.getElementById('checkupTitle'),
    totalAvailableQuestions: document.getElementById('totalAvailableQuestions'),
    currentQuestionCount: document.getElementById('currentQuestionCount'),
    topicsPills: document.getElementById('topicsPills'),
    numberButtons: [...document.querySelectorAll('.number-btn')],
    setupMessage: document.getElementById('setupMessage'),
    startCheckupBtn: document.getElementById('startCheckupBtn'),
    sectionTitle: document.getElementById('sectionTitle'),
    questionNumber: document.getElementById('questionNumber'),
    questionTypeBadge: document.getElementById('questionTypeBadge'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    progressBar: document.getElementById('progressBar'),
    progressText: document.getElementById('progressText'),
    navNumbers: document.getElementById('navNumbers'),
    submitBtn: document.getElementById('submitBtnBottom'),
    reviewScore: document.getElementById('reviewScore'),
    reviewScoreDetails: document.getElementById('reviewScoreDetails'),
    reviewTopics: document.getElementById('reviewTopics'),
    reviewAllQuestions: document.getElementById('reviewAllQuestions'),
    tryAgainBtn: document.getElementById('tryAgainBtn'),
    backToHomeBtn: document.getElementById('backToHomeBtn')
};

function initialize() {
    attachEventListeners();
    updateNumberSelection();

    const firstUnit = document.querySelector('.unit-content');
    if (firstUnit) {
        firstUnit.classList.remove('collapsed');
    }
}

function attachEventListeners() {
    elements.menuToggle.addEventListener('click', openSidebar);
    elements.closeSidebar.addEventListener('click', closeSidebar);
    elements.overlay.addEventListener('click', closeSidebar);
    elements.siteTitle.addEventListener('click', goHome);
    elements.startLearningBtn.addEventListener('click', () => elements.navItems[0]?.click());

    elements.unitHeaders.forEach((header) => header.addEventListener('click', toggleUnit));
    elements.navItems.forEach((item) => item.addEventListener('click', handleNavigation));
    elements.numberButtons.forEach((button) => button.addEventListener('click', selectQuestionCount));
    elements.startCheckupBtn.addEventListener('click', startExam);
    elements.submitBtn.addEventListener('click', submitExam);
    elements.tryAgainBtn.addEventListener('click', showSetup);
    elements.backToHomeBtn.addEventListener('click', goHome);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeSidebar();
        }
    });
}

function openSidebar() {
    elements.sidebar.classList.add('active');
    elements.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    elements.sidebar.classList.remove('active');
    elements.overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleUnit(event) {
    const header = event.currentTarget;
    const content = document.querySelector(`.unit-content[data-unit="${header.dataset.unit}"]`);
    header.classList.toggle('collapsed');
    content?.classList.toggle('collapsed');
}

function handleNavigation(event) {
    event.preventDefault();
    const section = event.currentTarget.dataset.section;
    if (!checkupRegistry[section]) {
        return;
    }

    elements.navItems.forEach((item) => item.classList.toggle('active', item === event.currentTarget));
    appState.currentSection = section;
    showSetup();

    if (window.innerWidth <= 1024) {
        closeSidebar();
    }
}

function showSection(sectionToShow) {
    [
        elements.homeSection,
        elements.checkupSetupSection,
        elements.questionSection,
        elements.reviewScreen
    ].forEach((section) => section.classList.toggle('hidden', section !== sectionToShow));
}

function currentCheckup() {
    return checkupRegistry[appState.currentSection];
}

function showSetup() {
    const checkup = currentCheckup();
    if (!checkup) {
        goHome();
        return;
    }

    resetExamState();
    const topics = [...StudyPhysioExam.groupByTopic(checkup.questions).keys()];
    appState.setup.selectedTopics = new Set(topics);
    appState.setup.questionsPerTopic = 1;

    elements.checkupTitle.textContent = checkup.title;
    elements.totalAvailableQuestions.textContent = checkup.questions.length;
    populateTopics(topics);
    updateNumberSelection();
    updateSetupStatus();
    showSection(elements.checkupSetupSection);
    window.scrollTo(0, 0);
}

function resetExamState() {
    appState.currentQuestionIndex = 0;
    appState.questions = [];
    appState.answers = {};
    appState.submitted = false;
    appState.results = null;
}

function populateTopics(topics) {
    elements.topicsPills.replaceChildren();
    topics.forEach((topic) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'topic-pill';
        button.textContent = topic;
        button.dataset.topic = topic;
        button.setAttribute('aria-pressed', 'true');
        button.addEventListener('click', toggleTopic);
        elements.topicsPills.appendChild(button);
    });
}

function toggleTopic(event) {
    const button = event.currentTarget;
    const topic = button.dataset.topic;
    const selected = appState.setup.selectedTopics;

    if (selected.has(topic)) {
        selected.delete(topic);
    } else {
        selected.add(topic);
    }

    const isSelected = selected.has(topic);
    button.classList.toggle('unselected', !isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
    updateSetupStatus();
}

function selectQuestionCount(event) {
    appState.setup.questionsPerTopic = Number(event.currentTarget.dataset.count);
    updateNumberSelection();
    updateSetupStatus();
}

function updateNumberSelection() {
    elements.numberButtons.forEach((button) => {
        const selected = Number(button.dataset.count) === appState.setup.questionsPerTopic;
        button.classList.toggle('selected', selected);
        button.setAttribute('aria-pressed', String(selected));
    });
}

function getSetupResult() {
    const checkup = currentCheckup();
    return StudyPhysioExam.buildExam({
        questions: checkup.questions,
        selectedTopics: appState.setup.selectedTopics,
        questionsPerTopic: appState.setup.questionsPerTopic,
        exactBalance: Boolean(checkup.exactBalance),
        random: () => 0.5
    });
}

function updateSetupStatus() {
    const total = appState.setup.selectedTopics.size * appState.setup.questionsPerTopic;
    elements.currentQuestionCount.textContent = total;

    const result = getSetupResult();
    const hasError = Boolean(result.error);
    elements.startCheckupBtn.disabled = hasError;
    elements.setupMessage.textContent = result.error || '';
    elements.setupMessage.classList.toggle('hidden', !hasError);
}

function startExam() {
    const checkup = currentCheckup();
    const result = StudyPhysioExam.buildExam({
        questions: checkup.questions,
        selectedTopics: appState.setup.selectedTopics,
        questionsPerTopic: appState.setup.questionsPerTopic,
        exactBalance: Boolean(checkup.exactBalance)
    });

    if (result.error) {
        updateSetupStatus();
        return;
    }

    appState.questions = result.questions;
    appState.currentQuestionIndex = 0;
    appState.answers = {};
    elements.sectionTitle.textContent = checkup.title;
    showSection(elements.questionSection);
    displayQuestion();
    window.scrollTo(0, 0);
}

function displayQuestion() {
    const question = appState.questions[appState.currentQuestionIndex];
    if (!question) {
        return;
    }

    elements.questionNumber.textContent = `Question ${appState.currentQuestionIndex + 1}`;
    elements.questionTypeBadge.textContent = question.topic;
    elements.questionText.textContent = question.question;
    renderOptions();
    renderNavigation();
    updateProgress();
}

function renderOptions() {
    const storedAnswer = appState.answers[appState.currentQuestionIndex];
    elements.optionsContainer.replaceChildren();

    [
        { label: 'T', text: 'True', value: true },
        { label: 'F', text: 'False', value: false }
    ].forEach((choice) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'option';
        button.classList.toggle('selected', storedAnswer?.value === choice.value);
        button.setAttribute('aria-pressed', String(storedAnswer?.value === choice.value));
        button.disabled = appState.submitted;

        const label = document.createElement('span');
        label.className = 'option-label';
        label.textContent = choice.label;

        const text = document.createElement('span');
        text.textContent = choice.text;
        button.append(label, text);
        button.addEventListener('click', () => selectAnswer(choice.value));
        elements.optionsContainer.appendChild(button);
    });
}

function selectAnswer(value) {
    if (appState.submitted) {
        return;
    }
    appState.answers[appState.currentQuestionIndex] = { value };
    renderOptions();
    renderNavigation();
    updateProgress();
}

function visibleQuestionIndices(total, current) {
    if (total <= 7) {
        return Array.from({ length: total }, (_, index) => index);
    }

    const indices = new Set([0, total - 1]);
    for (let index = Math.max(1, current - 2); index <= Math.min(total - 2, current + 2); index += 1) {
        indices.add(index);
    }
    while (indices.size < 7) {
        const sorted = [...indices].sort((a, b) => a - b);
        const left = sorted[1] - 1;
        const right = sorted[sorted.length - 2] + 1;
        if (left > 0) {
            indices.add(left);
        } else if (right < total - 1) {
            indices.add(right);
        } else {
            break;
        }
    }
    return [...indices].sort((a, b) => a - b);
}

function renderNavigation() {
    const total = appState.questions.length;
    const current = appState.currentQuestionIndex;
    elements.navNumbers.replaceChildren();

    elements.navNumbers.appendChild(createNavigationButton('« Prev', current - 1, current === 0, 'nav-prev-next nav-prev'));

    const indices = visibleQuestionIndices(total, current);
    indices.forEach((index, position) => {
        if (position > 0 && index - indices[position - 1] > 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'nav-ellipsis';
            ellipsis.textContent = '…';
            elements.navNumbers.appendChild(ellipsis);
        }

        const button = createNavigationButton(String(index + 1), index, false);
        button.classList.toggle('current', index === current);
        button.classList.add(StudyPhysioExam.isAnswered(appState.answers[index]) ? 'answered' : 'unanswered');
        button.setAttribute('aria-label', `Question ${index + 1}`);
        if (index === current) {
            button.setAttribute('aria-current', 'page');
        }
        elements.navNumbers.appendChild(button);
    });

    elements.navNumbers.appendChild(createNavigationButton('Next »', current + 1, current === total - 1, 'nav-prev-next nav-next'));

    const allAnswered = appState.questions.every((_, index) => StudyPhysioExam.isAnswered(appState.answers[index]));
    elements.submitBtn.disabled = !allAnswered;
}

function createNavigationButton(text, destination, disabled, extraClass = '') {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `nav-number-btn ${extraClass}`.trim();
    button.textContent = text;
    button.disabled = disabled;
    button.addEventListener('click', () => navigateToQuestion(destination));
    return button;
}

function navigateToQuestion(index) {
    if (index < 0 || index >= appState.questions.length) {
        return;
    }
    appState.currentQuestionIndex = index;
    displayQuestion();
    window.scrollTo(0, 0);
}

function updateProgress() {
    const total = appState.questions.length;
    const answered = appState.questions.filter((_, index) => StudyPhysioExam.isAnswered(appState.answers[index])).length;
    elements.progressBar.style.width = `${total === 0 ? 0 : (answered / total) * 100}%`;
    elements.progressText.textContent = `${answered}/${total} Answered`;
}

function submitExam() {
    const allAnswered = appState.questions.every((_, index) => StudyPhysioExam.isAnswered(appState.answers[index]));
    if (!allAnswered || appState.submitted) {
        return;
    }

    appState.results = StudyPhysioExam.gradeExam(appState.questions, appState.answers);
    appState.submitted = true;
    showReview();
}

function showReview() {
    const results = appState.results;
    elements.reviewScore.textContent = `Score: ${results.correct}/${results.total} (${results.percentage}%)`;
    elements.reviewScoreDetails.textContent = `You answered ${results.correct} out of ${results.total} questions correctly`;
    renderTopicBreakdown(results.topicBreakdown);
    renderReviewQuestions();
    showSection(elements.reviewScreen);
    window.scrollTo(0, 0);
}

function renderTopicBreakdown(topics) {
    elements.reviewTopics.replaceChildren();
    topics.forEach((topic) => {
        const badge = document.createElement('div');
        badge.className = 'review-topic-badge';
        badge.classList.add(topic.percentage >= 80 ? 'mastered' : topic.percentage >= 60 ? 'good' : 'needs-work');
        badge.textContent = `${topic.name}: ${topic.correct}/${topic.total} (${topic.percentage}%)`;
        elements.reviewTopics.appendChild(badge);
    });
}

function renderReviewQuestions() {
    elements.reviewAllQuestions.replaceChildren();
    appState.questions.forEach((question, index) => {
        const answer = appState.answers[index];
        const isCorrect = answer.value === question.correct;
        const card = document.createElement('article');
        card.className = `review-question-card ${isCorrect ? 'correct' : 'incorrect'}`;

        const header = document.createElement('div');
        header.className = 'review-question-header';
        const number = document.createElement('span');
        number.className = 'review-question-number';
        number.textContent = `Question ${index + 1}`;
        const result = document.createElement('span');
        result.className = `review-result-badge ${isCorrect ? 'correct' : 'incorrect'}`;
        result.textContent = isCorrect ? '✓ Correct' : '✕ Incorrect';
        header.append(number, result);

        const text = document.createElement('p');
        text.className = 'review-question-text';
        text.textContent = question.question;

        card.append(
            header,
            text,
            createAnswerSection('Your Answer', answer.value ? 'True' : 'False', isCorrect ? 'correct' : 'incorrect'),
            createAnswerSection('Correct Answer', question.correct ? 'True' : 'False', 'correct')
        );

        const explanation = document.createElement('div');
        explanation.className = 'review-explanation';
        const heading = document.createElement('div');
        heading.className = 'review-explanation-label';
        heading.textContent = 'Explanation';
        const content = document.createElement('div');
        content.className = 'review-explanation-text';
        content.innerHTML = question.explanation;
        explanation.append(heading, content);
        card.appendChild(explanation);
        elements.reviewAllQuestions.appendChild(card);
    });
}

function createAnswerSection(labelText, answerText, resultClass) {
    const section = document.createElement('div');
    section.className = 'review-answer-section';
    const label = document.createElement('div');
    label.className = 'review-answer-label';
    label.textContent = `${labelText}:`;
    const answer = document.createElement('div');
    answer.className = `review-answer-content ${resultClass}`;
    answer.textContent = answerText;
    section.append(label, answer);
    return section;
}

function goHome() {
    resetExamState();
    appState.currentSection = null;
    appState.setup.selectedTopics = new Set();
    elements.navItems.forEach((item) => item.classList.remove('active'));
    showSection(elements.homeSection);
    closeSidebar();
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', initialize);
