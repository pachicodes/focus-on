# Workshop Issues - Ready to Create

Este arquivo contém uma lista de issues prontas para serem criadas no GitHub antes do workshop. Copie e cole o conteúdo de cada issue no GitHub.

## 🟢 Issues para Iniciantes (Good First Issue)

### 1. Melhorar mensagens de placeholder
**Labels**: `good-first-issue`, `workshop`, `documentation`
**Título**: [GOOD FIRST ISSUE] Improve placeholder texts throughout the app

**Descrição**:
The current placeholder texts could be more engaging and helpful. Update placeholders to be more descriptive and encouraging.

**Acceptance Criteria**:
- [ ] Update task input placeholder to be more encouraging
- [ ] Add helpful hints in placeholders
- [ ] Ensure placeholders work in both light and dark themes
- [ ] Test that placeholders are accessible

**Files to look at**:
- `src/index.html`
- `src/js/todoList.js`

**Copilot Agent Prompts**:
- "Show me all placeholder texts in this project"
- "What are best practices for writing helpful placeholder text?"
- "How can I make placeholders more engaging for productivity apps?"

---

### 2. Adicionar um script dev ao package.json
**Labels**: `good-first-issue`, `workshop`, `tooling`
**Título**: [GOOD FIRST ISSUE] Add 'dev' script alias to package.json

**Descrição**:
Many developers expect `npm run dev` to start development servers. Currently we only have `npm start`.

**Acceptance Criteria**:
- [ ] Add a "dev" script that does the same as "start"
- [ ] Test that `npm run dev` works correctly
- [ ] Update README if needed

**Files to look at**:
- `package.json`

**Copilot Agent Prompts**:
- "What's the difference between npm start and npm run dev?"
- "Show me how to add scripts to package.json"

---

### 3. Remover arquivos duplicados
**Labels**: `good-first-issue`, `workshop`, `cleanup`
**Título**: [GOOD FIRST ISSUE] Clean up duplicate .new files

**Descrição**:
There are several `.new` files in the codebase that appear to be development artifacts and should be removed.

**Acceptance Criteria**:
- [ ] Remove all `.new` files from the project
- [ ] Ensure removing these files doesn't break functionality
- [ ] Update .gitignore to prevent future .new files if appropriate

**Files to check**:
- `src/js/app.js.new`
- `src/js/todoList.js.new`
- `src/js/components/todoList.js.new`

**Copilot Agent Prompts**:
- "What are these .new files and are they safe to delete?"
- "How do I check if removing files will break the application?"

---

### 4. Melhorar o README com screenshots
**Labels**: `good-first-issue`, `workshop`, `documentation`
**Título**: [GOOD FIRST ISSUE] Add screenshots and improve README

**Descrição**:
The README could be more engaging with screenshots showing the app in action.

**Acceptance Criteria**:
- [ ] Take screenshots of the app (light and dark modes)
- [ ] Add screenshots to README
- [ ] Improve the features section with more details
- [ ] Add a "Demo" section

**Copilot Agent Prompts**:
- "How do I take good screenshots for project documentation?"
- "What sections should a good README have?"
- "Show me examples of engaging README files"

---

## 🟡 Issues Intermediárias

### 5. Implementar categorias para tarefas
**Labels**: `enhancement`, `intermediate`, `workshop`
**Título**: [FEATURE] Add task categories with color coding

**Descrição**:
Users should be able to categorize their tasks (work, personal, urgent) with different colors.

**Acceptance Criteria**:
- [ ] Add category dropdown to task input
- [ ] Implement color coding for different categories
- [ ] Save categories in localStorage
- [ ] Add category filter functionality
- [ ] Ensure accessibility with proper contrast

**Copilot Agent Prompts**:
- "How can I add a dropdown to the task input form?"
- "What's the best way to implement color coding for categories?"
- "How do I filter tasks by category in JavaScript?"

---

### 6. Adicionar notificações do timer
**Labels**: `enhancement`, `intermediate`, `workshop`
**Título**: [FEATURE] Add browser notifications when Pomodoro timer ends

**Descrição**:
When the Pomodoro timer completes, show a browser notification to alert the user.

**Acceptance Criteria**:
- [ ] Request notification permission
- [ ] Show notification when timer ends
- [ ] Include appropriate message and icon
- [ ] Handle permission denied gracefully
- [ ] Add settings to enable/disable notifications

**Copilot Agent Prompts**:
- "How do I implement browser notifications in JavaScript?"
- "What's the Notification API and how do I use it?"
- "How do I handle notification permissions properly?"

---

### 7. Melhorar animações de feedback
**Labels**: `enhancement`, `design`, `intermediate`, `workshop`
**Título**: [ENHANCEMENT] Add subtle animations for task interactions

**Descrição**:
Add smooth animations when tasks are added, completed, or removed to improve user experience.

**Acceptance Criteria**:
- [ ] Add fade-in animation for new tasks
- [ ] Add completion celebration animation
- [ ] Add smooth removal animation
- [ ] Ensure animations don't impact performance
- [ ] Make animations respectful of user preferences

