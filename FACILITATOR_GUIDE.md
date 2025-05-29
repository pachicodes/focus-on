# Workshop Facilitator Guide

## 📋 Pré-Workshop Checklist

### Setup do Repositório (1 semana antes)

- [ ] Criar issues do arquivo `WORKSHOP_ISSUES.md` (escolher 8-12 issues variadas)
- [ ] Adicionar labels apropriadas:
  - [ ] `good-first-issue` (verde)
  - [ ] `help-wanted` (azul)
  - [ ] `workshop` (roxo)
  - [ ] `enhancement` (azul claro)
  - [ ] `bug` (vermelho)
  - [ ] `documentation` (cinza)
  - [ ] `design` (rosa)
- [ ] Criar milestone "Workshop" 
- [ ] Testar que o projeto roda com `npm run dev`
- [ ] Preparar branches de exemplo (opcional)

### Preparação Técnica (2-3 dias antes)

- [ ] Verificar que GitHub Copilot está funcionando
- [ ] Preparar exemplos de prompts eficazes para Copilot Agent
- [ ] Testar workflow completo: fork → clone → branch → commit → PR
- [ ] Preparar slides de apresentação (se aplicável)

### Material para Participantes

- [ ] Link do repositório
- [ ] Instruções de setup (Node.js, Git, GitHub account)
- [ ] Lista de extensões recomendadas do VS Code
- [ ] Guia rápido de comandos Git

## 🎯 Estrutura do Workshop (2 horas)

### Abertura (15 min)
1. **Apresentações** (5 min)
   - Quem são os participantes
   - Nível de experiência com Git/GitHub
   - Experiência prévia com Open Source

2. **Overview do Projeto** (10 min)
   - Demonstrar o Focus On funcionando
   - Explicar a estrutura do código
   - Mostrar diferentes componentes (todo, timer, music)

### Demo: GitHub Copilot Agent (20 min)

3. **Demonstração ao Vivo** (15 min)
   - Abrir o projeto no VS Code
   - Mostrar como ativar Copilot Agent
   - Exemplos de prompts eficazes:
     ```
     "Explain how the Pomodoro timer component works"
     "How can I add a new feature to save user preferences?"
     "What does this CSS class do and how can I improve it?"
     "Help me understand the task completion animation"
     ```
   - Mostrar diferentes tipos de ajuda: explicação, implementação, debugging

4. **Q&A sobre Copilot** (5 min)

### Hands-on: Setup (15 min)

5. **Setup dos Participantes**
   - Fork do repositório
   - Clone local
   - `npm install` e `npm run dev`
   - Teste básico de funcionamento

### Atividade Prática: Contribuições (60 min)

6. **Explicação do Processo** (10 min)
   - Como escolher uma issue
   - Workflow: branch → code → commit → push → PR
   - Como usar Copilot Agent eficazmente
   - Quando pedir ajuda

7. **Desenvolvimento** (45 min)
   - Participantes escolhem issues
   - Trabalho individual ou em pares
   - Facilitadores circulam ajudando
   - Encorajar uso do Copilot Agent

8. **Check-in** (5 min)
   - Status de cada participante
   - Dificuldades encontradas
   - Sucessos até agora

### Review e Fechamento (25 min)

9. **Apresentação de Resultados** (15 min)
   - Cada participante/dupla mostra brevemente o que fez
   - Review de alguns PRs em conjunto
   - Celebrar todas as contribuições

10. **Wrap-up** (10 min)
    - Próximos passos para continuar contribuindo
    - Recursos para aprender mais
    - Como encontrar outros projetos Open Source
    - Feedback sobre o workshop

## 🎯 Prompts Recomendados para Demonstração

### Para Entendimento do Código
```
"Explain how the task completion animation works in this project"
"What does the dark mode implementation do and how does it work?"
"Walk me through the Pomodoro timer logic step by step"
"How does localStorage work in this application?"
```

### Para Implementação
```
"How would I add a feature to categorize tasks?"
"Show me how to implement keyboard shortcuts for this todo app"
"Help me add sound notifications when the timer ends"
"How can I make this component more accessible?"
```

