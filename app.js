// StudyPhysio - Main Application Logic

// ==========================================
// STATE MANAGEMENT
// ==========================================
const appState = {
    currentSection: null,
    currentQuestionIndex: 0,
    questions: [],
    userAnswers: {},
    scores: {
        total: 0,
        correct: 0,
        incorrect: 0
    },
    examSubmitted: false,
    examSummary: null,
    checkupConfig: {
        isCheckup: false,
        allQuestions: [],
        topics: [],
        selectedTopics: new Set(),
        questionsPerTopic: 0
    }
};

// ==========================================
// DOM ELEMENTS
// ==========================================
const elements = {
    // Navigation
    sidebar: document.getElementById('sidebar'),
    menuToggle: document.getElementById('menuToggle'),
    closeSidebar: document.getElementById('closeSidebar'),
    overlay: document.getElementById('overlay'),
    navItems: document.querySelectorAll('.nav-item'),
    unitHeaders: document.querySelectorAll('.unit-header'),

    // Sections
    homeSection: document.getElementById('homeSection'),
    checkupSetupSection: document.getElementById('checkupSetupSection'),
    questionSection: document.getElementById('questionSection'),

    // Checkup Setup
    checkupTitle: document.getElementById('checkupTitle'),
    totalAvailableQuestions: document.getElementById('totalAvailableQuestions'),
    currentQuestionCount: document.getElementById('currentQuestionCount'),
    topicsPills: document.getElementById('topicsPills'),
    startCheckupBtn: document.getElementById('startCheckupBtn'),
    siteTitle: document.getElementById('siteTitle'),

    // Question Display
    sectionTitle: document.getElementById('sectionTitle'),
    questionNumber: document.getElementById('questionNumber'),
    questionTypeBadge: document.getElementById('questionTypeBadge'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    fillBlankContainer: document.getElementById('fillBlankContainer'),
    fillBlankInput: document.getElementById('fillBlankInput'),
    shortAnswerContainer: document.getElementById('shortAnswerContainer'),
    shortAnswerInput: document.getElementById('shortAnswerInput'),
    matchingContainer: document.getElementById('matchingContainer'),
    matchingGrid: document.getElementById('matchingGrid'),

    // Feedback
    feedbackContainer: document.getElementById('feedbackContainer'),
    feedbackMessage: document.getElementById('feedbackMessage'),
    explanation: document.getElementById('explanation'),

    // Progress
    progressBar: document.getElementById('progressBar'),
    progressText: document.getElementById('progressText'),
    currentScore: document.getElementById('currentScore'),
    correctCount: document.getElementById('correctCount'),
    incorrectCount: document.getElementById('incorrectCount'),
    totalScore: document.getElementById('totalScore'),

    // Question Navigation
    questionNavigation: document.getElementById('questionNavigation'),
    navNumbers: document.getElementById('navNumbers'),
    submitBtnBottom: document.getElementById('submitBtnBottom'),

    // Review Screen
    reviewScreen: document.getElementById('reviewScreen'),
    reviewScore: document.getElementById('reviewScore'),
    reviewScoreDetails: document.getElementById('reviewScoreDetails'),
    reviewTopics: document.getElementById('reviewTopics'),
    reviewAllQuestions: document.getElementById('reviewAllQuestions'),
    tryAgainBtn: document.getElementById('tryAgainBtn'),
    backToHomeBtn: document.getElementById('backToHomeBtn')
};

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
    // Merge pillar checkup questions into main question bank
    if (typeof pillarCheckupQuestions !== 'undefined') {
        Object.assign(questionBank, pillarCheckupQuestions);
    }

    loadProgress();
    setupEventListeners();
    updateScoreDisplay();

    // Open first unit by default
    const firstUnit = document.querySelector('.unit-content');
    if (firstUnit) {
        firstUnit.classList.remove('collapsed');
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
    // Mobile menu toggle
    elements.menuToggle.addEventListener('click', openSidebar);
    elements.closeSidebar.addEventListener('click', closeSidebar);
    elements.overlay.addEventListener('click', closeSidebar);

    // Site title - go to home
    elements.siteTitle.addEventListener('click', goToHome);

    // Unit accordion
    elements.unitHeaders.forEach(header => {
        header.addEventListener('click', toggleUnit);
    });

    // Navigation items
    elements.navItems.forEach(item => {
        item.addEventListener('click', handleNavigation);
    });

    // Question buttons (using bottom navigation only)
    elements.submitBtnBottom.addEventListener('click', submitExam);

    // Enter key for fill-in-the-blank
    elements.fillBlankInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleForwardNavigation();
        }
    });

    // Review screen buttons
    elements.tryAgainBtn.addEventListener('click', retakeExam);
    elements.backToHomeBtn.addEventListener('click', goToHome);
}

// ==========================================
// NAVIGATION FUNCTIONS
// ==========================================
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

function toggleUnit(e) {
    const header = e.currentTarget;
    const unitNum = header.dataset.unit;
    const content = document.querySelector(`.unit-content[data-unit="${unitNum}"]`);

    header.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
}

function handleNavigation(e) {
    e.preventDefault();
    const section = e.currentTarget.dataset.section;

    // Update active state
    elements.navItems.forEach(item => item.classList.remove('active'));
    e.currentTarget.classList.add('active');

    // Load section
    loadSection(section);

    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
        closeSidebar();
    }
}

function loadSection(section) {
    appState.currentSection = section;
    appState.currentQuestionIndex = 0;
    appState.userAnswers = {};
    appState.examSubmitted = false;
    appState.examSummary = null;

    // Check if this is a pillar checkup
    if (section.includes('pillar-checkup')) {
        showCheckupSetup(section);
        return;
    }

    // Regular section loading
    appState.questions = questionBank[section] || [];

    // Show question section
    elements.homeSection.classList.add('hidden');
    elements.checkupSetupSection.classList.add('hidden');
    elements.questionSection.classList.remove('hidden');

    // Update section title
    const sectionName = formatSectionName(section);
    elements.sectionTitle.textContent = sectionName;
    elements.sectionTitle.dataset.baseTitle = sectionName;

    // Load first question
    if (appState.questions.length > 0) {
        generateQuestionNavigation();
        displayQuestion();
    }
}