**Copilot Agent Prompts**:
- "How do I add smooth CSS animations to list items?"
- "What are best practices for web animations?"
- "How do I respect user motion preferences?"

---

## 🔴 Issues Avançadas

### 8. Implementar drag & drop para reordenar tarefas
**Labels**: `enhancement`, `advanced`, `workshop`
**Título**: [FEATURE] Add drag and drop functionality to reorder tasks

**Descrição**:
Users should be able to drag and drop tasks to reorder them according to priority.

**Acceptance Criteria**:
- [ ] Implement HTML5 drag and drop API
- [ ] Add visual feedback during dragging
- [ ] Save new order in localStorage
- [ ] Ensure accessibility with keyboard navigation
- [ ] Work on both desktop and touch devices

**Copilot Agent Prompts**:
- "How do I implement drag and drop with vanilla JavaScript?"
- "What's the HTML5 Drag API and how do I use it?"
- "How do I make drag and drop accessible?"

---

### 9. Adicionar sistema de estatísticas
**Labels**: `enhancement`, `advanced`, `data-visualization`, `workshop`
**Título**: [FEATURE] Add productivity statistics dashboard

**Descrição**:
Create a statistics view showing productivity metrics like tasks completed, time focused, etc.

**Acceptance Criteria**:
- [ ] Track task completion over time
- [ ] Track Pomodoro sessions completed
- [ ] Create simple charts/visualizations
- [ ] Add export functionality
- [ ] Store historical data in localStorage

**Copilot Agent Prompts**:
- "How do I create simple charts with vanilla JavaScript?"
- "What data should I track for productivity statistics?"
- "How do I store and retrieve historical data efficiently?"

---

### 10. Converter para PWA
**Labels**: `enhancement`, `advanced`, `pwa`, `workshop`
**Título**: [FEATURE] Convert app to Progressive Web App

**Descrição**:
Make the app installable and work offline as a PWA.

**Acceptance Criteria**:
- [ ] Create service worker for offline functionality
- [ ] Add web app manifest
- [ ] Implement caching strategies
- [ ] Add install prompt
- [ ] Ensure offline functionality works

**Copilot Agent Prompts**:
- "How do I create a service worker for a productivity app?"
- "What should be included in a web app manifest?"
- "How do I implement offline-first functionality?"

---

## 📝 Issues de Documentação

### 11. Criar guia de contribuição
**Labels**: `documentation`, `good-first-issue`, `workshop`
**Título**: [DOCS] Expand contributing guidelines with examples

**Descrição**:
Enhance the CONTRIBUTING.md with specific examples and more detailed guidelines.

**Acceptance Criteria**:
- [ ] Add code style examples
- [ ] Include testing guidelines
- [ ] Add troubleshooting section
- [ ] Include Copilot Agent usage tips

---

### 12. Adicionar JSDoc comments
**Labels**: `documentation`, `intermediate`, `workshop`
**Título**: [DOCS] Add JSDoc comments to all functions

**Descrição**:
Add comprehensive JSDoc comments to improve code documentation and IDE support.

**Acceptance Criteria**:
- [ ] Add JSDoc to all public functions
- [ ] Include parameter and return type information
- [ ] Add usage examples where helpful
- [ ] Ensure consistency across all files

**Copilot Agent Prompts**:
- "How do I write good JSDoc comments?"
- "Generate JSDoc comments for this function"
- "What are JSDoc best practices?"

---

## 🎨 Issues de Design/UX

### 13. Implementar temas personalizáveis
**Labels**: `enhancement`, `design`, `intermediate`, `workshop`
**Título**: [DESIGN] Add custom color themes beyond light/dark

**Descrição**:
Allow users to choose from multiple color themes (blue, green, purple, etc.).

**Acceptance Criteria**:
- [ ] Create additional color themes
- [ ] Add theme selector UI
- [ ] Save theme preference
- [ ] Ensure accessibility compliance
- [ ] Smooth theme transitions

---

### 14. Melhorar responsividade para tablets
**Labels**: `enhancement`, `design`, `responsive`, `workshop`
**Título**: [DESIGN] Improve responsive design for tablet devices

**Descrição**:
Optimize the layout and user experience for tablet-sized screens (768px - 1024px).

**Acceptance Criteria**:
- [ ] Test and improve layout on tablet sizes
- [ ] Optimize touch interactions
- [ ] Adjust spacing and sizing
- [ ] Test on various tablet devices/orientations

---

## Como Usar Este Arquivo

1. **Antes do workshop**: Crie 8-12 issues selecionadas desta lista no GitHub
2. **Durante o workshop**: Participants can choose issues based on their skill level
3. **Adicione labels apropriadas**: `good-first-issue`, `workshop`, `help-wanted`, etc.
4. **Assignees**: Don't assign initially, let participants self-assign
5. **Milestones**: Consider creating a "Workshop" milestone

## Dicas para Facilitadores

- Comece demonstrando como resolver uma issue fácil
- Mostre como usar GitHub Copilot Agent para entender o código
- Encoraje participantes a fazer perguntas nas issues
- Pair programming é bem-vindo
- Celebre cada contribuição, não importa o tamanho!