### Para Debugging
```
"Why might the timer not reset properly after completion?"
"What could cause tasks to not save to localStorage?"
"Help me debug this CSS layout issue"
```

### Para Melhorias
```
"How can I improve the performance of this task rendering function?"
"What are best practices for this type of component?"
"Review this code and suggest improvements"
```

## 🎯 Distribuição de Issues por Nível

### Para Iniciantes (40% dos participantes)
- Melhorar textos e documentação
- Pequenos ajustes de CSS
- Adicionar scripts ao package.json
- Limpeza de arquivos desnecessários

### Para Intermediários (40% dos participantes)
- Novas funcionalidades simples
- Melhorias de UX
- Implementação de notificações
- Categorias para tarefas

### Para Avançados (20% dos participantes)
- Drag & drop
- PWA features
- Sistema de estatísticas
- Testes unitários

## 🛠️ Dicas para Facilitadores

### Durante as Apresentações
- Mantenha energia alta e seja entusiasmado
- Use exemplos práticos e relatable
- Encoraje perguntas a qualquer momento
- Mostre que erros são normais e part of the process

### Durante o Desenvolvimento
- Circule constantemente entre os participantes
- Faça perguntas abertas: "Como está indo?" "O que você descobriu?"
- Ajude com problemas técnicos, mas encoraje uso do Copilot primeiro
- Celebrate small wins: "Great job getting that working!"

### Gerenciando Diferentes Níveis
- Pair up beginners with more experienced developers
- Tenha issues extras preparadas para quem terminar rápido
- Help beginners choose appropriate issues
- Don't let anyone struggle alone for more than 5-10 minutes

### Usando Copilot Eficazmente
- Demonstre diferentes tipos de prompts
- Mostre como iterar e refinar prompts
- Ensine quando confiar vs. quando questionar as sugestões
- Emphasize que Copilot é um assistente, não um replacement para thinking

## ⚠️ Problemas Comuns e Soluções

### Problemas Técnicos
- **Node.js não instalado**: Tenha links para instalação prontos
- **Git não configurado**: Ajude com `git config --global user.name/email`
- **Fork/clone confusion**: Demonstre o processo visualmente
- **Merge conflicts**: Use como teaching opportunity

### Issues com Copilot
- **Sugestões não relevantes**: Ensine como refinar prompts
- **Código não funciona**: Demonstre debugging process
- **Overreliance**: Encoraje understanding do que o código faz

### Dinâmica do Grupo
- **Participantes muito tímidos**: Faça perguntas diretas, encoraje sharing
- **Participantes dominando**: Gentilmente redirect atenção para outros
- **Nível muito diferentes**: Use pair programming strategically

## 📊 Métricas de Sucesso

### Durante o Workshop
- [ ] Todos conseguem fazer setup e rodar o projeto
- [ ] Pelo menos 80% dos participantes criam uma branch e fazem commit
- [ ] Pelo menos 60% dos participantes abrem um PR
- [ ] Todos os participantes usam Copilot Agent pelo menos uma vez

### Pós Workshop
- [ ] Número de PRs merged
- [ ] Feedback positivo dos participantes
- [ ] Participantes continuam contribuindo após o workshop
- [ ] Participantes reportam confidence increase em contribuir para Open Source

## 📝 Material de Follow-up

### Para Enviar Após o Workshop
- Links para projetos Open Source beginner-friendly
- Lista de recursos para aprender Git/GitHub
- Guia de como usar GitHub Copilot eficazmente
- Comunidades para continuar aprendendo

### Projetos Recomendados para Próximas Contribuições
- [Good First Issues](https://goodfirstissues.com/)
- [First Timers Only](https://www.firsttimersonly.com/)
- [CodeTriage](https://www.codetriage.com/)
- [Up For Grabs](https://up-for-grabs.net/)

## 🎉 Celebration Ideas

- Take group photo with laptops showing contributions
- Create a "Wall of Fame" slide with all contributors
- Share accomplishments on social media (with permission)
- Plan follow-up meetup or advanced workshop
- Send certificates of participation (digital)
