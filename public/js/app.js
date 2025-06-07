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
    const smurfsThemeBtn = document.getElementById('smurfs-theme-btn');
    if (themeToggleButton) {
        const currentTheme = localStorage.getItem('focusOnTheme') || 'light';
        document.body.classList.remove('dark-mode', 'hellokitty-mode', 'smurfs-mode');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else if (currentTheme === 'hellokitty') {
            document.body.classList.add('hellokitty-mode');
        } else if (currentTheme === 'smurfs') {
            document.body.classList.add('smurfs-mode');
        }
        themeToggleButton.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('hellokitty-mode');
                localStorage.setItem('focusOnTheme', 'hellokitty');
            } else if (document.body.classList.contains('hellokitty-mode')) {
                document.body.classList.remove('hellokitty-mode');
                document.body.classList.add('smurfs-mode');
                localStorage.setItem('focusOnTheme', 'smurfs');
            } else if (document.body.classList.contains('smurfs-mode')) {
                document.body.classList.remove('smurfs-mode');
                localStorage.setItem('focusOnTheme', 'light');
            } else {
                document.body.classList.add('dark-mode');
                localStorage.setItem('focusOnTheme', 'dark');
            }
        });
    }
    if (smurfsThemeBtn) {
        smurfsThemeBtn.addEventListener('click', () => {
            document.body.classList.remove('dark-mode', 'hellokitty-mode', 'smurfs-mode');
            document.body.classList.add('smurfs-mode');
            localStorage.setItem('focusOnTheme', 'smurfs');
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
