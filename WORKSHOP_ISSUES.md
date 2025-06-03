# Issues do Workshop - Prontas para Criar

Este arquivo contém uma lista de issues prontas para serem criadas no GitHub antes do workshop. Copie e cole o conteúdo de cada issue no GitHub.

## 🟢 Issues para Iniciantes

### 1. Melhorar mensagens de placeholder
**Labels**: `good-first-issue`, `workshop`, `documentation`
**Título**: [BOA PRIMEIRA ISSUE] Melhorar textos de placeholder em toda a aplicação

**Descrição**:
Os textos de placeholder atuais podem ser mais envolventes e úteis. Atualize os placeholders para serem mais descritivos e encorajadores.

**Critérios de Aceitação**:
- [ ] Atualizar o placeholder do campo de tarefa para ser mais motivador
- [ ] Adicionar dicas úteis nos placeholders
- [ ] Garantir que os placeholders funcionem nos temas claro e escuro
- [ ] Testar se os placeholders são acessíveis

**Arquivos para verificar**:
- `src/index.html`
- `src/js/todoList.js`

**Sugestões para o Copilot Agent**:
- "Mostre todos os textos de placeholder neste projeto"
- "Quais são as melhores práticas para escrever textos de placeholder úteis?"
- "Como tornar placeholders mais envolventes em apps de produtividade?"

---

### 2. Adicionar um script dev ao package.json
**Labels**: `good-first-issue`, `workshop`, `tooling`
**Título**: [BOA PRIMEIRA ISSUE] Adicionar alias 'dev' ao package.json

**Descrição**:
Muitos desenvolvedores esperam que `npm run dev` inicie o servidor de desenvolvimento. Atualmente só temos `npm start`.

**Critérios de Aceitação**:
- [ ] Adicionar um script "dev" que faça o mesmo que "start"
- [ ] Testar se `npm run dev` funciona corretamente
- [ ] Atualizar o README se necessário

**Arquivos para verificar**:
- `package.json`

**Sugestões para o Copilot Agent**:
- "Qual a diferença entre npm start e npm run dev?"
- "Como adicionar scripts ao package.json"

---

### 3. Remover arquivos duplicados
**Labels**: `good-first-issue`, `workshop`, `cleanup`
**Título**: [BOA PRIMEIRA ISSUE] Limpar arquivos .new duplicados

**Descrição**:
Existem vários arquivos `.new` no repositório que parecem ser artefatos de desenvolvimento e devem ser removidos.

**Critérios de Aceitação**:
- [ ] Remover todos os arquivos `.new` do projeto
- [ ] Garantir que a remoção não quebre funcionalidades
- [ ] Atualizar o .gitignore para evitar futuros arquivos .new, se necessário

**Arquivos para verificar**:
- `src/js/app.js.new`
- `src/js/todoList.js.new`
- `src/js/components/todoList.js.new`

**Sugestões para o Copilot Agent**:
- "O que são esses arquivos .new e é seguro deletá-los?"
- "Como verificar se a remoção de arquivos vai quebrar a aplicação?"

---

### 4. Melhorar o README com screenshots
**Labels**: `good-first-issue`, `workshop`, `documentation`
**Título**: [BOA PRIMEIRA ISSUE] Adicionar screenshots e melhorar o README

**Descrição**:
O README pode ser mais atrativo com screenshots mostrando o app em funcionamento.

**Critérios de Aceitação**:
- [ ] Tirar screenshots do app (modos claro e escuro)
- [ ] Adicionar screenshots ao README
- [ ] Melhorar a seção de funcionalidades com mais detalhes
- [ ] Adicionar uma seção "Demo"

**Sugestões para o Copilot Agent**:
- "Como tirar bons screenshots para documentação?"
- "Quais seções um bom README deve ter?"
- "Exemplos de READMEs envolventes"

---

## 🟡 Issues Intermediárias

### 5. Implementar categorias para tarefas
**Labels**: `enhancement`, `intermediate`, `workshop`
**Título**: [FUNCIONALIDADE] Adicionar categorias de tarefas com cores

**Descrição**:
Usuários devem poder categorizar tarefas (trabalho, pessoal, urgente) com cores diferentes.

**Critérios de Aceitação**:
- [ ] Adicionar dropdown de categoria no campo de tarefa
- [ ] Implementar cores para cada categoria
- [ ] Salvar categorias no localStorage
- [ ] Adicionar filtro por categoria
- [ ] Garantir acessibilidade com contraste adequado

**Sugestões para o Copilot Agent**:
- "Como adicionar um dropdown ao formulário de tarefas?"
- "Qual a melhor forma de implementar cores para categorias?"
- "Como filtrar tarefas por categoria em JavaScript?"

---

### 6. Adicionar notificações do timer
**Labels**: `enhancement`, `intermediate`, `workshop`
**Título**: [FUNCIONALIDADE] Adicionar notificações do navegador ao fim do Pomodoro

**Descrição**:
Quando o timer Pomodoro terminar, mostrar uma notificação no navegador para avisar o usuário.