function formatSectionName(section) {
    const map = {
        'checkup': 'Checkup Test',
        'practice': 'Practice Questions',
        'practical': 'Practical'
    };

    const parts = section.split('-');
    const unit = parts[0].replace('unit', 'Unit ');
    const type = map[parts[1]] || parts[1];

    return `${unit} - ${type}`;
}

// ==========================================
// QUESTION DISPLAY
// ==========================================
function displayQuestion() {
    const question = appState.questions[appState.currentQuestionIndex];

    if (!question) return;

    const storedAnswer = appState.userAnswers[appState.currentQuestionIndex] || {};

    // Update question info
    elements.questionNumber.textContent = `Question ${appState.currentQuestionIndex + 1}`;
    elements.questionText.textContent = question.question;
    elements.questionTypeBadge.textContent = getQuestionTypeLabel(question.type);

    // Reset input containers
    elements.optionsContainer.classList.add('hidden');
    elements.fillBlankContainer.classList.add('hidden');
    elements.shortAnswerContainer.classList.add('hidden');
    elements.matchingContainer.classList.add('hidden');

    elements.feedbackContainer.classList.add('hidden');
    elements.feedbackContainer.className = 'feedback-container hidden';
    elements.feedbackMessage.innerHTML = '';
    elements.explanation.innerHTML = '';

    // Reset matching state with stored answers if available
    appState.matchingSelections = {
        left: null,
        right: null,
        matches: storedAnswer.matches ? { ...storedAnswer.matches } : {}
    };

    // Display appropriate input type
    switch (question.type) {
        case 'mcq':
        case 'tf':
            displayMultipleChoice(question, storedAnswer);
            break;
        case 'fill':
            displayFillBlank(storedAnswer);
            break;
        case 'short':
            displayShortAnswer(storedAnswer);
            break;
        case 'matching':
            displayMatching(question, storedAnswer);
            break;
    }

    // Update progress and navigation
    updateProgress();
    updateNavigationButtons();
    generateQuestionNavigation(); // Regenerate to show adaptive pagination
}

function getQuestionTypeLabel(type) {
    const labels = {
        'mcq': 'Multiple Choice',
        'tf': 'True/False',
        'fill': 'Fill in the Blank',
        'short': 'Short Answer',
        'matching': 'Matching'
    };
    return labels[type] || 'Question';
}

function displayMultipleChoice(question, storedAnswer) {
    elements.optionsContainer.classList.remove('hidden');
    elements.optionsContainer.innerHTML = '';

    const isTrueFalse = question.type === 'tf';
    const choices = isTrueFalse
        ? [
            { label: 'True', value: true },
            { label: 'False', value: false }
        ]
        : (question.options || []).map((text, index) => ({ label: text, value: index }));

    choices.forEach((choice, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.index = index;

        const label = document.createElement('span');
        label.className = 'option-label';
        label.textContent = isTrueFalse
            ? (index === 0 ? 'T' : 'F')
            : String.fromCharCode(65 + index); // A, B, C, D

        const text = document.createElement('span');
        text.textContent = choice.label;

        optionDiv.appendChild(label);
        optionDiv.appendChild(text);

        if (!appState.examSubmitted) {
            optionDiv.addEventListener('click', () => selectOption(index, question, choice.value));
        }

        const selectedIndex = typeof storedAnswer.selectedIndex === 'number'
            ? storedAnswer.selectedIndex
            : storedAnswer.answer;

        if (typeof selectedIndex === 'number' && selectedIndex === index) {
            optionDiv.classList.add('selected');
        }

        if (appState.examSubmitted) {
            optionDiv.classList.add('disabled');
        }

        elements.optionsContainer.appendChild(optionDiv);
    });
}

function displayFillBlank(storedAnswer) {
    elements.fillBlankContainer.classList.remove('hidden');
    elements.fillBlankInput.value = storedAnswer.answer || '';
    elements.fillBlankInput.disabled = appState.examSubmitted;
    elements.fillBlankInput.oninput = (e) => {
        if (appState.examSubmitted) return;
        storeAnswer({ answer: e.target.value });
    };

    if (!appState.examSubmitted) {
        elements.fillBlankInput.focus();
    }
}

function displayShortAnswer(storedAnswer) {
    elements.shortAnswerContainer.classList.remove('hidden');
    elements.shortAnswerInput.value = storedAnswer.answer || '';
    elements.shortAnswerInput.disabled = appState.examSubmitted;
    elements.shortAnswerInput.oninput = (e) => {
        if (appState.examSubmitted) return;
        storeAnswer({ answer: e.target.value });
    };

    if (!appState.examSubmitted) {
        elements.shortAnswerInput.focus();
    }
}
function displayMatching(question, storedAnswer) {
    elements.matchingContainer.classList.remove('hidden');
    elements.matchingGrid.innerHTML = '';

    // Create left column
    const leftColumn = document.createElement('div');
    leftColumn.className = 'matching-column';
    const leftTitle = document.createElement('div');
    leftTitle.className = 'matching-column-title';
    leftTitle.textContent = 'Items';
    leftColumn.appendChild(leftTitle);

    question.leftItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'matching-item';
        itemDiv.dataset.side = 'left';
        itemDiv.dataset.index = index;

        const label = document.createElement('span');
        label.className = 'matching-item-label';
        label.textContent = index + 1;

        const text = document.createElement('span');
        text.textContent = item;

        itemDiv.appendChild(label);
        itemDiv.appendChild(text);

        itemDiv.style.opacity = '1';

        if (!appState.examSubmitted) {
            itemDiv.addEventListener('click', () => selectMatchingItem(itemDiv));
        }

        leftColumn.appendChild(itemDiv);
    });

    // Create right column
    const rightColumn = document.createElement('div');
    rightColumn.className = 'matching-column';
    const rightTitle = document.createElement('div');
    rightTitle.className = 'matching-column-title';
    rightTitle.textContent = 'Matches';
    rightColumn.appendChild(rightTitle);

    question.rightItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'matching-item';
        itemDiv.dataset.side = 'right';
        itemDiv.dataset.index = index;

        const label = document.createElement('span');
        label.className = 'matching-item-label';
        label.textContent = String.fromCharCode(65 + index); // A, B, C, D

        const text = document.createElement('span');
        text.textContent = item;

        itemDiv.appendChild(label);
        itemDiv.appendChild(text);

        itemDiv.style.opacity = '1';

        if (!appState.examSubmitted) {
            itemDiv.addEventListener('click', () => selectMatchingItem(itemDiv));
        }

        rightColumn.appendChild(itemDiv);
    });

    elements.matchingGrid.appendChild(leftColumn);
    elements.matchingGrid.appendChild(rightColumn);

    // Apply stored matches
    const matches = appState.matchingSelections.matches;
    Object.keys(matches).forEach(leftKey => {
        const leftIndex = parseInt(leftKey, 10);
        const rightIndex = matches[leftKey];
        markPendingMatch(leftIndex, rightIndex);
    });

    if (appState.examSubmitted) {
        elements.matchingGrid.querySelectorAll('.matching-item').forEach(item => {
            item.classList.add('disabled');
            item.style.opacity = '1';
        });
    }
}

