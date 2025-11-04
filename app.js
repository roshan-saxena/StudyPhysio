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
    questionSection: document.getElementById('questionSection'),

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
    appState.questions = questionBank[section] || [];
    appState.userAnswers = {};

    // Show question section
    elements.homeSection.classList.add('hidden');
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

    // Hide all input containers
    elements.optionsContainer.classList.add('hidden');
    elements.fillBlankContainer.classList.add('hidden');
    elements.shortAnswerContainer.classList.add('hidden');
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
        'short': 'Short Answer'
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
