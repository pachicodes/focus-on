// filepath: /Users/pachicodes/Documents/focus-on/src/js/components/todoList.js
console.log('components/todoList.js loaded');

// Este arquivo é mantido apenas para compatibilidade.
// A implementação principal está em /js/todoList.js

// Redirecionamento para implementação principal
function initTodoList() {
    console.log('Redirecionando para implementação principal em /js/todoList.js');
    
    // Se o módulo principal já estiver carregado
    if (window.todoListMainLoaded) {
        console.log('Módulo principal já está carregado, usando-o');
        return;
    }
    
    // Caso contrário, tentar carregar o script principal
    const script = document.createElement('script');
    script.src = 'js/todoList.js';
    script.onload = () => {
        console.log('Script principal carregado com sucesso');
    };
    document.head.appendChild(script);
}