function selectMatchingItem(itemDiv) {
    if (appState.examSubmitted) return;

    const side = itemDiv.dataset.side;
    const index = parseInt(itemDiv.dataset.index);

    // If item is already matched, don't allow reselection
    if (itemDiv.classList.contains('matched-correct') || itemDiv.classList.contains('matched-incorrect')) {
        return;
    }

    // Remove previous selection from this side
    document.querySelectorAll(`.matching-item[data-side="${side}"]`).forEach(item => {
        if (!item.classList.contains('matched-correct') && !item.classList.contains('matched-incorrect')) {
            item.classList.remove('selected');
        }
    });

    // Select current item
    itemDiv.classList.add('selected');
    appState.matchingSelections[side] = index;

    // If both sides are selected, create a match
    if (appState.matchingSelections.left !== null && appState.matchingSelections.right !== null) {
        const leftIndex = appState.matchingSelections.left;
        const rightIndex = appState.matchingSelections.right;

        // Store the match
        appState.matchingSelections.matches[leftIndex] = rightIndex;
        storeAnswer({
            matches: { ...appState.matchingSelections.matches }
        });

        // Remove selections
        appState.matchingSelections.left = null;
        appState.matchingSelections.right = null;

        // Update UI to show items are matched (but not yet validated)
        markPendingMatch(leftIndex, rightIndex);
    }
}

function markPendingMatch(leftIndex, rightIndex) {
    const leftItem = document.querySelector(`.matching-item[data-side="left"][data-index="${leftIndex}"]`);
    const rightItem = document.querySelector(`.matching-item[data-side="right"][data-index="${rightIndex}"]`);

    if (leftItem && rightItem) {
        leftItem.classList.remove('selected');
        rightItem.classList.remove('selected');

        if (!appState.examSubmitted) {
            leftItem.style.opacity = '0.7';
            rightItem.style.opacity = '0.7';
        }
    }
}

function storeAnswer(updates) {
    const index = appState.currentQuestionIndex;
    const existing = appState.userAnswers[index] || {};
    appState.userAnswers[index] = {
        ...existing,
        ...updates
    };
    updateQuestionNavigation();
}

// ==========================================
// QUESTION NAVIGATION - PAGINATION STYLE
// ==========================================
function generateQuestionNavigation() {
    if (!elements.navNumbers) return;

    elements.navNumbers.innerHTML = '';

    // Add Prev button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-number-btn nav-prev-next nav-prev';
    prevBtn.innerHTML = '« Prev';
    prevBtn.addEventListener('click', previousQuestion);
    prevBtn.id = 'navPrevBtn';
    elements.navNumbers.appendChild(prevBtn);

    // Generate adaptive pagination centered on current question
    const totalQuestions = appState.questions.length;
    const current = appState.currentQuestionIndex;
    const range = 2; // Show 2 numbers on each side of current
    const maxVisible = 7; // Total numbers to show when not showing all

    if (totalQuestions <= maxVisible) {
        // Show all numbers if total is small
        for (let i = 0; i < totalQuestions; i++) {
            createNumberButton(i);
        }
    } else {
        // Calculate start and end of visible range
        let start = Math.max(0, current - range);
        let end = Math.min(totalQuestions - 1, current + range);

        // Adjust if at the beginning or end
        if (current < range) {
            end = Math.min(totalQuestions - 1, maxVisible - 1);
        } else if (current > totalQuestions - range - 1) {
            start = Math.max(0, totalQuestions - maxVisible);
        }

        // Show first number if not in range
        if (start > 0) {
            createNumberButton(0);
            if (start > 1) {
                const ellipsis = document.createElement('button');
                ellipsis.className = 'nav-number-btn ellipsis';
                ellipsis.textContent = '...';
                ellipsis.disabled = true;
                elements.navNumbers.appendChild(ellipsis);
            }
        }

        // Show visible range
        for (let i = start; i <= end; i++) {
            createNumberButton(i);
        }

        // Show last number if not in range
        if (end < totalQuestions - 1) {
            if (end < totalQuestions - 2) {
                const ellipsis = document.createElement('button');
                ellipsis.className = 'nav-number-btn ellipsis';
                ellipsis.textContent = '...';
                ellipsis.disabled = true;
                elements.navNumbers.appendChild(ellipsis);
            }
            createNumberButton(totalQuestions - 1);
        }
    }

    // Add Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-number-btn nav-prev-next nav-next';
    nextBtn.innerHTML = 'Next »';
    nextBtn.addEventListener('click', nextQuestion);
    nextBtn.id = 'navNextBtn';
    elements.navNumbers.appendChild(nextBtn);

    updateQuestionNavigation();
}

function createNumberButton(index) {
    const btn = document.createElement('button');
    btn.className = 'nav-number-btn';
    btn.textContent = index + 1;
    btn.dataset.questionIndex = index;
    btn.addEventListener('click', () => navigateToQuestion(index));
    elements.navNumbers.appendChild(btn);
}

