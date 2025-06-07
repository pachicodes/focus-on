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
    
    // Theme Selector Logic
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeOptions = document.getElementById('theme-options');
    const themeOptionButtons = document.querySelectorAll('.theme-option');
    
    if (themeToggleButton && themeOptions) {
        // Carregar tema salvo ou usar tema claro como padrão
        const currentTheme = localStorage.getItem('focusOnTheme') || 'light';
        applyTheme(currentTheme);
        updateActiveThemeButton(currentTheme);

        // Toggle do menu de temas
        themeToggleButton.addEventListener('click', (e) => {
            e.stopPropagation();
            themeOptions.classList.toggle('show');
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.theme-selector')) {
                themeOptions.classList.remove('show');
            }
        });

        // Event listeners para as opções de tema
        themeOptionButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedTheme = button.getAttribute('data-theme');
                applyTheme(selectedTheme);
                updateActiveThemeButton(selectedTheme);
                localStorage.setItem('focusOnTheme', selectedTheme);
                themeOptions.classList.remove('show');
            });
        });
    }

    // Função para aplicar tema
    function applyTheme(theme) {
        // Remover todas as classes de tema
        document.body.classList.remove('dark-mode', 'green-mode');
        
        // Aplicar o tema selecionado
        switch(theme) {
            case 'dark':
                document.body.classList.add('dark-mode');
                break;
            case 'green':
                document.body.classList.add('green-mode');
                break;
            case 'light':
            default:
                // Tema claro é o padrão, não precisa de classe
                break;
        }
    }

    // Função para atualizar botão ativo
    function updateActiveThemeButton(activeTheme) {
        themeOptionButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-theme') === activeTheme) {
                button.classList.add('active');
            }
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
