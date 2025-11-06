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

    // Buttons
    submitBtn: document.getElementById('submitBtn'),
    nextBtn: document.getElementById('nextBtn'),
    prevBtn: document.getElementById('prevBtn'),

    // Progress
    progressBar: document.getElementById('progressBar'),
    progressText: document.getElementById('progressText'),
    currentScore: document.getElementById('currentScore'),
    correctCount: document.getElementById('correctCount'),
    incorrectCount: document.getElementById('incorrectCount'),
    totalScore: document.getElementById('totalScore')
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

    // Question buttons
    elements.submitBtn.addEventListener('click', submitAnswer);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.prevBtn.addEventListener('click', previousQuestion);

    // Enter key for fill-in-the-blank
    elements.fillBlankInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitAnswer();
    });
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

    // Load first question
    if (appState.questions.length > 0) {
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

    // Update question info
    elements.questionNumber.textContent = `Question ${appState.currentQuestionIndex + 1}`;
    elements.questionText.textContent = question.question;
    elements.questionTypeBadge.textContent = getQuestionTypeLabel(question.type);

    // Reset matching state
    appState.matchingSelections = {
        left: null,
        right: null,
        matches: {}
    };

    // Hide all input containers
    elements.optionsContainer.classList.add('hidden');
    elements.fillBlankContainer.classList.add('hidden');
    elements.shortAnswerContainer.classList.add('hidden');
    elements.matchingContainer.classList.add('hidden');
    elements.feedbackContainer.classList.add('hidden');

    // Reset buttons
    elements.submitBtn.classList.remove('hidden');
    elements.nextBtn.classList.add('hidden');

    // Display appropriate input type
    switch (question.type) {
        case 'mcq':
        case 'tf':
            displayMultipleChoice(question);
            break;
        case 'fill':
            displayFillBlank(question);
            break;
        case 'short':
            displayShortAnswer(question);
            break;
        case 'matching':
            displayMatching(question);
            break;
    }

    // Update progress
    updateProgress();
    updateNavigationButtons();
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

function displayMultipleChoice(question) {
    elements.optionsContainer.classList.remove('hidden');
    elements.optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.index = index;

        const label = document.createElement('span');
        label.className = 'option-label';
        label.textContent = String.fromCharCode(65 + index); // A, B, C, D

        const text = document.createElement('span');
        text.textContent = option;

        optionDiv.appendChild(label);
        optionDiv.appendChild(text);

        optionDiv.addEventListener('click', () => selectOption(index));

        elements.optionsContainer.appendChild(optionDiv);
    });
}

function displayFillBlank(question) {
    elements.fillBlankContainer.classList.remove('hidden');
    elements.fillBlankInput.value = '';
    elements.fillBlankInput.focus();
}

function displayShortAnswer(question) {
    elements.shortAnswerContainer.classList.remove('hidden');
    elements.shortAnswerInput.value = '';
    elements.shortAnswerInput.focus();
}

function displayMatching(question) {
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
        itemDiv.addEventListener('click', () => selectMatchingItem(itemDiv));

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
        itemDiv.addEventListener('click', () => selectMatchingItem(itemDiv));

        rightColumn.appendChild(itemDiv);
    });

    elements.matchingGrid.appendChild(leftColumn);
    elements.matchingGrid.appendChild(rightColumn);

    // Initialize matching state
    if (!appState.matchingSelections) {
        appState.matchingSelections = {
            left: null,
            right: null,
            matches: {}
        };
    }
}

function selectMatchingItem(itemDiv) {
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

        // Remove selections
        appState.matchingSelections.left = null;
        appState.matchingSelections.right = null;

        // Update UI to show items are matched (but not yet validated)
        const leftItem = document.querySelector(`.matching-item[data-side="left"][data-index="${leftIndex}"]`);
        const rightItem = document.querySelector(`.matching-item[data-side="right"][data-index="${rightIndex}"]`);

        if (leftItem && rightItem) {
            leftItem.classList.remove('selected');
            rightItem.classList.remove('selected');
            leftItem.style.opacity = '0.7';
            rightItem.style.opacity = '0.7';
        }
    }
}

