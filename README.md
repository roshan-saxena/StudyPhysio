# StudyPhysio - Interactive Physiology Practice Website

A modern, visually appealing website for physiology practice questions with instant feedback, progress tracking, and mobile-responsive design.

## Features

- **5 Units** covering major physiology topics:
  - Unit 1: Cardiovascular System
  - Unit 2: Respiratory System
  - Unit 3: Nervous System
  - Unit 4: Endocrine System
  - Unit 5: Muscle Physiology

- **Multiple Question Types**:
  - Multiple Choice Questions (MCQ)
  - True/False Questions
  - Fill-in-the-Blank
  - Short Answer Questions

- **Interactive Learning**:
  - Instant feedback after each answer
  - Detailed explanations for every question
  - Progress tracking with visual progress bars
  - Score tracking (total points, correct/incorrect counts)
  - Local storage to save progress

- **Modern Design**:
  - Clean, professional aesthetic
  - Medical-themed color scheme (blues and purples)
  - Smooth animations and transitions
  - Card-based layouts
  - Mobile-responsive with hamburger menu
  - Collapsible unit sections

## File Structure

```
StudyPhysio/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── questions.js    # Question bank with all questions
├── app.js          # Application logic and interactivity
└── README.md       # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No installation needed**: Works completely offline after initial load
3. **Select a section**: Click on any section from the sidebar menu
4. **Answer questions**: Select answers and click "Submit Answer"
5. **View feedback**: Read explanations and click "Next" to continue
6. **Track progress**: Your score is displayed in the header and question section

## Customizing Questions

All questions are stored in the `questions.js` file. Each section follows this structure:

### Question Format

```javascript
'unit1-checkup': [
    {
        type: 'mcq',  // Question type: 'mcq', 'tf', 'fill', 'short'
        question: 'Your question text here?',
        options: [    // Only for MCQ and True/False
            'Option A',
            'Option B',
            'Option C',
            'Option D'
        ],
        correct: 1,   // Index of correct answer (0-based) for MCQ/TF
                      // Or array of correct answers for fill-in-blank
        explanation: 'Detailed explanation with <strong>HTML formatting</strong> if needed.'
    }
]
```

### Question Types

1. **Multiple Choice (mcq)**:
```javascript
{
    type: 'mcq',
    question: 'What is the normal resting heart rate?',
    options: ['40-50 bpm', '60-100 bpm', '110-130 bpm', '140-160 bpm'],
    correct: 1,  // Index 1 = '60-100 bpm'
    explanation: 'The normal range is <strong>60-100 bpm</strong>.'
}
```

2. **True/False (tf)**:
```javascript
{
    type: 'tf',
    question: 'The heart has four chambers.',
    options: ['True', 'False'],
    correct: 0,  // 0 = True, 1 = False
    explanation: 'This is <strong>true</strong>. The heart has two atria and two ventricles.'
}
```

3. **Fill in the Blank (fill)**:
```javascript
{
    type: 'fill',
    question: 'The largest artery in the body is the _______.',
    correct: ['aorta', 'Aorta'],  // Accepts multiple variations
    explanation: 'The <strong>aorta</strong> is the largest artery.'
}
```

4. **Short Answer (short)**:
```javascript
{
    type: 'short',
    question: 'Explain the cardiac cycle.',
    correct: 'Any text (used for reference)',
    explanation: 'The cardiac cycle includes <strong>systole</strong> (contraction) and <strong>diastole</strong> (relaxation).'
}
```

## Adding New Sections

To add a new section:

1. **Add to the HTML** (`index.html`):
```html
<div class="unit-section">
    <button class="unit-header" data-unit="6">
        <i class="fas fa-chevron-down"></i>
        <span>Unit 6: Your New Topic</span>
    </button>
    <div class="unit-content" data-unit="6">
        <a href="#" class="nav-item" data-section="unit6-checkup">
            <i class="fas fa-clipboard-check"></i>
            Checkup Test 6
        </a>
    </div>
</div>
```

2. **Add questions** to `questions.js`:
```javascript
'unit6-checkup': [
    // Your questions here
]
```

## Customizing Colors

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3b82f6;      /* Main blue */
    --secondary-color: #8b5cf6;     /* Purple accent */
    --accent-color: #10b981;        /* Green (correct answers) */
    --error-color: #ef4444;         /* Red (incorrect answers) */
}
```

## Features in Detail

### Progress Tracking
- Automatically saved to browser's local storage
- Persists across browser sessions
- Tracks total score, correct answers, and incorrect answers

### Score System
- 10 points per correct answer
- Score displayed in header and summary section
- Separate counters for correct/incorrect answers

### Mobile Responsive
- Hamburger menu for screens under 1024px
- Touch-friendly interface
- Optimized layouts for tablets and phones

### Keyboard Support
- Press Enter to submit fill-in-the-blank answers
- Smooth navigation with keyboard

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Tips for Students

1. **Read explanations**: Even if you get the answer right, explanations provide additional context
2. **Review incorrect answers**: Focus on understanding why the correct answer is right
3. **Use mobile mode**: Study on your phone during commute or breaks
4. **Track progress**: Watch your score improve over time

## Tips for Instructors

1. **Easy to edit**: Questions are in simple JavaScript objects
2. **Add images**: Use HTML `<img>` tags in question text or explanations
3. **Format text**: Use HTML tags like `<strong>`, `<em>`, `<br>` in explanations
4. **Adjust difficulty**: Mix easy and hard questions in each section
5. **Export/Import**: Share `questions.js` file with other instructors

## Future Enhancements Ideas

- Add images to questions
- Implement timed tests
- Add study mode vs test mode
- Export results to PDF
- Add question randomization
- Implement spaced repetition
- Add flashcard mode
- Multi-language support

## License

Free to use and modify for educational purposes.

## Support

For issues or questions, refer to the code comments in each file or modify as needed for your specific requirements.

---

**Built with ❤️ for physiology students**