function updateQuestionNavigation() {
    if (!elements.navNumbers || appState.questions.length === 0) return;

    const buttons = elements.navNumbers.querySelectorAll('.nav-number-btn:not(.nav-prev-next):not(.ellipsis)');
    const prevBtn = document.getElementById('navPrevBtn');
    const nextBtn = document.getElementById('navNextBtn');

    buttons.forEach((btn) => {
        const btnIndex = parseInt(btn.dataset.questionIndex);
        btn.classList.remove('current', 'answered', 'unanswered');

        // Mark current question
        if (btnIndex === appState.currentQuestionIndex) {
            btn.classList.add('current');
        }

        // Check if question is answered
        const answer = appState.userAnswers[btnIndex];
        const question = appState.questions[btnIndex];

        if (isQuestionAnswered(btnIndex, answer, question)) {
            btn.classList.add('answered');
        } else {
            btn.classList.add('unanswered');
        }
    });

    // Update Prev/Next button states
    if (prevBtn) {
        prevBtn.disabled = appState.currentQuestionIndex === 0;
    }
    if (nextBtn) {
        const isLastQuestion = appState.currentQuestionIndex === appState.questions.length - 1;
        // Disable Next button only on last question (users should use Submit instead)
        nextBtn.disabled = isLastQuestion;
    }

    // Update submit button state
    updateSubmitButtonState();
}

function isQuestionAnswered(index, answer, question) {
    if (!answer) return false;

    switch (question.type) {
        case 'mcq':
        case 'tf':
            return typeof answer.answer !== 'undefined' || typeof answer.selectedIndex === 'number';
        case 'fill':
        case 'short':
            return answer.answer && answer.answer.trim() !== '';
        case 'matching':
            return answer.matches && Object.keys(answer.matches).length === question.leftItems.length;
        default:
            return false;
    }
}

function updateSubmitButtonState() {
    if (appState.examSubmitted) {
        elements.submitBtnBottom.classList.add('hidden');
        return;
    }

    // Check if all questions are answered
    const allAnswered = appState.questions.every((question, index) => {
        const answer = appState.userAnswers[index];
        return isQuestionAnswered(index, answer, question);
    });

    elements.submitBtnBottom.disabled = !allAnswered;
}

function navigateToQuestion(index) {
    if (index < 0 || index >= appState.questions.length) return;

    // Save current answer silently if not in review mode (allow free navigation)
    if (!appState.examSubmitted) {
        saveCurrentAnswerSilently();
    }

    appState.currentQuestionIndex = index;
    displayQuestion();
}

