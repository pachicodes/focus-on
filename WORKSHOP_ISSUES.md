# Issues do Workshop - Prontas para Criar

Este arquivo contém uma lista de issues prontas para serem criadas no GitHub antes do workshop. Copie e cole o conteúdo de cada issue no GitHub.



### 7. Melhorar animações de feedback
**Título**: [MELHORIA] Adicionar animações sutis para interações com tarefas

**Descrição**:
Adicionar animações suaves ao adicionar, completar ou remover tarefas para melhorar a experiência do usuário.

**Critérios de Aceitação**:
- [ ] Animação de fade-in para novas tarefas
- [ ] Animação de celebração ao completar tarefa
- [ ] Animação suave ao remover tarefa
- [ ] Garantir que as animações não impactem a performance
- [ ] Respeitar preferências de movimento do usuário

---

## 🔴 Issues Avançadas

### 8. Implementar drag & drop para reordenar tarefas
**Título**: [FUNCIONALIDADE] Adicionar funcionalidade de arrastar e soltar para reordenar tarefas

**Descrição**:
Usuários devem poder arrastar e soltar tarefas para reordená-las conforme prioridade.

**Critérios de Aceitação**:
- [ ] Implementar API de drag and drop do HTML5
- [ ] Adicionar feedback visual durante o arraste
- [ ] Salvar nova ordem no localStorage
- [ ] Garantir acessibilidade com navegação por teclado
- [ ] Funcionar em desktop e dispositivos touch

---

### 9. Adicionar sistema de estatísticas
**Título**: [FUNCIONALIDADE] Adicionar painel de estatísticas de produtividade

**Descrição**:
Criar uma visualização de estatísticas mostrando métricas como tarefas concluídas, tempo focado, etc.

**Critérios de Aceitação**:
- [ ] Rastrear conclusão de tarefas ao longo do tempo
- [ ] Rastrear sessões Pomodoro concluídas
- [ ] Criar gráficos/visualizações simples
- [ ] Adicionar funcionalidade de exportação
- [ ] Armazenar dados históricos no localStorage

---

### 10. Converter para PWA
**Título**: [FUNCIONALIDADE] Converter app para Progressive Web App

**Descrição**:
Tornar o app instalável e funcional offline como PWA.

**Critérios de Aceitação**:
- [ ] Criar service worker para funcionalidade offline
- [ ] Adicionar web app manifest
- [ ] Implementar estratégias de cache
- [ ] Adicionar prompt de instalação
- [ ] Garantir funcionamento offline

---

## 📝 Issues de Documentação

### 11. Criar guia de contribuição
**Título**: [DOCS] Expandir guia de contribuição com exemplos

**Descrição**:
Melhorar o CONTRIBUTING.md com exemplos específicos e diretrizes detalhadas.

**Critérios de Aceitação**:
- [ ] Adicionar exemplos de estilo de código
- [ ] Incluir diretrizes de testes
- [ ] Adicionar seção de resolução de problemas
- [ ] Incluir dicas de uso do Copilot Agent

---

### 12. Adicionar comentários JSDoc
**Título**: [DOCS] Adicionar comentários JSDoc em todas as funções

**Descrição**:
Adicionar comentários JSDoc abrangentes para melhorar a documentação do código e o suporte da IDE.

**Critérios de Aceitação**:
- [ ] Adicionar JSDoc a todas as funções públicas
- [ ] Incluir informações de parâmetro e tipo de retorno
- [ ] Adicionar exemplos de uso quando útil
- [ ] Garantir consistência em todos os arquivos

---

## 🎨 Issues de Design/UX

### 13. Implementar temas personalizáveis
**Título**: [DESIGN] Adicionar temas de cores personalizados além de claro/escuro

**Descrição**:
Permitir que os usuários escolham entre vários temas de cores (azul, verde, roxo, etc.).

**Critérios de Aceitação**:
- [ ] Criar temas de cores adicionais
- [ ] Adicionar interface de seleção de tema
- [ ] Salvar preferência de tema
- [ ] Garantir conformidade com acessibilidade
- [ ] Transições de tema suaves

---

### 14. Melhorar responsividade para tablets
**Título**: [DESIGN] Melhorar design responsivo para tablets

**Descrição**:
Otimizar o layout e a experiência do usuário para telas do tamanho de tablets (768px - 1024px).

**Critérios de Aceitação**:
- [ ] Testar e melhorar o layout em tamanhos de tablet
- [ ] Otimizar interações de toque
- [ ] Ajustar espaçamento e dimensionamento
- [ ] Testar em vários dispositivos/orientações de tablet

---

## 🟢 Novas Issues para Iniciantes

### 15. Adicionar botão "Limpar tarefas concluídas"
**Título**: [BOA PRIMEIRA ISSUE] Adicionar botão para limpar tarefas concluídas

**Descrição**:
Adicionar um botão que remove todas as tarefas marcadas como concluídas da lista com um clique.

**Critérios de Aceitação**:
- [ ] Exibir botão "Limpar concluídas" visível quando houver tarefas concluídas
- [ ] Remover todas as tarefas concluídas ao clicar no botão
- [ ] Atualizar contadores e interface após a limpeza

**Arquivos para verificar**:
- `public/index.html`
- `public/js/todoList.js`

---

### 16. Permitir editar o texto de uma tarefa
**Título**: [BOA PRIMEIRA ISSUE] Permitir edição do texto de uma tarefa

**Descrição**:
Permitir que o usuário edite o texto de uma tarefa já criada, clicando em um ícone de editar ou dando duplo clique.

**Critérios de Aceitação**:
- [ ] Adicionar ícone ou ação de editar em cada tarefa
- [ ] Permitir salvar ou cancelar a edição
- [ ] Garantir que a edição atualize corretamente a lista

**Arquivos para verificar**:
- `public/index.html`
- `public/js/todoList.js`

---

### 17. Adicionar confirmação ao remover tarefa
**Título**: [BOA PRIMEIRA ISSUE] Adicionar confirmação ao remover tarefa

**Descrição**:
Exibir um alerta de confirmação antes de remover uma tarefa, evitando exclusões acidentais.

**Critérios de Aceitação**:
- [ ] Exibir confirmação ao tentar remover uma tarefa
- [ ] Remover apenas se o usuário confirmar
- [ ] Garantir que a interface permaneça responsiva

**Arquivos para verificar**:
- `public/js/todoList.js`

---

## Como Usar Este Arquivo

1. **Antes do workshop**: Crie 8-12 issues selecionadas desta lista no GitHub
2. **Durante o workshop**: Os participantes podem escolher issues com base no seu nível de habilidade
3. **Adicione labels apropriadas**: `good-first-issue`, `workshop`, `help-wanted`, etc.
4. **Responsáveis**: Não atribua inicialmente, deixe os participantes se auto-atribuírem
5. **Marcos**: Considere criar um marco "Workshop"

## Dicas para Facilitadores

- Comece demonstrando como resolver uma issue fácil
- Mostre como usar GitHub Copilot Agent para entender o código
- Encoraje participantes a fazer perguntas nas issues
- Programação em par é bem-vinda
- Celebre cada contribuição, não importa o tamanho!