**Critérios de Aceitação**:
- [ ] Solicitar permissão de notificação
- [ ] Exibir notificação ao fim do timer
- [ ] Incluir mensagem e ícone apropriados
- [ ] Lidar com permissão negada de forma amigável
- [ ] Adicionar opção para ativar/desativar notificações

**Sugestões para o Copilot Agent**:
- "Como implementar notificações do navegador em JavaScript?"
- "O que é a Notification API e como usar?"
- "Como lidar com permissões de notificação?"

---

### 7. Melhorar animações de feedback
**Labels**: `enhancement`, `design`, `intermediate`, `workshop`
**Título**: [MELHORIA] Adicionar animações sutis para interações com tarefas

**Descrição**:
Adicionar animações suaves ao adicionar, completar ou remover tarefas para melhorar a experiência do usuário.

**Critérios de Aceitação**:
- [ ] Animação de fade-in para novas tarefas
- [ ] Animação de celebração ao completar tarefa
- [ ] Animação suave ao remover tarefa
- [ ] Garantir que as animações não impactem a performance
- [ ] Respeitar preferências de movimento do usuário

**Sugestões para o Copilot Agent**:
- "Como adicionar animações CSS suaves em listas?"
- "Boas práticas para animações web"
- "Como respeitar preferências de movimento do usuário?"

---

## 🔴 Issues Avançadas

### 8. Implementar drag & drop para reordenar tarefas
**Labels**: `enhancement`, `advanced`, `workshop`
**Título**: [FUNCIONALIDADE] Adicionar funcionalidade de arrastar e soltar para reordenar tarefas

**Descrição**:
Usuários devem poder arrastar e soltar tarefas para reordená-las conforme prioridade.

**Critérios de Aceitação**:
- [ ] Implementar API de drag and drop do HTML5
- [ ] Adicionar feedback visual durante o arraste
- [ ] Salvar nova ordem no localStorage
- [ ] Garantir acessibilidade com navegação por teclado
- [ ] Funcionar em desktop e dispositivos touch

**Sugestões para o Copilot Agent**:
- "Como implementar drag and drop com JavaScript puro?"
- "O que é a API de Drag do HTML5?"
- "Como tornar drag and drop acessível?"

---

### 9. Adicionar sistema de estatísticas
**Labels**: `enhancement`, `advanced`, `data-visualization`, `workshop`
**Título**: [FUNCIONALIDADE] Adicionar painel de estatísticas de produtividade

**Descrição**:
Criar uma visualização de estatísticas mostrando métricas como tarefas concluídas, tempo focado, etc.

**Critérios de Aceitação**:
- [ ] Rastrear conclusão de tarefas ao longo do tempo
- [ ] Rastrear sessões Pomodoro concluídas
- [ ] Criar gráficos/visualizações simples
- [ ] Adicionar funcionalidade de exportação
- [ ] Armazenar dados históricos no localStorage

**Sugestões para o Copilot Agent**:
- "Como criar gráficos simples com JavaScript puro?"
- "Quais dados rastrear para estatísticas de produtividade?"
- "Como armazenar e recuperar dados históricos de forma eficiente?"

---

### 10. Converter para PWA
**Labels**: `enhancement`, `advanced`, `pwa`, `workshop`
**Título**: [FUNCIONALIDADE] Converter app para Progressive Web App

**Descrição**:
Tornar o app instalável e funcional offline como PWA.

**Critérios de Aceitação**:
- [ ] Criar service worker para funcionalidade offline
- [ ] Adicionar web app manifest
- [ ] Implementar estratégias de cache
- [ ] Adicionar prompt de instalação
- [ ] Garantir funcionamento offline

**Sugestões para o Copilot Agent**:
- "Como criar um service worker para app de produtividade?"
- "O que incluir em um web app manifest?"
- "Como implementar funcionalidade offline-first?"

---

## 📝 Issues de Documentação

### 11. Criar guia de contribuição
**Labels**: `documentation`, `good-first-issue`, `workshop`
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
**Labels**: `documentation`, `intermediate`, `workshop`
**Título**: [DOCS] Adicionar comentários JSDoc em todas as funções

**Descrição**:
Adicionar comentários JSDoc abrangentes para melhorar a documentação do código e o suporte da IDE.

**Critérios de Aceitação**:
- [ ] Adicionar JSDoc a todas as funções públicas
- [ ] Incluir informações de parâmetro e tipo de retorno
- [ ] Adicionar exemplos de uso quando útil
- [ ] Garantir consistência em todos os arquivos

**Sugestões para o Copilot Agent**:
- "Como escrever bons comentários JSDoc?"
- "Gerar comentários JSDoc para esta função"
- "Quais são as melhores práticas para JSDoc?"

---

## 🎨 Issues de Design/UX

### 13. Implementar temas personalizáveis
**Labels**: `enhancement`, `design`, `intermediate`, `workshop`
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
**Labels**: `enhancement`, `design`, `responsive`, `workshop`
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
