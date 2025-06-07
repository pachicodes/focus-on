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
        // Adiciona botão extra para o tema laranja
        if (!document.getElementById('orange-theme-toggle')) {
            const orangeBtn = document.createElement('button');
            orangeBtn.id = 'orange-theme-toggle';
            orangeBtn.title = 'Tema Laranja Calmo';
            orangeBtn.style.marginLeft = '8px';
            orangeBtn.innerHTML = '<span style="font-size:1.2em;">🧡</span>';
            themeToggleButton.parentNode.insertBefore(orangeBtn, themeToggleButton.nextSibling);
            orangeBtn.addEventListener('click', () => {
                document.body.classList.remove('dark-mode');
                document.body.classList.toggle('orange-mode');
                let theme = 'light';
                if (document.body.classList.contains('orange-mode')) theme = 'orange';
                localStorage.setItem('focusOnTheme', theme);
            });
        }
        // Lógica de seleção de tema
        const currentTheme = localStorage.getItem('focusOnTheme') || 'light';
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        document.body.classList.toggle('orange-mode', currentTheme === 'orange');

        themeToggleButton.addEventListener('click', () => {
            document.body.classList.remove('orange-mode');
            document.body.classList.toggle('dark-mode');
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('focusOnTheme', theme);
        });
    }
    
    // ComboBox de seleção de tema
    const themeComboBox = document.getElementById('theme-combobox');
    if (themeComboBox) {
        // Aplica o tema salvo
        const currentTheme = localStorage.getItem('focusOnTheme') || 'light';
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        document.body.classList.toggle('orange-mode', currentTheme === 'orange');
        themeComboBox.value = currentTheme;

        themeComboBox.addEventListener('change', (e) => {
            document.body.classList.remove('dark-mode', 'orange-mode');
            if (e.target.value === 'dark') {
                document.body.classList.add('dark-mode');
            } else if (e.target.value === 'orange') {
                document.body.classList.add('orange-mode');
            }
            localStorage.setItem('focusOnTheme', e.target.value);
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
