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
        // Suporte a três temas: light, dark, hacker
        const themes = ['light', 'dark', 'hacker'];
        let currentTheme = localStorage.getItem('focusOnTheme') || 'light';
        setTheme(currentTheme);

        themeToggleButton.addEventListener('click', () => {
            // Alterna entre os temas
            let idx = themes.indexOf(currentTheme);
            idx = (idx + 1) % themes.length;
            currentTheme = themes[idx];
            setTheme(currentTheme);
            localStorage.setItem('focusOnTheme', currentTheme);
        });
    }

    function setTheme(theme) {
        document.body.classList.remove('dark-mode', 'hacker-mode');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else if (theme === 'hacker') {
            document.body.classList.add('hacker-mode');
        }
        // Atualiza ícones do botão
        updateThemeToggleIcon(theme);
    }

    function updateThemeToggleIcon(theme) {
        const lightIcon = document.querySelector('.theme-toggle-icon.light-icon');
        const darkIcon = document.querySelector('.theme-toggle-icon.dark-icon');
        let hackerIcon = document.querySelector('.theme-toggle-icon.hacker-icon');
        if (!hackerIcon) {
            hackerIcon = document.createElement('span');
            hackerIcon.className = 'theme-toggle-icon hacker-icon';
            hackerIcon.textContent = '💻';
            themeToggleButton.appendChild(hackerIcon);
        }
        lightIcon.style.opacity = theme === 'light' ? '1' : '0';
        darkIcon.style.opacity = theme === 'dark' ? '1' : '0';
        hackerIcon.style.opacity = theme === 'hacker' ? '1' : '0';
        lightIcon.style.transform = theme === 'light' ? 'translateY(0)' : 'translateY(-20px)';
        darkIcon.style.transform = theme === 'dark' ? 'translateY(0)' : 'translateY(20px)';
        hackerIcon.style.transform = theme === 'hacker' ? 'translateY(0)' : 'translateY(20px)';
    }
    
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
