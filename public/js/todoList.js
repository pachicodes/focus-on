console.log('todoList.js loaded');

// Marcador para evitar carregamento duplicado
window.todoListMainLoaded = true;;

// Sem export para evitar problemas com módulos
function initTodoList() {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');
    const showAddTaskButton = document.getElementById('show-add-task');

    console.log('Elementos do DOM:', { taskInput, addTaskButton, tasksList });
    
    // Função para disparar confetes quando uma tarefa é concluída
    function triggerConfetti() {
        // Primeiro disparo - mais concentrado
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#6200ee', '#03dac6', '#bb86fc'],
            scalar: 0.7,
            shapes: ['circle', 'square']
        });
        
        // Segundo disparo - mais disperso, com pequeno atraso
        setTimeout(() => {
            confetti({
                particleCount: 70,
                spread: 100,
                origin: { y: 0.7 },
                colors: ['#6200ee', '#03dac6', '#bb86fc', '#4caf50'],
                scalar: 1,
                gravity: 0.6,
                drift: 1
            });
        }, 150);
        
        // Exibir uma mensagem de parabéns temporária
        const tasksCount = document.getElementById('tasks-count');
        const originalText = tasksCount.textContent;
        
        tasksCount.textContent = "🎉 Great job! 🎉";
        tasksCount.style.color = 'var(--success-color)';
        
        setTimeout(() => {
            tasksCount.textContent = originalText;
            tasksCount.style.color = '';
        }, 2000);
    }

    // Carregar tarefas do localStorage (se houver)
    let tasks = JSON.parse(localStorage.getItem('focusOnTasks')) || [];

    function saveTasks() {
        localStorage.setItem('focusOnTasks', JSON.stringify(tasks));
        
        // Atualizar o contador de tarefas, se a função existir
        if (typeof window.updateTasksCounter === 'function') {
            window.updateTasksCounter();
        }
    }

    function renderTasks() {
        tasksList.innerHTML = '';

        if (tasks.length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.textContent = 'No tasks yet. Add one!';
            emptyMessage.classList.add('empty-tasks-message');
            tasksList.appendChild(emptyMessage);
            return;
        }

        // Separar tarefas não concluídas e concluídas
        const incompleteTasks = tasks
            .map((task, idx) => ({ ...task, _idx: idx }))
            .filter(task => !task.completed);
        const completedTasks = tasks
            .map((task, idx) => ({ ...task, _idx: idx }))
            .filter(task => task.completed);
        const orderedTasks = [...incompleteTasks, ...completedTasks];

        orderedTasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('task-item');
            if (task.completed) {
                listItem.classList.add('completed');
            }

            // Container para o checkbox e texto
            const taskContentDiv = document.createElement('div');
            taskContentDiv.classList.add('task-content');
            // Checkbox personalizado
            const checkbox = document.createElement('div');
            checkbox.classList.add('task-checkbox');
            if (task.completed) {
                checkbox.classList.add('checked');
            }
            checkbox.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleTaskCompleted(task._idx);
            });
            // Texto da tarefa
            const taskTextSpan = document.createElement('span');
            taskTextSpan.textContent = task.text;
            taskTextSpan.classList.add('task-text');
            // Adicionando elementos ao container de conteúdo
            taskContentDiv.appendChild(checkbox);
            taskContentDiv.appendChild(taskTextSpan);
            // Div para os botões
            const buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('task-buttons');
            // Botão de editar
            const editButton = document.createElement('button');
            editButton.textContent = '✏️';
            editButton.title = 'Edit task';
            editButton.classList.add('edit-btn');
            editButton.addEventListener('click', (e) => {
                e.stopPropagation();
                editTask(task._idx);
            });
            // Botão de deletar
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '✕';
            deleteButton.title = 'Delete task';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteTask(task._idx);
            });
            // Adicionando os botões à div de botões
            buttonsDiv.appendChild(editButton);
            buttonsDiv.appendChild(deleteButton);
            // Adicionando os elementos principais à lista
            listItem.appendChild(taskContentDiv);
            listItem.appendChild(buttonsDiv);
            tasksList.appendChild(listItem);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        console.log('Adding task:', taskText);
        tasks.push({ text: taskText, completed: false });
        taskInput.value = ''; 
        saveTasks();
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    function toggleTaskCompleted(index) {
        // Invertemos o estado completado
        tasks[index].completed = !tasks[index].completed;
        
        // Se a tarefa foi marcada como concluída, dispara os confetes
        if (tasks[index].completed) {
            triggerConfetti();
        }
        
        saveTasks();
        renderTasks();
    }

    function editTask(index) {
        const listItem = tasksList.children[index];
        const taskContent = listItem.querySelector('.task-content');
        const taskTextSpan = listItem.querySelector('.task-text');
        const currentText = tasks[index].text;

        // Escondemos o conteúdo da tarefa
        taskContent.style.display = 'none';
        
        const originalButtonsDiv = listItem.querySelector('.task-buttons');
        if (originalButtonsDiv) {
            originalButtonsDiv.style.display = 'none';
        }

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = currentText;
        editInput.classList.add('edit-input-field');
        listItem.insertBefore(editInput, taskContent.nextSibling);
        editInput.focus();

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList.add('save-btn');

        const cancelEditButton = document.createElement('button');
        cancelEditButton.textContent = 'Cancel';
        cancelEditButton.classList.add('cancel-edit-btn');

        const editControlsDiv = document.createElement('div');
        editControlsDiv.classList.add('edit-controls');
        editControlsDiv.appendChild(saveButton);
        editControlsDiv.appendChild(cancelEditButton);
        
        listItem.appendChild(editControlsDiv);
        
        const finishEdit = (saveChanges) => {
            if (saveChanges) {
                const newTaskText = editInput.value.trim();
                if (newTaskText === '') {
                    alert('Task cannot be empty.');
                    editInput.focus(); 
                    return false; 
                }
                tasks[index].text = newTaskText;
                saveTasks();
            }
            renderTasks(); 
            return true; 
        };

        saveButton.addEventListener('click', (e) => {
            e.stopPropagation();
            finishEdit(true);
        });

        cancelEditButton.addEventListener('click', (e) => {
            e.stopPropagation();
            finishEdit(false);
        });

        editInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                finishEdit(true);
            } else if (e.key === 'Escape') {
                finishEdit(false);
            }
        });

        editInput.addEventListener('blur', (e) => {
            setTimeout(() => {
                if (document.activeElement !== saveButton && document.activeElement !== cancelEditButton && document.activeElement !== editInput) {
                   if (editInput.parentNode) { 
                     finishEdit(false); 
                   }
                }
            }, 150);
        });
    }

    // Adiciona os event listeners para os elementos do DOM
    if (addTaskButton) {
        console.log('Adding event listener to add-task button');
        addTaskButton.addEventListener('click', addTask);
    } else {
        console.error('Add task button not found in DOM');
    }
    
    if (taskInput) {
        console.log('Adding event listener to task input');
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    } else {
        console.error('Input de tarefa não encontrado no DOM');
    }

    // Renderiza as tarefas iniciais ao carregar a página
    renderTasks();
}

// Execute a função quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', initTodoList);