function selectOption(index) {
    // Remove selection from all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Select clicked option
    const selectedOption = document.querySelector(`.option[data-index="${index}"]`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}

// ==========================================
// ANSWER SUBMISSION
// ==========================================
function submitAnswer() {
    const question = appState.questions[appState.currentQuestionIndex];
    let userAnswer = null;
    let isCorrect = false;

    // Get user answer based on question type
    switch (question.type) {
        case 'mcq':
        case 'tf':
            const selected = document.querySelector('.option.selected');
            if (!selected) {
                alert('Please select an answer before submitting.');
                return;
            }
            userAnswer = parseInt(selected.dataset.index);
            isCorrect = userAnswer === question.correct;
            break;

        case 'fill':
            userAnswer = elements.fillBlankInput.value.trim();
            if (!userAnswer) {
                alert('Please enter an answer before submitting.');
                return;
            }
            isCorrect = checkFillAnswer(userAnswer, question.correct);
            break;

        case 'short':
            userAnswer = elements.shortAnswerInput.value.trim();
            if (!userAnswer) {
                alert('Please enter an answer before submitting.');
                return;
            }
            // Short answers are always marked as correct with feedback
            isCorrect = true;
            break;

        case 'matching':
            if (!appState.matchingSelections || Object.keys(appState.matchingSelections.matches).length === 0) {
                alert('Please make at least one match before submitting.');
                return;
            }

            userAnswer = appState.matchingSelections.matches;
            isCorrect = checkMatchingAnswer(userAnswer, question.correctMatches);

            // Update UI to show correct/incorrect matches
            for (const leftIndex in userAnswer) {
                const rightIndex = userAnswer[leftIndex];
                const leftItem = document.querySelector(`.matching-item[data-side="left"][data-index="${leftIndex}"]`);
                const rightItem = document.querySelector(`.matching-item[data-side="right"][data-index="${rightIndex}"]`);

                const isMatchCorrect = question.correctMatches[leftIndex] === rightIndex;

                if (leftItem && rightItem) {
                    leftItem.style.opacity = '1';
                    rightItem.style.opacity = '1';

                    if (isMatchCorrect) {
                        leftItem.classList.add('matched-correct');
                        rightItem.classList.add('matched-correct');
                    } else {
                        leftItem.classList.add('matched-incorrect');
                        rightItem.classList.add('matched-incorrect');
                    }
                }
            }
            break;
    }

    // Store answer
    appState.userAnswers[appState.currentQuestionIndex] = {
        answer: userAnswer,
        correct: isCorrect
    };

    // Update scores
    if (isCorrect) {
        appState.scores.correct++;
        appState.scores.total += 10;
    } else {
        appState.scores.incorrect++;
    }

    // Display feedback
    displayFeedback(question, isCorrect, userAnswer);

    // Update UI
    updateScoreDisplay();
    saveProgress();

    // Disable interaction
    if (question.type === 'mcq' || question.type === 'tf') {
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.add('disabled');
            opt.style.pointerEvents = 'none';
        });
        highlightCorrectAnswer(question);
    } else {
        elements.fillBlankInput.disabled = true;
        elements.shortAnswerInput.disabled = true;
    }

    // Update buttons
    elements.submitBtn.classList.add('hidden');
    elements.nextBtn.classList.remove('hidden');
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
    // Check if all matches are correct
    for (const leftIndex in userMatches) {
        const userRightIndex = userMatches[leftIndex];
        const correctRightIndex = correctMatches[leftIndex];

        if (userRightIndex !== correctRightIndex) {
            return false;
        }
    }

    // Also check if all items were matched
    return Object.keys(userMatches).length === Object.keys(correctMatches).length;
}

function highlightCorrectAnswer(question) {
    const options = document.querySelectorAll('.option');
    const selectedOption = document.querySelector('.option.selected');

    options.forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (opt === selectedOption && index !== question.correct) {
            opt.classList.add('incorrect');
        }
    });
}

function displayFeedback(question, isCorrect, userAnswer) {
    elements.feedbackContainer.classList.remove('hidden');
    elements.feedbackContainer.className = 'feedback-container';
    elements.feedbackContainer.classList.add(isCorrect ? 'correct' : 'incorrect');

    // Feedback message
    if (question.type === 'short') {
        elements.feedbackMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Answer Submitted!
        `;
    } else if (isCorrect) {
        elements.feedbackMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Correct! Well done!
        `;
    } else {
        elements.feedbackMessage.innerHTML = `
            <i class="fas fa-times-circle"></i>
            Incorrect. Review the explanation below.
        `;
    }

    // Explanation
    elements.explanation.innerHTML = question.explanation;
}

