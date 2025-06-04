# Issues do Workshop - Prontas para Criar

Este arquivo contém uma lista de issues prontas para serem criadas no GitHub antes do workshop. Copie e cole o conteúdo de cada issue no GitHub.

## 🟢 Issues para Iniciantes



### 2. Adicionar contador de tarefas pendentes e concluídas
**Título**: [BOA PRIMEIRA ISSUE] Adicionar contador de tarefas pendentes e concluídas

**Descrição**:
Adicionar um contador visual que mostra quantas tarefas estão pendentes e quantas já foram concluídas.

**Critérios de Aceitação**:
- [ ] Exibir o número de tarefas pendentes e concluídas na interface
- [ ] Atualizar o contador automaticamente ao adicionar, concluir ou remover tarefas
- [ ] Garantir que o contador funcione em ambos os temas (claro/escuro)

**Arquivos para verificar**:
- `src/index.html`
- `src/js/todoList.js`

---

### 3. Adicionar filtro de tarefas (todas, pendentes, concluídas)
**Título**: [BOA PRIMEIRA ISSUE] Adicionar filtro de tarefas (todas, pendentes, concluídas)

**Descrição**:
Permitir que o usuário filtre a lista de tarefas para exibir todas, apenas pendentes ou apenas concluídas.

**Critérios de Aceitação**:
- [ ] Adicionar botões ou um dropdown para selecionar o filtro
- [ ] Implementar a lógica de filtragem no JavaScript
- [ ] Garantir que o filtro funcione corretamente ao adicionar/concluir/remover tarefas

**Arquivos para verificar**:
- `src/index.html`
- `src/js/todoList.js`

---

### 4. Adicionar atalhos de teclado para ações principais
**Título**: [BOA PRIMEIRA ISSUE] Adicionar atalhos de teclado para ações principais

**Descrição**:
Adicionar atalhos de teclado para facilitar a navegação e uso do app, como adicionar tarefa (ex: Enter), iniciar/pausar timer (ex: barra de espaço), etc.

**Critérios de Aceitação**:
- [ ] Implementar pelo menos dois atalhos de teclado úteis
- [ ] Documentar os atalhos na interface (ex: tooltip ou legenda)
- [ ] Garantir que os atalhos não entrem em conflito com atalhos do navegador

**Arquivos para verificar**:
- `src/js/app.js`
- `src/js/todoList.js`
- `src/js/components/pomodoroTimer.js`

---

### 5. Adicionar tooltips de ajuda nos botões
**Título**: [BOA PRIMEIRA ISSUE] Adicionar tooltips de ajuda nos botões

**Descrição**:
Adicionar tooltips (dicas de ajuda) nos botões principais para melhorar a usabilidade, explicando a função de cada botão ao passar o mouse.

**Critérios de Aceitação**:
- [ ] Adicionar atributo `title` ou criar tooltips customizados em CSS/JS
- [ ] Garantir que todos os botões principais tenham uma dica de uso
- [ ] Garantir acessibilidade dos tooltips

**Arquivos para verificar**:
- `src/index.html`
- `src/css/style.css`

---

### 6. Melhorar título das páginas
**Título**: [BOA PRIMEIRA ISSUE] Melhorar título e meta tags para SEO

**Descrição**:
O título da página e as meta tags podem ser melhorados para otimização de mecanismos de busca (SEO) e compartilhamento em redes sociais.

**Critérios de Aceitação**:
- [ ] Adicionar meta tags de descrição apropriadas
- [ ] Adicionar meta tags para compartilhamento em redes sociais (Open Graph)
- [ ] Verificar se o título da página é descritivo e envolvente
- [ ] Adicionar meta tags para dispositivos móveis

**Arquivos para verificar**:
- `src/index.html`

---

### 7. Adicionar animação simples de carregamento
**Título**: [BOA PRIMEIRA ISSUE] Adicionar animação de carregamento inicial

**Descrição**:
Adicionar uma animação de carregamento simples enquanto os recursos do site são carregados (especialmente o embed de música).

**Critérios de Aceitação**:
- [ ] Criar uma animação de loading simples em CSS
- [ ] Mostrar a animação enquanto os recursos estão carregando
- [ ] Esconder elegantemente a animação quando o carregamento for concluído
- [ ] A animação deve funcionar em temas claro/escuro

**Arquivos para verificar**:
- `src/css/style.css`
- `src/index.html`
- `src/js/app.js`

---

### 8. Adicionar atributos de acessibilidade
**Título**: [BOA PRIMEIRA ISSUE] Melhorar acessibilidade com atributos ARIA

**Descrição**:
Melhorar a acessibilidade da aplicação adicionando atributos ARIA apropriados para usuários de leitores de tela.

**Critérios de Aceitação**:
- [ ] Adicionar roles ARIA apropriadas aos elementos interativos
- [ ] Adicionar aria-label onde necessário
- [ ] Garantir que todos os elementos interativos sejam acessíveis via teclado
- [ ] Verificar ordem de tabulação lógica

**Arquivos para verificar**:
- `src/index.html`

---

## 🟡 Issues Intermediárias

### 5. Implementar categorias para tarefas
**Título**: [FUNCIONALIDADE] Adicionar categorias de tarefas com cores

**Descrição**:
Usuários devem poder categorizar tarefas (trabalho, pessoal, urgente) com cores diferentes.

**Critérios de Aceitação**:
- [ ] Adicionar dropdown de categoria no campo de tarefa
- [ ] Implementar cores para cada categoria
- [ ] Salvar categorias no localStorage
- [ ] Adicionar filtro por categoria
- [ ] Garantir acessibilidade com contraste adequado

---

### 6. Adicionar notificações do timer
**Título**: [FUNCIONALIDADE] Adicionar notificações do navegador ao fim do Pomodoro

**Descrição**:
Quando o timer Pomodoro terminar, mostrar uma notificação no navegador para avisar o usuário.

**Critérios de Aceitação**:
- [ ] Solicitar permissão de notificação
- [ ] Exibir notificação ao fim do timer
- [ ] Incluir mensagem e ícone apropriados
- [ ] Lidar com permissão negada de forma amigável
- [ ] Adicionar opção para ativar/desativar notificações

---

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
