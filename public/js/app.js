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
    const themes = {
        dark: { button: 'theme-toggle', class: 'dark-mode' },
        purple: { button: 'purple-theme-toggle', class: 'purple-mode' },
        mint: { button: 'mint-theme-toggle', class: 'mint-mode' },
        ocean: { button: 'ocean-theme-toggle', class: 'ocean-mode' },
        sunset: { button: 'sunset-theme-toggle', class: 'sunset-mode' },
        galaxy: { button: 'galaxy-theme-toggle', class: 'galaxy-mode' }
    };
    
    // Get all theme buttons
    const themeButtons = Object.fromEntries(
        Object.entries(themes).map(([theme, config]) => [
            theme,
            document.getElementById(config.button)
        ])
    );
    
    // Set initial theme
    const currentTheme = localStorage.getItem('focusOnTheme') || 'light';
    if (currentTheme !== 'light') {
        document.body.classList.add(themes[currentTheme].class);
    }

    // Add click handlers for all theme buttons
    Object.entries(themes).forEach(([themeName, config]) => {
        const button = themeButtons[themeName];
        if (button) {
            button.addEventListener('click', () => {
                // Remove all theme classes
                Object.values(themes).forEach(t => {
                    document.body.classList.remove(t.class);
                });

                // Toggle current theme
                const isCurrentTheme = document.body.classList.contains(config.class);
                const newTheme = isCurrentTheme ? 'light' : themeName;
                
                if (newTheme !== 'light') {
                    document.body.classList.add(config.class);
                }
                localStorage.setItem('focusOnTheme', newTheme);
            });
        }
    });
    
    // Toggle para mostrar/esconder o campo de entrada de tarefas
    const addTaskButton = document.getElementById('show-add-task');
    const taskInputContainer = document.getElementById('task-input');
    
    if (addTaskButton && taskInputContainer) {
        addTaskButton.addEventListener('click', () => {
            taskInputContainer.classList.toggle('active');
            if (taskInputContainer.classList.contains('active')) {
                document.getElementById('task').focus();
            }
        });
    }
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
