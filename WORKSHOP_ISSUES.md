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

### 5. Melhorar título das páginas
**Labels**: `good-first-issue`, `workshop`, `seo`
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

**Sugestões para o Copilot Agent**:
- "Quais meta tags são importantes para SEO"
- "Como implementar Open Graph para compartilhamento em redes sociais"

---

### 6. Adicionar favicon personalizado
**Labels**: `good-first-issue`, `workshop`, `enhancement`
**Título**: [BOA PRIMEIRA ISSUE] Adicionar favicon personalizado para o site

**Descrição**:
O site precisa de um favicon personalizado para melhorar a identidade visual nas abas do navegador.

**Critérios de Aceitação**:
- [ ] Criar um favicon a partir do logo/ícone existente
- [ ] Adicionar as referências aos diferentes tamanhos de favicon no HTML
- [ ] Testar em diferentes navegadores
- [ ] Verificar suporte a diferentes dispositivos (desktop, mobile)

**Arquivos para verificar**:
- `src/index.html`
- `icons/`

**Sugestões para o Copilot Agent**:
- "Como adicionar favicons modernos em um site HTML"
- "Quais são os tamanhos recomendados para favicons em 2023?"

---

### 7. Adicionar animação simples de carregamento
**Labels**: `good-first-issue`, `workshop`, `enhancement`, `css`
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

**Sugestões para o Copilot Agent**:
- "Como criar uma animação de loading simples em CSS"
- "Como detectar quando uma página terminou de carregar em JavaScript"

---

### 8. Adicionar atributos de acessibilidade
**Labels**: `good-first-issue`, `workshop`, `a11y`
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

**Sugestões para o Copilot Agent**:
- "Quais atributos ARIA são recomendados para botões de ação?"
- "Como tornar uma lista de tarefas acessível para leitores de tela"

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
