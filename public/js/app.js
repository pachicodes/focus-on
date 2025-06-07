// Main application logic
console.log("app.js loaded");

// Sem imports - os componentes são carregados diretamente pelo HTML

document.addEventListener('DOMContentLoaded', () => {
    // Inicialização dos componentes
    // Verifica se cada componente foi inicializado corretamente
    if (typeof initTodoList === 'function' && !window.todoListInitialized) {
        initTodoList();
        window.todoListInitialized = true;
    }
    
    if (typeof initPomodoroTimer === 'function' && !window.pomodoroTimerInitialized) {
        initPomodoroTimer();
        window.pomodoroTimerInitialized = true;
    }
    
    if (typeof initMediaEmbed === 'function' && !window.mediaEmbedInitialized) {
        initMediaEmbed();
        window.mediaEmbedInitialized = true;
    }
    
    // Contador de tarefas
    updateTasksCounter();
    
    // Theme Toggler Logic
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        // Adiciona menu de seleção de tema
        let themeSelect = document.getElementById('theme-select');
        if (!themeSelect) {
            themeSelect = document.createElement('select');
            themeSelect.id = 'theme-select';
            themeSelect.style.position = 'fixed';
            themeSelect.style.top = '75px';
            themeSelect.style.right = '20px';
            themeSelect.style.zIndex = '1001';
            themeSelect.style.borderRadius = '8px';
            themeSelect.style.padding = '4px 8px';
            themeSelect.style.background = 'var(--surface-color)';
            themeSelect.style.border = '1px solid var(--border-color)';
            themeSelect.style.color = 'var(--text-color)';
            themeSelect.style.fontSize = '1em';
            themeSelect.style.boxShadow = 'var(--card-shadow)';
            themeSelect.innerHTML = `
                <option value="pink">Kawaii Rosinha</option>
                <option value="blue">Azul Pastel</option>
                <option value="bueller">Curtindo a Vida Adoidado</option>
            `;
            document.body.appendChild(themeSelect);
        }

        // Carrega tema salvo
        const savedTheme = localStorage.getItem('focusOnTheme') || 'light';
        const savedColor = localStorage.getItem('focusOnThemeColor') || 'pink';
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        themeSelect.value = savedColor;
        applyTheme(savedColor, savedTheme);

        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('focusOnTheme', theme);
            applyTheme(themeSelect.value, theme);
        });

        themeSelect.addEventListener('change', () => {
            localStorage.setItem('focusOnThemeColor', themeSelect.value);
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            applyTheme(themeSelect.value, theme);
        });
    }
});

