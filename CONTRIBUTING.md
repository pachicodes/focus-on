# Contributing to Focus On

Thank you for your interest in contributing to Focus On! This guide will help you get started with contributing to this project, especially if you're participating in our workshop about Open Source contributions with GitHub Copilot Agent.

## 🎯 Workshop Context

This project is designed as a practical learning environment for understanding how to contribute to Open Source projects using GitHub Copilot Agent as your intelligent coding partner.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Git](https://git-scm.com/)
- A GitHub account
- GitHub Copilot (if participating in the workshop)

### Setup

1. **Fork the repository** by clicking the "Fork" button on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/yourusername/focus-on.git
   cd focus-on
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

The app should now be running at `http://localhost:8080`.

## How to Contribute

### Step 1: Find an Issue

Look for issues labeled with:
- 🟢 `good-first-issue` - Perfect for beginners
- 🆘 `help-wanted` - Community help needed
- 🎓 `workshop` - Designed for workshop participants

### Step 2: Use GitHub Copilot Agent

If you have GitHub Copilot, use the Agent mode to:
- **Understand the codebase**: Ask Copilot to explain components
- **Get implementation suggestions**: Ask for code examples
- **Debug issues**: Get help with troubleshooting
- **Learn best practices**: Ask about code patterns

Example prompts:
- "Explain how the Pomodoro timer component works"
- "How can I add a new feature to the todo list?"
- "Show me how to implement dark mode toggle"

### Step 3: Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names like:
- `feature/add-task-categories`
- `fix/timer-reset-bug`
- `docs/improve-readme`

### Step 4: Make Your Changes

- Keep changes focused and small
- Follow the existing code style
- Test your changes by running `npm run dev`
- Make sure the app works in both light and dark modes

### Step 5: Commit Your Changes

Use descriptive commit messages:

```bash
git add .
git commit -m "feat: add task categories with color coding

- Add category selection dropdown to task input
- Implement color-coded task display
- Update CSS for category indicators
- Add category filter functionality"
```

### Step 6: Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title and description
- Reference the issue number (e.g., "Closes #5")
- Screenshots if applicable
- Mention if you used Copilot Agent and how it helped

## Code Style Guidelines

### JavaScript
- Use ES6+ features
- Use camelCase for variables and functions
- Add comments for complex logic
- Keep functions small and focused

### CSS
- Use CSS custom properties (variables)
- Follow BEM methodology when possible
- Ensure responsive design
- Test in both light and dark themes

### HTML
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure accessibility compliance

## Project Structure

```
focus-on/
├── src/
│   ├── index.html          # Main HTML structure
│   ├── css/
│   │   └── style.css       # All styles with theme support
│   └── js/
│       ├── app.js          # Main app logic and theme toggling
│       ├── todoList.js     # Todo list functionality
│       └── components/
│           ├── pomodoroTimer.js  # Timer component
│           ├── mediaEmbed.js     # Music player component
│           └── todoList.js       # Legacy todo component
├── package.json
├── README.md
└── CONTRIBUTING.md
```

## Common Contribution Areas

### Easy (Good First Issues)
- Fix typos in documentation
- Add new color themes
- Improve button hover effects
- Add new placeholder texts
- Update README sections

### Medium
- Add task categories
- Implement keyboard shortcuts
- Add task search functionality
- Improve responsive design
- Add sound notifications

### Advanced
- Implement drag & drop for tasks
- Add productivity statistics
- Create PWA functionality
- Add unit tests
- Implement task import/export

## Testing Your Changes

1. **Manual Testing**:
   - Test all features work as expected
   - Check both light and dark modes
   - Test on different screen sizes
   - Verify accessibility with keyboard navigation

2. **Code Review**:
   - Use GitHub Copilot to review your own code
   - Ask Copilot to suggest improvements
   - Check for potential bugs or edge cases

## Workshop Tips

### Using GitHub Copilot Agent Effectively

1. **Start with Understanding**:
   ```
   "Explain how the task completion animation works in this project"
   ```

2. **Ask for Implementation Help**:
   ```
   "How would I add a feature to categorize tasks with colors?"
   ```

3. **Get Code Reviews**:
   ```
   "Review this code and suggest improvements for better performance"
   ```

4. **Learn Best Practices**:
   ```
   "What are the best practices for handling localStorage in this context?"
   ```

### Common Workshop Scenarios

1. **Understanding Existing Code**: Use Copilot to explain complex functions
2. **Implementing New Features**: Ask for step-by-step guidance
3. **Fixing Bugs**: Get help with debugging strategies
4. **Improving Code Quality**: Ask for refactoring suggestions

## Getting Help

- **GitHub Issues**: Ask questions in the issue comments
- **Workshop Facilitators**: During the workshop, ask for help
- **GitHub Copilot**: Use it as your coding partner
- **Community**: Help other workshop participants

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the standards we expect from all contributors.

## Recognition

All contributors will be recognized in our README and releases. Thank you for helping make Focus On better!

---

Happy coding! 🚀 Remember, the goal is to learn and have fun while contributing to Open Source.
