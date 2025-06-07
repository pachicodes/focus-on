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
    // Adiciona botão para alternar tema Água
    let waterThemeButton = document.getElementById('water-theme-toggle');
    if (!waterThemeButton) {
        waterThemeButton = document.createElement('button');
        waterThemeButton.id = 'water-theme-toggle';
        waterThemeButton.className = 'icon-button';
        waterThemeButton.title = 'Tema Água';
        waterThemeButton.setAttribute('aria-label', 'Alternar tema Água');
        waterThemeButton.innerHTML = '💧';
        themeToggleButton.parentNode.insertBefore(waterThemeButton, themeToggleButton.nextSibling);
    }

    // Carregar tema salvo
    const currentTheme = localStorage.getItem('focusOnTheme') || 'light';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    document.body.classList.toggle('water-mode', currentTheme === 'water');

    themeToggleButton.addEventListener('click', () => {
        // Alterna entre claro e escuro, mas remove água
        document.body.classList.toggle('dark-mode');
        document.body.classList.remove('water-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('focusOnTheme', theme);
    });

    waterThemeButton.addEventListener('click', () => {
        // Ativa/desativa tema água e remove dark-mode
        const isWater = !document.body.classList.contains('water-mode');
        document.body.classList.toggle('water-mode', isWater);
        document.body.classList.remove('dark-mode');
        localStorage.setItem('focusOnTheme', isWater ? 'water' : 'light');
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
