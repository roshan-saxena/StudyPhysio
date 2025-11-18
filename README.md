# StudyPhysio

Interactive physiology practice questions with instant feedback and progress tracking.

## Quick Start

Open `index.html` in your browser. That's it!

## Features

- Multiple units covering health and physiology topics
- Customizable checkup exams with topic selection
- **Randomized question order** - questions from different topics are mixed together
- Multiple question types (MCQ, True/False, Fill-in-blank, Short answer, Matching)
- Instant feedback with detailed explanations
- Progress tracking and topic performance analysis
- Mobile responsive design

## Project Structure

```
StudyPhysio/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # All styling
├── js/
│   ├── app.js                # Main application logic
│   └── questions/            # Question bank files
│       ├── questions.js
│       ├── pillar-checkups.js
│       ├── unit2-cardiovascular-checkup.js
│       ├── unit3-self-defense-checkup1.js
│       └── unit3-self-defense-checkup2.js
└── README.md
```

## Customizing Questions

Edit files in `js/questions/` to add or modify questions. Each question follows this format:

```javascript
{
    type: 'mcq',  // or 'tf', 'fill', 'short', 'matching'
    question: 'Your question text?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 0,  // index of correct answer
    explanation: 'Explanation text here'
}
```

For checkup exams, questions are automatically randomized so that topics are mixed throughout the test.

## Changing Colors

Edit CSS variables in `css/styles.css`:

```css
--primary-color: #dc2626;
--secondary-color: #e11d48;
```

## Deploy

Push to GitHub and enable GitHub Pages in repository settings.

---

**Note**: Works completely offline. No installation required.
