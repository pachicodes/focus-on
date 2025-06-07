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
        const currentTheme = localStorage.getItem('focusOnTheme') || 'light';
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        document.body.classList.toggle('bege-mode', currentTheme === 'bege');
        document.body.classList.toggle('ti-mode', currentTheme === 'ti');

        themeToggleButton.addEventListener('click', () => {
            // Alterna entre light, dark, bege e ti
            let theme = localStorage.getItem('focusOnTheme') || 'light';
            if (theme === 'light') {
                document.body.classList.remove('dark-mode', 'bege-mode', 'ti-mode');
                document.body.classList.add('dark-mode');
                theme = 'dark';
            } else if (theme === 'dark') {
                document.body.classList.remove('dark-mode', 'bege-mode', 'ti-mode');
                document.body.classList.add('bege-mode');
                theme = 'bege';
            } else if (theme === 'bege') {
                document.body.classList.remove('dark-mode', 'bege-mode', 'ti-mode');
                document.body.classList.add('ti-mode');
                theme = 'ti';
            } else {
                document.body.classList.remove('dark-mode', 'bege-mode', 'ti-mode');
                theme = 'light';
            }
            localStorage.setItem('focusOnTheme', theme);
        });
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
