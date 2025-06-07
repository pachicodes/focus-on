// Main application logic
const APP = {
    // Configurações da aplicação
    config: {
        themes: ['light', 'dark', 'legends'],
        defaultTheme: 'light',
        storageKey: 'focusOnTheme'
    },

    // Estado da aplicação
    state: {
        initialized: false
    },

    // Inicialização dos componentes
    initComponents() {
        const components = [
            { init: initTodoList, key: 'todoListInitialized' },
            { init: initPomodoroTimer, key: 'pomodoroTimerInitialized' },
            { init: initMediaEmbed, key: 'mediaEmbedInitialized' }
        ];

        components.forEach(({ init, key }) => {
            if (typeof init === 'function' && !window[key]) {
                init();
                window[key] = true;
            }
        });
    },

    // Inicialização do tema
    initTheme() {
        const themeToggleButton = document.getElementById('theme-toggle');
        if (!themeToggleButton) return;

        const currentTheme = localStorage.getItem(this.config.storageKey) || this.config.defaultTheme;
        this.applyTheme(currentTheme);
        
        themeToggleButton.addEventListener('click', () => this.cycleTheme());
    },

    // Aplica um tema específico
    applyTheme(theme) {
        document.body.classList.remove(...this.config.themes.map(t => `${t}-theme`), 'dark-mode');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else if (theme !== 'light') {
            document.body.classList.add(`${theme}-theme`);
        }
        localStorage.setItem(this.config.storageKey, theme);
    },

    // Alterna entre os temas em ciclo
    cycleTheme() {
        const currentTheme = localStorage.getItem(this.config.storageKey) || this.config.defaultTheme;
        const currentIndex = this.config.themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % this.config.themes.length;
        const nextTheme = this.config.themes[nextIndex];
        
        this.applyTheme(nextTheme);
    },

    // Inicialização da interface do usuário
    initUI() {
        const addTaskButton = document.getElementById('show-add-task');
        const taskInputContainer = document.getElementById('task-input');
        
        if (addTaskButton && taskInputContainer) {
            addTaskButton.addEventListener('click', () => {
                taskInputContainer.classList.toggle('active');
                if (taskInputContainer.classList.contains('active')) {
                    document.getElementById('task')?.focus();
                }
            });
        }
    },

    // Inicialização da aplicação
    init() {
        if (this.state.initialized) return;
        
        this.initComponents();
        this.initTheme();
        this.initUI();
        updateTasksCounter();
        
        this.state.initialized = true;
    }
};

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    APP.init();
    
    // A inicialização é feita pelo objeto APP
});

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