// Função para aplicar o tema selecionado
function applyTheme(color, mode) {
    // Remove classes antigas
    document.body.classList.remove('theme-pink', 'theme-blue');
    // Adiciona classe do tema
    document.body.classList.add(`theme-${color}`);
    // Define variáveis CSS
    if (color === 'blue') {
        if (mode === 'dark') {
            document.body.style.setProperty('--primary-color', 'var(--primary-color-blue-dark)');
            document.body.style.setProperty('--primary-variant-color', 'var(--primary-variant-color-blue-dark)');
            document.body.style.setProperty('--secondary-color', 'var(--secondary-color-blue-dark)');
            document.body.style.setProperty('--background-color', 'var(--background-color-blue-dark)');
            document.body.style.setProperty('--surface-color', 'var(--surface-color-blue-dark)');
            document.body.style.setProperty('--error-color', 'var(--error-color-blue-dark)');
            document.body.style.setProperty('--success-color', 'var(--success-color-blue-dark)');
            document.body.style.setProperty('--on-primary-color', 'var(--on-primary-color-blue-dark)');
            document.body.style.setProperty('--on-secondary-color', 'var(--on-secondary-color-blue-dark)');
            document.body.style.setProperty('--on-background-color', 'var(--on-background-color-blue-dark)');
            document.body.style.setProperty('--on-surface-color', 'var(--on-surface-color-blue-dark)');
            document.body.style.setProperty('--text-color', 'var(--text-color-blue-dark)');
            document.body.style.setProperty('--text-secondary', 'var(--text-secondary-blue-dark)');
            document.body.style.setProperty('--border-color', 'var(--border-color-blue-dark)');
            document.body.style.setProperty('--input-bg', 'var(--input-bg-blue-dark)');
            document.body.style.setProperty('--card-shadow', 'var(--card-shadow-blue-dark)');
            document.body.style.setProperty('--hover-bg', 'var(--hover-bg-blue-dark)');
        } else {
            document.body.style.setProperty('--primary-color', 'var(--primary-color-blue-light)');
            document.body.style.setProperty('--primary-variant-color', 'var(--primary-variant-color-blue-light)');
            document.body.style.setProperty('--secondary-color', 'var(--secondary-color-blue-light)');
            document.body.style.setProperty('--background-color', 'var(--background-color-blue-light)');
            document.body.style.setProperty('--surface-color', 'var(--surface-color-blue-light)');
            document.body.style.setProperty('--error-color', 'var(--error-color-blue-light)');
            document.body.style.setProperty('--success-color', 'var(--success-color-blue-light)');
            document.body.style.setProperty('--on-primary-color', 'var(--on-primary-color-blue-light)');
            document.body.style.setProperty('--on-secondary-color', 'var(--on-secondary-color-blue-light)');
            document.body.style.setProperty('--on-background-color', 'var(--on-background-color-blue-light)');
            document.body.style.setProperty('--on-surface-color', 'var(--on-surface-color-blue-light)');
            document.body.style.setProperty('--text-color', 'var(--text-color-blue-light)');
            document.body.style.setProperty('--text-secondary', 'var(--text-secondary-blue-light)');
            document.body.style.setProperty('--border-color', 'var(--border-color-blue-light)');
            document.body.style.setProperty('--input-bg', 'var(--input-bg-blue-light)');
            document.body.style.setProperty('--card-shadow', 'var(--card-shadow-blue-light)');
            document.body.style.setProperty('--hover-bg', 'var(--hover-bg-blue-light)');
        }
    } else if (color === 'bueller') {
        if (mode === 'dark') {
            document.body.style.setProperty('--primary-color', 'var(--primary-color-bueller-dark)');
            document.body.style.setProperty('--primary-variant-color', 'var(--primary-variant-color-bueller-dark)');
            document.body.style.setProperty('--secondary-color', 'var(--secondary-color-bueller-dark)');
            document.body.style.setProperty('--background-color', 'var(--background-color-bueller-dark)');
            document.body.style.setProperty('--surface-color', 'var(--surface-color-bueller-dark)');
            document.body.style.setProperty('--error-color', 'var(--error-color-bueller-dark)');
            document.body.style.setProperty('--success-color', 'var(--success-color-bueller-dark)');
            document.body.style.setProperty('--on-primary-color', 'var(--on-primary-color-bueller-dark)');
            document.body.style.setProperty('--on-secondary-color', 'var(--on-secondary-color-bueller-dark)');
            document.body.style.setProperty('--on-background-color', 'var(--on-background-color-bueller-dark)');
            document.body.style.setProperty('--on-surface-color', 'var(--on-surface-color-bueller-dark)');
            document.body.style.setProperty('--text-color', 'var(--text-color-bueller-dark)');
            document.body.style.setProperty('--text-secondary', 'var(--text-secondary-bueller-dark)');
            document.body.style.setProperty('--border-color', 'var(--border-color-bueller-dark)');
            document.body.style.setProperty('--input-bg', 'var(--input-bg-bueller-dark)');
            document.body.style.setProperty('--card-shadow', 'var(--card-shadow-bueller-dark)');
            document.body.style.setProperty('--hover-bg', 'var(--hover-bg-bueller-dark)');
        } else {
            document.body.style.setProperty('--primary-color', 'var(--primary-color-bueller-light)');
            document.body.style.setProperty('--primary-variant-color', 'var(--primary-variant-color-bueller-light)');
            document.body.style.setProperty('--secondary-color', 'var(--secondary-color-bueller-light)');
            document.body.style.setProperty('--background-color', 'var(--background-color-bueller-light)');
            document.body.style.setProperty('--surface-color', 'var(--surface-color-bueller-light)');
            document.body.style.setProperty('--error-color', 'var(--error-color-bueller-light)');
            document.body.style.setProperty('--success-color', 'var(--success-color-bueller-light)');
            document.body.style.setProperty('--on-primary-color', 'var(--on-primary-color-bueller-light)');
            document.body.style.setProperty('--on-secondary-color', 'var(--on-secondary-color-bueller-light)');
            document.body.style.setProperty('--on-background-color', 'var(--on-background-color-bueller-light)');
            document.body.style.setProperty('--on-surface-color', 'var(--on-surface-color-bueller-light)');
            document.body.style.setProperty('--text-color', 'var(--text-color-bueller-light)');
            document.body.style.setProperty('--text-secondary', 'var(--text-secondary-bueller-light)');
            document.body.style.setProperty('--border-color', 'var(--border-color-bueller-light)');
            document.body.style.setProperty('--input-bg', 'var(--input-bg-bueller-light)');
            document.body.style.setProperty('--card-shadow', 'var(--card-shadow-bueller-light)');
            document.body.style.setProperty('--hover-bg', 'var(--hover-bg-bueller-light)');
        }
    } else {
        // Tema padrão (rosinha)
        document.body.style.removeProperty('--primary-color');
        document.body.style.removeProperty('--primary-variant-color');
        document.body.style.removeProperty('--secondary-color');
        document.body.style.removeProperty('--background-color');
        document.body.style.removeProperty('--surface-color');
        document.body.style.removeProperty('--error-color');
        document.body.style.removeProperty('--success-color');
        document.body.style.removeProperty('--on-primary-color');
        document.body.style.removeProperty('--on-secondary-color');
        document.body.style.removeProperty('--on-background-color');
        document.body.style.removeProperty('--on-surface-color');
        document.body.style.removeProperty('--text-color');
        document.body.style.removeProperty('--text-secondary');
        document.body.style.removeProperty('--border-color');
        document.body.style.removeProperty('--input-bg');
        document.body.style.removeProperty('--card-shadow');
        document.body.style.removeProperty('--hover-bg');
    }
}

// Função para atualizar o contador de tarefas
function updateTasksCounter() {
    const tasksCounter = document.getElementById('tasks-count');
    const tasksList = document.getElementById('tasks');
    
    if (tasksCounter && tasksList) {
        // Ignorar a mensagem de "nenhuma tarefa" na contagem
        const emptyMessage = tasksList.querySelector('.empty-tasks-message');
        const totalTasks = emptyMessage ? 0 : tasksList.children.length;
        const completedTasks = tasksList.querySelectorAll('.completed').length;
        
        tasksCounter.textContent = totalTasks === 0 
            ? 'Nenhuma tarefa' 
            : totalTasks === 1 
                ? '1 tarefa' 
                : `${totalTasks} tarefas (${completedTasks} completas)`;
    }
}

// Função global para ser chamada do todoList.js quando tarefas são atualizadas
window.updateTasksCounter = updateTasksCounter;
