# Guia do Facilitador do Workshop

## 📋 Checklist Pré-Workshop

### Material para os Participantes

- [ ] Link do repositório
- [ ] Instruções de configuração (Node.js, Git, conta do GitHub)
- [ ] Lista de extensões recomendadas do VS Code
- [ ] Guia rápido de comandos Git

## 🎯 Estrutura do Workshop (2 horas)

### Abertura (15 min)
1. **Visão Geral do Projeto** (10 min)
   - Demonstrar o Focus On funcionando
   - Explicar a estrutura do código
   - Mostrar diferentes componentes (tarefas, timer, música)

### Demonstração: GitHub Copilot Agent (20 min)

3. **Demonstração ao Vivo** (15 min)
   - Abrir o projeto no VS Code
   - Mostrar como ativar o Copilot Agent
   - Exemplos de prompts eficazes:
     ```
     "Explique como o componente do timer Pomodoro funciona"
     "Como posso adicionar uma nova funcionalidade para salvar as preferências do usuário?"
     "O que esta classe CSS faz e como posso melhorá-la?"
     "Ajude-me a entender a animação de conclusão da tarefa"
     ```
   - Mostrar diferentes tipos de ajuda: explicação, implementação, depuração

### Prática: Configuração (15 min)

5. **Configuração dos Participantes**
   - Escolher uma issue no repositório principal do projeto e se atribuir a ela (assign)
   - Fork do repositório
   - Abrir o fork diretamente no GitHub Codespaces (sem necessidade de clone local)
   - Esperar o ambiente Codespaces inicializar (Node.js já estará disponível)
   - Rodar `npm install` e `npm run dev` no terminal do Codespaces
   - Teste básico de funcionamento no Codespaces

### Atividade Prática: Contribuições (60 min)

6. **Explicação do Processo** (10 min)
   - Como escolher uma issue
   - Fluxo de trabalho: branch → código → commit → push → PR (tudo pelo Codespaces)
   - Como usar o Copilot Agent eficazmente
   - Quando pedir ajuda

7. **Desenvolvimento** (45 min)
   - Participantes escolhem issues
   - Trabalho individual ou em pares
   - Facilitadores circulam ajudando
   - Incentivar o uso do Copilot Agent

8. **Check-in** (5 min)
   - Status de cada participante
   - Dificuldades encontradas
   - Sucessos até agora

### Revisão e Fechamento (25 min)

9. **Apresentação de Resultados** (15 min)
   - Cada participante/dupla mostra brevemente o que fez
   - Revisão de alguns PRs em conjunto
   - Celebrar todas as contribuições

10. **Conclusão** (10 min)
    - Próximos passos para continuar contribuindo
    - Recursos para aprender mais
    - Como encontrar outros projetos de Código Aberto
    - Feedback sobre o workshop

## 🎯 Prompts Recomendados para Demonstração

### Para Entendimento do Código
```
"Explique como funciona a animação de conclusão de tarefa neste projeto"
"O que a implementação do modo escuro faz e como ela funciona?"
"Me guie pela lógica do timer Pomodoro passo a passo"
"Como o localStorage funciona nesta aplicação?"
```

### Para Implementação
```
"Como eu adicionaria uma funcionalidade para categorizar tarefas?"
"Mostre-me como implementar atalhos de teclado para este aplicativo de tarefas"
"Ajude-me a adicionar notificações sonoras quando o timer terminar"
"Como posso tornar este componente mais acessível?"
```

### Para Depuração
```
"Por que o timer pode não reiniciar corretamente após a conclusão?"
"O que poderia fazer com que as tarefas não fossem salvas no localStorage?"
"Ajude-me a depurar este problema de layout CSS"
```

### Para Melhorias
```
"Como posso melhorar o desempenho desta função de renderização de tarefas?"
"Quais são as melhores práticas para este tipo de componente?"
"Revise este código e sugira melhorias"
```

## 🎯 Distribuição de Issues por Nível

### Para Iniciantes (40% dos participantes)
- Melhorar textos e documentação
- Pequenos ajustes de CSS
- Adicionar scripts ao package.json
- Limpeza de arquivos desnecessários

