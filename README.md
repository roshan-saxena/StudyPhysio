# StudyPhysio

Interactive physiology practice questions with instant feedback and progress tracking.

## Quick Start

Open `index.html` in your browser. That's it!

## Features

- 5 units covering major physiology systems
- Multiple question types (MCQ, True/False, Fill-in-blank, Short answer)
- Instant feedback with explanations
- Progress tracking
- Mobile responsive

## Customizing Questions

Edit `questions.js` to add or modify questions. Each question follows this format:

```javascript
{
    type: 'mcq',  // or 'tf', 'fill', 'short'
    question: 'Your question text?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correct: 0,  // index of correct answer
    explanation: 'Explanation text here'
}
```

## Changing Colors

Edit CSS variables in `styles.css`:

```css
--primary-color: #dc2626;
--secondary-color: #e11d48;
```

## Deploy

Push to GitHub and enable GitHub Pages in repository settings.

---

**Note**: Works completely offline. No installation required.