// ==========================================
// NAVIGATION BETWEEN QUESTIONS
// ==========================================
function nextQuestion() {
    if (appState.currentQuestionIndex < appState.questions.length - 1) {
        appState.currentQuestionIndex++;
        displayQuestion();

        // Re-enable inputs
        elements.fillBlankInput.disabled = false;
        elements.shortAnswerInput.disabled = false;
    } else {
        showCompletionMessage();
    }
}

function previousQuestion() {
    if (appState.currentQuestionIndex > 0) {
        appState.currentQuestionIndex--;
        displayQuestion();

        // Re-enable inputs
        elements.fillBlankInput.disabled = false;
        elements.shortAnswerInput.disabled = false;

        // If already answered, show feedback
        const previousAnswer = appState.userAnswers[appState.currentQuestionIndex];
        if (previousAnswer) {
            const question = appState.questions[appState.currentQuestionIndex];

            // Restore answer
            if (question.type === 'mcq' || question.type === 'tf') {
                selectOption(previousAnswer.answer);
                highlightCorrectAnswer(question);
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.add('disabled');
                    opt.style.pointerEvents = 'none';
                });
            } else if (question.type === 'fill') {
                elements.fillBlankInput.value = previousAnswer.answer;
                elements.fillBlankInput.disabled = true;
            } else if (question.type === 'short') {
                elements.shortAnswerInput.value = previousAnswer.answer;
                elements.shortAnswerInput.disabled = true;
            }

            // Show feedback
            displayFeedback(question, previousAnswer.correct, previousAnswer.answer);
            elements.submitBtn.classList.add('hidden');
            elements.nextBtn.classList.remove('hidden');
        }
    }
}

function updateNavigationButtons() {
    elements.prevBtn.disabled = appState.currentQuestionIndex === 0;
}

function showCompletionMessage() {
    const percentage = Math.round(
        (appState.scores.correct / appState.questions.length) * 100
    );

    let message = '';
    let emoji = '';

    if (percentage >= 90) {
        emoji = '🏆';
        message = 'Outstanding! You\'re a physiology expert!';
    } else if (percentage >= 75) {
        emoji = '🌟';
        message = 'Great job! You have a strong understanding!';
    } else if (percentage >= 60) {
        emoji = '👍';
        message = 'Good work! Keep practicing to improve!';
    } else {
        emoji = '📚';
        message = 'Keep studying! Review the material and try again!';
    }

    elements.feedbackContainer.classList.remove('hidden', 'incorrect');
    elements.feedbackContainer.classList.add('correct');
    elements.feedbackMessage.innerHTML = `
        <i class="fas fa-flag-checkered"></i>
        Section Complete!
    `;
    elements.explanation.innerHTML = `
        ${emoji} <strong>${message}</strong><br><br>
        You answered <strong>${appState.scores.correct}</strong> out of
        <strong>${appState.questions.length}</strong> questions correctly (${percentage}%).<br><br>
        Select another section from the menu to continue practicing!
    `;

    elements.submitBtn.classList.add('hidden');
    elements.nextBtn.classList.add('hidden');
}

// ==========================================
// PROGRESS TRACKING
// ==========================================
function updateProgress() {
    const total = appState.questions.length;
    const current = appState.currentQuestionIndex + 1;
    const percentage = (current / total) * 100;

    elements.progressBar.style.width = `${percentage}%`;
    elements.progressText.textContent = `${current}/${total}`;
}

function updateScoreDisplay() {
    elements.currentScore.textContent = appState.scores.total;
    elements.correctCount.textContent = appState.scores.correct;
    elements.incorrectCount.textContent = appState.scores.incorrect;
    elements.totalScore.textContent = `${appState.scores.total} pts`;
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

    // Hide setup, show questions
    elements.checkupSetupSection.classList.add('hidden');
    elements.questionSection.classList.remove('hidden');

    // Update section title
    const checkupName = appState.currentSection.includes('checkup1') ? 'Pillar Checkup 1' : 'Pillar Checkup 2';
    elements.sectionTitle.textContent = checkupName;

    // Load first question
    if (appState.questions.length > 0) {
        displayQuestion();
    }
}

function goToHome() {
    // Hide all sections
    elements.checkupSetupSection.classList.add('hidden');
    elements.questionSection.classList.add('hidden');
    elements.homeSection.classList.remove('hidden');

    // Remove active state from nav items
    elements.navItems.forEach(item => item.classList.remove('active'));

    // Reset state
    appState.currentSection = null;
    appState.currentQuestionIndex = 0;
    appState.questions = [];
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