### Para Intermediários (40% dos participantes)
- Novas funcionalidades simples
- Melhorias de UX (Experiência do Usuário)
- Implementação de notificações
- Categorias para tarefas

### Para Avançados (20% dos participantes)
- Funcionalidade de Arrastar e Soltar (Drag & drop)
- Funcionalidades de PWA (Progressive Web App)
- Sistema de estatísticas
- Testes unitários

## 🛠️ Dicas para Facilitadores

### Durante as Apresentações
- Mantenha a energia alta e seja entusiasmado
- Use exemplos práticos e com os quais os participantes possam se identificar
- Incentive perguntas a qualquer momento
- Mostre que erros são normais e fazem parte do processo

### Durante o Desenvolvimento
- Circule constantemente entre os participantes
- Faça perguntas abertas: "Como está indo?" "O que você descobriu?"
- Ajude com problemas técnicos, mas incentive o uso do Copilot primeiro
- Celebre pequenas vitórias: "Ótimo trabalho ao fazer isso funcionar!"

### Gerenciando Diferentes Níveis
- Forme duplas de iniciantes com desenvolvedores mais experientes
- Tenha issues extras preparadas para quem terminar rápido
- Ajude os iniciantes a escolherem issues apropriadas
- Não deixe ninguém com dificuldades sozinho por mais de 5-10 minutos

### Usando o Copilot Eficazmente
- Demonstre diferentes tipos de prompts
- Mostre como iterar e refinar prompts
- Ensine quando confiar vs. quando questionar as sugestões
- Enfatize que o Copilot é um assistente, não um substituto para o pensamento crítico

## ⚠️ Problemas Comuns e Soluções

### Problemas Técnicos
- **Node.js não instalado**: Tenha links para instalação prontos
- **Git não configurado**: Ajude com `git config --global user.name/email`
- **Confusão com Fork/Clone**: Demonstre o processo visualmente
- **Conflitos de Merge**: Use como uma oportunidade de aprendizado

### Issues com o Copilot
- **Sugestões não relevantes**: Ensine como refinar os prompts
- **Código não funciona**: Demonstre o processo de depuração
- **Dependência excessiva**: Incentive o entendimento do que o código faz

### Dinâmica do Grupo
- **Participantes muito tímidos**: Faça perguntas diretas, incentive o compartilhamento
- **Participantes dominando a conversa**: Gentilmente redirecione a atenção para outros
- **Níveis muito diferentes**: Use a programação em par estrategicamente

## 📊 Métricas de Sucesso

### Durante o Workshop
- [ ] Todos conseguem fazer a configuração e rodar o projeto
- [ ] Pelo menos 80% dos participantes criam uma branch e fazem um commit
- [ ] Pelo menos 60% dos participantes abrem um PR
- [ ] Todos os participantes usam o Copilot Agent pelo menos uma vez

### Pós Workshop
- [ ] Número de PRs que receberam merge
- [ ] Feedback positivo dos participantes
- [ ] Participantes continuam contribuindo após o workshop
- [ ] Participantes relatam aumento de confiança em contribuir para Código Aberto

## 📝 Material de Acompanhamento

### Para Enviar Após o Workshop
- Links para projetos de Código Aberto amigáveis para iniciantes
- Lista de recursos para aprender Git/GitHub
- Guia de como usar o GitHub Copilot eficazmente
- Comunidades para continuar aprendendo

### Projetos Recomendados para Próximas Contribuições
- [Good First Issues](https://goodfirstissues.com/)
- [First Timers Only](https://www.firsttimersonly.com/)
- [CodeTriage](https://www.codetriage.com/)
- [Up For Grabs](https://up-for-grabs.net/)

## 🎉 Ideias para Celebração

- Tire uma foto em grupo com os laptops mostrando as contribuições
- Crie um slide de "Mural da Fama" com todos os contribuidores
- Compartilhe as conquistas nas redes sociais (com permissão)
- Planeje um meetup de acompanhamento ou workshop avançado
- Envie certificados de participação (digitais)
