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
    const kawaiiToggleButton = document.getElementById('kawaii-toggle');
    
    function applyTheme(theme) {
        document.body.classList.remove('dark-mode', 'kawaii-mode');
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else if (theme === 'kawaii') {
            document.body.classList.add('kawaii-mode');
        }
        localStorage.setItem('focusOnTheme', theme);
    }

    // Inicializa tema salvo
    const currentTheme = localStorage.getItem('focusOnTheme') || 'light';
    applyTheme(currentTheme);

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            let theme = localStorage.getItem('focusOnTheme') || 'light';
            if (theme === 'light') theme = 'dark';
            else if (theme === 'dark') theme = 'light';
            else if (theme === 'kawaii') theme = 'dark'; // alterna kawaii -> dark
            applyTheme(theme);
        });
    }
    if (kawaiiToggleButton) {
        kawaiiToggleButton.addEventListener('click', () => {
            let theme = localStorage.getItem('focusOnTheme');
            if (theme === 'kawaii') theme = 'light';
            else theme = 'kawaii';
            applyTheme(theme);
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