function selectOption(index, question, value) {
    if (appState.examSubmitted) return;

    // Remove selection from all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Select clicked option
    const selectedOption = document.querySelector(`.option[data-index="${index}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
        const storedValue = question.type === 'tf' ? value : index;
        storeAnswer({
            answer: storedValue,
            selectedIndex: index
        });
    }
}

// ==========================================
// ANSWER SUBMISSION
// ==========================================
function saveCurrentAnswerSilently() {
    // Save current answer without validation alerts (for free navigation)
    const question = appState.questions[appState.currentQuestionIndex];
    const storedAnswer = appState.userAnswers[appState.currentQuestionIndex] || {};

    switch (question.type) {
        case 'mcq':
        case 'tf': {
            const hasStoredIndex = typeof storedAnswer.selectedIndex === 'number';
            if ((question.type === 'mcq' && typeof storedAnswer.answer === 'number') || hasStoredIndex) {
                return;
            }

            const selected = document.querySelector('.option.selected');
            if (selected) {
                const choiceIndex = parseInt(selected.dataset.index, 10);
                const choiceValue = question.type === 'tf'
                    ? choiceIndex === 0
                    : choiceIndex;

                storeAnswer({
                    answer: choiceValue,
                    selectedIndex: choiceIndex
                });
            }
            return;
        }

        case 'fill': {
            const response = elements.fillBlankInput.value.trim();
            if (response) {
                storeAnswer({ answer: response });
            }
            return;
        }

        case 'short': {
            const response = elements.shortAnswerInput.value.trim();
            if (response) {
                storeAnswer({ answer: response });
            }
            return;
        }

        case 'matching': {
            const matches = {
                ...appState.matchingSelections.matches
            };
            if (Object.keys(matches).length > 0) {
                storeAnswer({ matches });
            }
            return;
        }

        default:
            return;
    }
}

function validateCurrentAnswer() {
    const question = appState.questions[appState.currentQuestionIndex];
    const storedAnswer = appState.userAnswers[appState.currentQuestionIndex] || {};

    switch (question.type) {
        case 'mcq':
        case 'tf': {
            const hasStoredIndex = typeof storedAnswer.selectedIndex === 'number';
            if ((question.type === 'mcq' && typeof storedAnswer.answer === 'number') || hasStoredIndex) {
                return true;
            }

            const selected = document.querySelector('.option.selected');
            if (!selected) {
                alert('Please select an answer before continuing.');
                return false;
            }

            const choiceIndex = parseInt(selected.dataset.index, 10);
            const choiceValue = question.type === 'tf'
                ? choiceIndex === 0
                : choiceIndex;

            storeAnswer({
                answer: choiceValue,
                selectedIndex: choiceIndex
            });
            return true;
        }

        case 'fill': {
            const response = elements.fillBlankInput.value.trim();
            if (!response) {
                alert('Please enter an answer before continuing.');
                return false;
            }
            storeAnswer({ answer: response });
            return true;
        }

        case 'short': {
            const response = elements.shortAnswerInput.value.trim();
            if (!response) {
                alert('Please enter an answer before continuing.');
                return false;
            }
            storeAnswer({ answer: response });
            return true;
        }

        case 'matching': {
            const matches = {
                ...appState.matchingSelections.matches
            };

            const requiredMatches = Array.isArray(question.leftItems)
                ? question.leftItems.length
                : 0;

            if (Object.keys(matches).length !== requiredMatches) {
                alert('Please complete all matches before continuing.');
                return false;
            }

            storeAnswer({ matches });
            return true;
        }

        default:
            return true;
    }
}

function submitExam() {
    if (appState.examSubmitted) return;

    // Validate current answer
    const isValid = validateCurrentAnswer();
    if (!isValid) return;

    // Check if all questions are answered
    const allAnswered = appState.questions.every((question, index) => {
        const answer = appState.userAnswers[index];
        return isQuestionAnswered(index, answer, question);
    });

    if (!allAnswered) {
        alert('Please answer all questions before submitting the exam.');
        return;
    }

    const results = gradeExam();

    appState.examSubmitted = true;
    appState.examSummary = results;

    updateScoreDisplay();
    saveProgress();

    // Navigate to review screen
    showReviewScreen();
}

function gradeExam() {
    let correctCount = 0;
    let incorrectCount = 0;
    const topicPerformance = {};

    appState.questions.forEach((question, index) => {
        const storedAnswer = appState.userAnswers[index] || {};
        let isCorrect = false;

        switch (question.type) {
            case 'mcq':
                isCorrect = typeof storedAnswer.answer === 'number' && storedAnswer.answer === question.correct;
                break;
            case 'tf':
                if (typeof question.correct === 'boolean') {
                    isCorrect = typeof storedAnswer.answer === 'boolean' && storedAnswer.answer === question.correct;
                } else {
                    isCorrect = typeof storedAnswer.selectedIndex === 'number' && storedAnswer.selectedIndex === question.correct;
                }
                break;
            case 'fill':
                if (storedAnswer.answer) {
                    isCorrect = checkFillAnswer(storedAnswer.answer, question.correct);
                }
                break;
            case 'short':
                isCorrect = !!(storedAnswer.answer && storedAnswer.answer.trim());
                break;
            case 'matching':
                if (storedAnswer.matches) {
                    isCorrect = checkMatchingAnswer(storedAnswer.matches, question.correctMatches);
                }
                break;
            default:
                isCorrect = false;
        }

        appState.userAnswers[index] = {
            ...storedAnswer,
            correct: isCorrect
        };

        if (isCorrect) {
            correctCount++;
        } else {
            incorrectCount++;
        }

        // Track topic performance (if checkup mode)
        if (appState.checkupConfig.isCheckup && appState.checkupConfig.topics.length > 0) {
            const topicIndex = Math.floor(index / appState.checkupConfig.questionsPerTopic);
            const topic = appState.checkupConfig.topics[topicIndex];
            if (topic) {
                if (!topicPerformance[topic.name]) {
                    topicPerformance[topic.name] = { correct: 0, total: 0 };
                }
                topicPerformance[topic.name].total++;
                if (isCorrect) {
                    topicPerformance[topic.name].correct++;
                }
            }
        }
    });

    const totalQuestions = appState.questions.length;
    const percentage = totalQuestions
        ? Math.round((correctCount / totalQuestions) * 100)
        : 0;

    appState.scores.correct = correctCount;
    appState.scores.incorrect = incorrectCount;
    appState.scores.total = correctCount * 10;

    // Sort topic performance by score (descending)
    const topicBreakdown = Object.entries(topicPerformance)
        .map(([name, data]) => ({
            name,
            correct: data.correct,
            total: data.total,
            percentage: data.total ? Math.round((data.correct / data.total) * 100) : 0
        }))
        .sort((a, b) => b.percentage - a.percentage);

    return {
        correct: correctCount,
        incorrect: incorrectCount,
        total: totalQuestions,
        percentage,
        topicBreakdown
    };
}

// ==========================================
// REVIEW SCREEN
// ==========================================
function showReviewScreen() {
    // Hide question section, show review screen
    elements.questionSection.classList.add('hidden');
    elements.reviewScreen.classList.remove('hidden');

    const results = appState.examSummary;

    // Update score header
    elements.reviewScore.textContent = `Score: ${results.correct}/${results.total} (${results.percentage}%)`;
    elements.reviewScoreDetails.textContent = `You answered ${results.correct} out of ${results.total} questions correctly`;

    // Generate topic badges
    elements.reviewTopics.innerHTML = '';
    if (results.topicBreakdown && results.topicBreakdown.length > 0) {
        results.topicBreakdown.forEach(topic => {
            const badge = document.createElement('div');
            badge.className = 'review-topic-badge';

            // Classify performance
            if (topic.percentage >= 80) {
                badge.classList.add('mastered');
            } else if (topic.percentage >= 60) {
                badge.classList.add('good');
            } else {
                badge.classList.add('needs-work');
            }

            badge.textContent = `${topic.name}: ${topic.correct}/${topic.total} (${topic.percentage}%)`;
            elements.reviewTopics.appendChild(badge);
        });
    }

    // Generate all question cards
    elements.reviewAllQuestions.innerHTML = '';
    appState.questions.forEach((question, index) => {
        const card = createReviewQuestionCard(question, index);
        elements.reviewAllQuestions.appendChild(card);
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

function createReviewQuestionCard(question, index) {
    const answer = appState.userAnswers[index] || {};
    const isCorrect = !!answer.correct;

    const card = document.createElement('div');
    card.className = `review-question-card ${isCorrect ? 'correct' : 'incorrect'}`;

    // Header
    const header = document.createElement('div');
    header.className = 'review-question-header';

    const questionNum = document.createElement('span');
    questionNum.className = 'review-question-number';
    questionNum.textContent = `Question ${index + 1}`;

    const resultBadge = document.createElement('div');
    resultBadge.className = `review-result-badge ${isCorrect ? 'correct' : 'incorrect'}`;
    resultBadge.innerHTML = isCorrect
        ? '<i class="fas fa-check-circle"></i> Correct'
        : '<i class="fas fa-times-circle"></i> Incorrect';

    header.appendChild(questionNum);
    header.appendChild(resultBadge);
    card.appendChild(header);

    // Question text
    const questionText = document.createElement('div');
    questionText.className = 'review-question-text';
    questionText.textContent = question.question;
    card.appendChild(questionText);

    // User answer
    const userAnswerSection = document.createElement('div');
    userAnswerSection.className = 'review-answer-section';

    const userLabel = document.createElement('div');
    userLabel.className = 'review-answer-label your-answer';
    userLabel.innerHTML = '<i class="fas fa-user"></i> Your Answer:';

    const userContent = document.createElement('div');
    userContent.className = `review-answer-content ${isCorrect ? 'correct' : 'incorrect'}`;
    userContent.textContent = formatUserAnswer(question, answer);

    userAnswerSection.appendChild(userLabel);
    userAnswerSection.appendChild(userContent);
    card.appendChild(userAnswerSection);

    // Correct answer
    const correctAnswerSection = document.createElement('div');
    correctAnswerSection.className = 'review-answer-section';

    const correctLabel = document.createElement('div');
    correctLabel.className = 'review-answer-label correct-answer';
    correctLabel.innerHTML = '<i class="fas fa-check-circle"></i> Correct Answer:';

    const correctContent = document.createElement('div');
    correctContent.className = 'review-answer-content correct';
    correctContent.textContent = formatCorrectAnswer(question);

    correctAnswerSection.appendChild(correctLabel);
    correctAnswerSection.appendChild(correctContent);
    card.appendChild(correctAnswerSection);

    // Explanation
    if (question.explanation) {
        const explanation = document.createElement('div');
        explanation.className = 'review-explanation';

        const explLabel = document.createElement('div');
        explLabel.className = 'review-explanation-label';
        explLabel.innerHTML = '<i class="fas fa-lightbulb"></i> Explanation';

        const explText = document.createElement('div');
        explText.className = 'review-explanation-text';
        explText.innerHTML = question.explanation;

        explanation.appendChild(explLabel);
        explanation.appendChild(explText);
        card.appendChild(explanation);
    }

    return card;
}

function formatUserAnswer(question, answer) {
    if (!answer || !answer.answer && !answer.matches) {
        return 'Unanswered';
    }

    switch (question.type) {
        case 'mcq':
            return typeof answer.answer === 'number'
                ? question.options[answer.answer]
                : 'Unanswered';
        case 'tf':
            return typeof answer.answer === 'boolean'
                ? (answer.answer ? 'True' : 'False')
                : 'Unanswered';
        case 'fill':
        case 'short':
            return answer.answer || 'Unanswered';
        case 'matching':
            if (answer.matches) {
                const matches = [];
                Object.keys(answer.matches).forEach(leftIdx => {
                    const left = question.leftItems[leftIdx];
                    const right = question.rightItems[answer.matches[leftIdx]];
                    matches.push(`${left} → ${right}`);
                });
                return matches.join(', ');
            }
            return 'Unanswered';
        default:
            return 'Unanswered';
    }
}

function formatCorrectAnswer(question) {
    switch (question.type) {
        case 'mcq':
            return question.options[question.correct];
        case 'tf':
            if (typeof question.correct === 'boolean') {
                return question.correct ? 'True' : 'False';
            }
            return question.correct === 0 ? 'True' : 'False';
        case 'fill':
            return Array.isArray(question.correct)
                ? question.correct.join(' or ')
                : question.correct;
        case 'short':
            return 'See explanation for expected answer';
        case 'matching':
            if (question.correctMatches) {
                const matches = [];
                Object.keys(question.correctMatches).forEach(leftIdx => {
                    const left = question.leftItems[leftIdx];
                    const right = question.rightItems[question.correctMatches[leftIdx]];
                    matches.push(`${left} → ${right}`);
                });
                return matches.join(', ');
            }
            return 'See explanation';
        default:
            return 'N/A';
    }
}

function retakeExam() {
    // Reset state
    appState.currentQuestionIndex = 0;
    appState.userAnswers = {};
    appState.examSubmitted = false;
    appState.examSummary = null;

    // Check if this is a checkup - if so, show setup screen instead
    if (appState.checkupConfig.isCheckup) {
        elements.reviewScreen.classList.add('hidden');
        showCheckupSetup(appState.currentSection);
    } else {
        // Hide review, show question section
        elements.reviewScreen.classList.add('hidden');
        elements.questionSection.classList.remove('hidden');

        // Regenerate navigation and display first question
        generateQuestionNavigation();
        displayQuestion();
    }
}

function checkFillAnswer(userAnswer, correctAnswers) {
    const normalized = userAnswer.toLowerCase().trim();

    if (Array.isArray(correctAnswers)) {
        return correctAnswers.some(correct =>
            correct.toLowerCase().trim() === normalized
        );
    }

    return correctAnswers.toLowerCase().trim() === normalized;
}

function checkMatchingAnswer(userMatches, correctMatches) {
    for (const leftIndex in correctMatches) {
        const expectedRight = correctMatches[leftIndex];
        const userRight = userMatches[leftIndex];

        if (userRight !== expectedRight) {
            return false;
        }
    }

    return Object.keys(userMatches).length === Object.keys(correctMatches).length;
}

function renderReviewFeedback(question, storedAnswer) {
    const isCorrect = !!storedAnswer.correct;

    elements.feedbackContainer.classList.remove('hidden');
    elements.feedbackContainer.className = 'feedback-container';
    elements.feedbackContainer.classList.add(isCorrect ? 'correct' : 'incorrect');

    elements.feedbackMessage.innerHTML = isCorrect
        ? `<i class="fas fa-check-circle"></i> Correct`
        : `<i class="fas fa-times-circle"></i> Incorrect`;

    // Build summary with topic breakdown on first question
    let summaryIntro = '';
    if (appState.examSummary && appState.currentQuestionIndex === 0) {
        summaryIntro = `<div class="exam-summary">
            <strong>Overall Score:</strong> ${appState.examSummary.correct}/${appState.examSummary.total} (${appState.examSummary.percentage}%)
        </div>`;

        // Add topic breakdown if available
        if (appState.examSummary.topicBreakdown && appState.examSummary.topicBreakdown.length > 0) {
            summaryIntro += '<div class="topic-breakdown"><strong>Performance by Topic:</strong><ul>';
            appState.examSummary.topicBreakdown.forEach(topic => {
                summaryIntro += `<li><strong>${topic.name}:</strong> ${topic.correct}/${topic.total} (${topic.percentage}%)</li>`;
            });
            summaryIntro += '</ul></div>';
        }
        summaryIntro += '<br>';
    }

    let userAnswerHtml = '';

    if (question.type === 'fill' || question.type === 'short') {
        const answerText = storedAnswer.answer ? storedAnswer.answer : '<em class="unanswered-text">Unanswered</em>';
        userAnswerHtml = `<div class="user-answer"><strong>Your answer:</strong> ${answerText}</div><br>`;
    } else if (question.type === 'tf') {
        const answerDisplay = typeof storedAnswer.answer === 'boolean'
            ? (storedAnswer.answer ? 'True' : 'False')
            : '<em class="unanswered-text">Unanswered</em>';
        userAnswerHtml = `<div class="user-answer"><strong>Your answer:</strong> ${answerDisplay}</div><br>`;
    } else if (question.type === 'mcq') {
        if (typeof storedAnswer.answer === 'number') {
            const selectedOption = question.options[storedAnswer.answer];
            userAnswerHtml = `<div class="user-answer"><strong>Your answer:</strong> ${selectedOption}</div><br>`;
        } else {
            userAnswerHtml = `<div class="user-answer"><strong>Your answer:</strong> <em class="unanswered-text">Unanswered</em></div><br>`;
        }
    } else if (question.type === 'matching') {
        if (!storedAnswer.matches || Object.keys(storedAnswer.matches).length === 0) {
            userAnswerHtml = `<div class="user-answer"><strong>Your answer:</strong> <em class="unanswered-text">Unanswered</em></div><br>`;
        }
    }

    elements.explanation.innerHTML = `${summaryIntro}${userAnswerHtml}${question.explanation || ''}`;

    if (question.type === 'mcq' || question.type === 'tf') {
        applyMultipleChoiceReview(question, storedAnswer);
    }

    if (question.type === 'matching') {
        applyMatchingReview(question, storedAnswer);
    }
}

function applyMultipleChoiceReview(question, storedAnswer) {
    const options = document.querySelectorAll('.option');

    const correctIndex = (() => {
        if (question.type === 'tf') {
            if (typeof question.correct === 'boolean') {
                return question.correct ? 0 : 1;
            }
            return typeof question.correct === 'number' ? question.correct : null;
        }
        return typeof question.correct === 'number' ? question.correct : null;
    })();

    options.forEach((opt, index) => {
        opt.classList.add('disabled');

        if (correctIndex !== null && index === correctIndex) {
            opt.classList.add('correct');
        }

        const selectedIndex = typeof storedAnswer.selectedIndex === 'number'
            ? storedAnswer.selectedIndex
            : storedAnswer.answer;

        if (typeof selectedIndex === 'number' && selectedIndex === index) {
            if (correctIndex !== null && index === correctIndex) {
                opt.classList.add('correct');
            } else {
                opt.classList.add('incorrect');
            }
            opt.classList.add('selected');
        }
    });
}

function applyMatchingReview(question, storedAnswer) {
    if (!question.correctMatches) return;

    const matches = storedAnswer.matches || {};

    Object.keys(question.correctMatches).forEach(leftKey => {
        const leftIndex = parseInt(leftKey, 10);
        const expectedRight = question.correctMatches[leftKey];
        const chosenRight = matches[leftKey];

        const leftItem = document.querySelector(`.matching-item[data-side="left"][data-index="${leftIndex}"]`);
        const rightItem = document.querySelector(`.matching-item[data-side="right"][data-index="${expectedRight}"]`);

        if (!leftItem) return;

        if (typeof chosenRight === 'number') {
            const selectedRightItem = document.querySelector(`.matching-item[data-side="right"][data-index="${chosenRight}"]`);
            const isCorrect = chosenRight === expectedRight;

            leftItem.classList.add(isCorrect ? 'matched-correct' : 'matched-incorrect');

            if (selectedRightItem) {
                selectedRightItem.classList.add(isCorrect ? 'matched-correct' : 'matched-incorrect');
            }
        } else {
            leftItem.classList.add('matched-incorrect');
            if (rightItem) {
                rightItem.classList.add('matched-correct');
            }
        }

        if (rightItem) {
            rightItem.classList.add('matched-correct');
        }
    });

    elements.matchingContainer.querySelectorAll('.matching-item').forEach(item => {
        item.classList.add('disabled');
        item.style.opacity = '1';
    });
}

// ==========================================
// NAVIGATION BETWEEN QUESTIONS
// ==========================================
function handleForwardNavigation() {
    const isLastQuestion = appState.currentQuestionIndex === appState.questions.length - 1;

    if (!appState.examSubmitted && isLastQuestion) {
        submitExam();
    } else {
        nextQuestion();
    }
}

function nextQuestion() {
    if (!appState.examSubmitted) {
        saveCurrentAnswerSilently();
    }

    if (appState.currentQuestionIndex < appState.questions.length - 1) {
        appState.currentQuestionIndex++;
        displayQuestion();
    } else if (appState.examSubmitted) {
        goToHome();
    }
}

function previousQuestion() {
    if (!appState.examSubmitted) {
        saveCurrentAnswerSilently();
    }

    if (appState.currentQuestionIndex > 0) {
        appState.currentQuestionIndex--;
        displayQuestion();
    }
}

function updateNavigationButtons() {
    // No longer needed - using bottom navigation only
}

// ==========================================
// PROGRESS TRACKING
// ==========================================
function updateProgress() {
    const total = appState.questions.length;
    const current = appState.currentQuestionIndex + 1;
    const percentage = (current / total) * 100;

    elements.progressBar.style.width = `${percentage}%`;
    if (appState.examSubmitted && appState.examSummary) {
        elements.progressText.textContent = `${current}/${total} • Score ${appState.examSummary.correct}/${appState.examSummary.total}`;
    } else {
        elements.progressText.textContent = `${current}/${total}`;
    }
}

function updateScoreDisplay() {
    if (elements.currentScore) elements.currentScore.textContent = appState.scores.total;
    if (elements.correctCount) elements.correctCount.textContent = appState.scores.correct;
    if (elements.incorrectCount) elements.incorrectCount.textContent = appState.scores.incorrect;
    if (elements.totalScore) elements.totalScore.textContent = `${appState.scores.total} pts`;
}

// ==========================================
// LOCAL STORAGE
// ==========================================
function saveProgress() {
    const data = {
        scores: appState.scores,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('studyPhysioProgress', JSON.stringify(data));
}

function loadProgress() {
    const saved = localStorage.getItem('studyPhysioProgress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            appState.scores = data.scores;
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        appState.scores = {
            total: 0,
            correct: 0,
            incorrect: 0
        };
        localStorage.removeItem('studyPhysioProgress');
        updateScoreDisplay();
    }
}

// ==========================================
// CHECKUP SETUP FUNCTIONS
// ==========================================
function showCheckupSetup(section) {
    // Store checkup info
    appState.checkupConfig.isCheckup = true;
    appState.checkupConfig.allQuestions = questionBank[section] || [];
    appState.checkupConfig.questionsPerTopic = 0;
    appState.checkupConfig.selectedTopics = new Set();
    appState.examSubmitted = false;
    appState.examSummary = null;
    appState.userAnswers = {};

    // Parse topics from questions
    const topics = parseTopicsFromQuestions(appState.checkupConfig.allQuestions);
    appState.checkupConfig.topics = topics;

    // Initially select all topics
    topics.forEach((_, index) => {
        appState.checkupConfig.selectedTopics.add(index);
    });

    // Hide other sections, show checkup setup
    elements.homeSection.classList.add('hidden');
    elements.questionSection.classList.add('hidden');
    elements.checkupSetupSection.classList.remove('hidden');

    // Update title and info
    const checkupName = section.includes('checkup1') ? 'Pillar Checkup 1' : 'Pillar Checkup 2';
    elements.checkupTitle.textContent = checkupName;
    elements.totalAvailableQuestions.textContent = appState.checkupConfig.allQuestions.length;

    // Populate topic pills
    populateTopicPills(topics);

    // Setup event listeners
    setupCheckupEventListeners();

    // Update question count
    updateQuestionCount();
}

function parseTopicsFromQuestions(questions) {
    const topics = [];

    // Group questions by topic based on order (5 questions per topic)
    const topicNames = [
        'Health', 'Signs and Symptoms', 'Social Determinants', 'Social Connections', 'Social Media',
        'Nutrition Myths', 'Mediterranean Diet', 'Homeostasis',
        'Blood Glucose', 'Insulin and Glucagon'
    ];

    // For Pillar Checkup 2
    const topicNames2 = [
        'Types of Exercise', 'Exercise Guidelines', 'Blood pH', 'Sleep Facts',
        'REM Sleep', 'Sleep Deprivation', 'Acute Stress',
        'Chronic Stress', 'Trauma and PTSD', 'Healthcare'
    ];

    // Determine which topic set to use based on section
    const names = appState.currentSection.includes('checkup2') ? topicNames2 : topicNames;

    // Group questions into topics (5 questions each)
    for (let i = 0; i < questions.length; i++) {
        const topicIndex = Math.floor(i / 5);
        if (!topics[topicIndex]) {
            topics[topicIndex] = {
                number: topicIndex + 1,
                name: names[topicIndex] || `Topic ${topicIndex + 1}`,
                questions: []
            };
        }
        topics[topicIndex].questions.push(questions[i]);
    }

    return topics;
}

function populateTopicPills(topics) {
    elements.topicsPills.innerHTML = '';

    topics.forEach((topic, index) => {
        const pill = document.createElement('button');
        pill.className = 'topic-pill';
        pill.textContent = topic.name;
        pill.dataset.topicIndex = index;
        pill.addEventListener('click', () => toggleTopic(index));
        elements.topicsPills.appendChild(pill);
    });
}

function toggleTopic(topicIndex) {
    if (appState.checkupConfig.selectedTopics.has(topicIndex)) {
        appState.checkupConfig.selectedTopics.delete(topicIndex);
    } else {
        appState.checkupConfig.selectedTopics.add(topicIndex);
    }

    // Update pill appearance
    const pills = elements.topicsPills.querySelectorAll('.topic-pill');
    pills[topicIndex].classList.toggle('unselected');

    // Update question count
    updateQuestionCount();
}

function setupCheckupEventListeners() {
    // Number selector buttons
    document.querySelectorAll('.number-btn').forEach(btn => {
        btn.addEventListener('click', handleNumberSelect);
    });

    // Start checkup button
    elements.startCheckupBtn.removeEventListener('click', startCustomCheckup);
    elements.startCheckupBtn.addEventListener('click', startCustomCheckup);

    // Auto-select 1 question per topic by default
    const defaultBtn = document.querySelector('.number-btn[data-count="1"]');
    if (defaultBtn) {
        defaultBtn.click();
    }
}

function handleNumberSelect(e) {
    const btn = e.currentTarget;
    const count = parseInt(btn.dataset.count);

    // Remove selection from all buttons
    document.querySelectorAll('.number-btn').forEach(b => {
        b.classList.remove('selected');
    });

    // Select this button
    btn.classList.add('selected');
    appState.checkupConfig.questionsPerTopic = count;

    // Update question count
    updateQuestionCount();
}

function updateQuestionCount() {
    const selectedTopicCount = appState.checkupConfig.selectedTopics.size;
    const questionsPerTopic = appState.checkupConfig.questionsPerTopic;
    const totalQuestions = selectedTopicCount * questionsPerTopic;

    elements.currentQuestionCount.textContent = totalQuestions;

    // Enable start button only if topics are selected and a number is chosen
    elements.startCheckupBtn.disabled = !(selectedTopicCount > 0 && questionsPerTopic > 0);
}

function startCustomCheckup() {
    const questionsPerTopic = appState.checkupConfig.questionsPerTopic;
    const selectedTopics = appState.checkupConfig.selectedTopics;

    if (questionsPerTopic === 0 || selectedTopics.size === 0) return;

    // Generate customized question set
    const customQuestions = [];

    appState.checkupConfig.topics.forEach((topic, index) => {
        // Only include questions from selected topics
        if (selectedTopics.has(index)) {
            // Randomize questions within this topic
            const shuffled = [...topic.questions].sort(() => Math.random() - 0.5);
            // Take the selected number of questions
            customQuestions.push(...shuffled.slice(0, questionsPerTopic));
        }
    });

    // Set up the question section with custom questions
    appState.questions = customQuestions;
    appState.currentQuestionIndex = 0;
    appState.userAnswers = {};
    appState.examSubmitted = false;
    appState.examSummary = null;

    // Hide setup, show questions
    elements.checkupSetupSection.classList.add('hidden');
    elements.questionSection.classList.remove('hidden');

    // Update section title
    const checkupName = appState.currentSection.includes('checkup1') ? 'Pillar Checkup 1' : 'Pillar Checkup 2';
    elements.sectionTitle.textContent = checkupName;
    elements.sectionTitle.dataset.baseTitle = checkupName;

    // Load first question
    if (appState.questions.length > 0) {
        generateQuestionNavigation();
        displayQuestion();
    }
}

function goToHome() {
    // Hide all sections
    elements.checkupSetupSection.classList.add('hidden');
    elements.questionSection.classList.add('hidden');
    elements.reviewScreen.classList.add('hidden');
    elements.homeSection.classList.remove('hidden');

    // Remove active state from nav items
    elements.navItems.forEach(item => item.classList.remove('active'));

    // Reset state
    appState.currentSection = null;
    appState.currentQuestionIndex = 0;
    appState.questions = [];
    appState.userAnswers = {};
    appState.examSubmitted = false;
    appState.examSummary = null;
}

// ==========================================
// RESPONSIVE BEHAVIOR
// ==========================================
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeSidebar();
    }
});

// ==========================================
// START APPLICATION
// ==========================================
document.addEventListener('DOMContentLoaded', init);
