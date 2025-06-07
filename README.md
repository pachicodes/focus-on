# Focus On

> 🎯 **Projeto Workshop**: Contribuindo com Open Source com a ajuda do GitHub Copilot (Agent Mode)

Uma aplicação web projetada para ajudar os usuários a aumentar a produtividade e manter o foco através de um conjunto de ferramentas simples e eficazes. Este app combina uma lista de tarefas, um timer Pomodoro e um player de música lofi embutido, tudo em uma interface limpa e moderna com opções de modo claro, escuro e temas personalizáveis (ex: Rosinha, Azul Pastel).

**Agora você pode escolher entre diferentes temas de cor nas configurações do app!**

**Este projeto é usado como exemplo prático para ensinar contribuições Open Source com GitHub Copilot Agent.**

## 🎯 Workshop: Contribuindo com Open Source

Este projeto foi especialmente preparado para o workshop **"Contribuindo com Open Source com a ajuda do GitHub Copilot (Agent Mode)"**.

### Para Participantes do Workshop

1. **Faça um fork deste repositório** para sua conta GitHub
2. **Abra seu fork no codespaces ** direto no seu navegador
3. **Escolha uma issue** marcada e se adicione no assign. 
4. **Use o GitHub Copilot Agent** para entender o código e implementar melhorias
6. **Commit suas Mudanças**: `git commit -m 'Add: alguma FuncionalidadeIncrivel'`
7. **Push para a Branch**: `git push origin feature/FuncionalidadeIncrivel`
8. **Abra um Pull Request**

## Funcionalidades

- **📝 Lista de Tarefas**: Adicione, gerencie e acompanhe suas tarefas facilmente.
- **🍅 Timer Pomodoro**: Trabalhe em intervalos focados de 25 minutos com pausas curtas, personalizável para seu fluxo de trabalho.
- **🎧 Player de Música Lofi**: Incorpore suas playlists favoritas do Spotify (ou outras mídias) para criar uma atmosfera relaxante de trabalho.
- **☀️/🌙 Temas Personalizáveis**: Alterne entre temas claro, escuro, Rosinha, Azul Pastel ou Curtindo a Vida Adoidado para conforto visual ideal a qualquer hora do dia.
- **🎨 Interface Moderna**: Interface de usuário esteticamente agradável e intuitiva.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript Vanilla
- **Servidor de Desenvolvimento**: `live-server` (via scripts npm)

## Estrutura do Projeto

```text
focus-on/
├── manifest.json        # Configuração para extensão do Chrome
├── icons/               # Ícones da aplicação
├── src/                 # Código-fonte principal
│   ├── index.html       # Estrutura HTML principal
│   ├── css/             # Estilos CSS
│   │   └── style.css    # Estilos principais + temas claro/escuro
│   └── js/              # Lógica JavaScript
│       ├── app.js       # Lógica principal da aplicação
│       ├── todoList.js  # Funcionalidade da lista de tarefas
│       └── components/  # Componentes reutilizáveis
│           ├── mediaEmbed.js     # Player de música
│           ├── pomodoroTimer.js  # Timer Pomodoro
│           └── todoList.js       # Componente de lista de tarefas (legado)
├── package.json            # Metadados do projeto e dependências
└── README.md               # Este arquivo
```


## Como Usar

- **Alternar Tema**: Clique no botão "☀️/🌙" (Alternar Tema), geralmente localizado no canto superior direito da página, para alternar entre os modos claro e escuro. Agora também há um menu suspenso para escolher entre os temas de cor disponíveis (Rosinha, Azul Pastel ou Curtindo a Vida Adoidado).
- **Gerenciar Tarefas**: Na seção "Lista de Tarefas", digite sua tarefa no campo de entrada e clique no botão "Adicionar Tarefa".
- **Usar Timer Pomodoro**: Na seção "Timer Pomodoro", clique em "Iniciar" para começar uma sessão de foco. Use os botões "Pausar" e "Reiniciar" conforme necessário.
- **Ouvir Música**: O player de mídia incorporado na seção "Música Lofi" deve estar pronto para reproduzir.

## Contribuindo

As contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.


### Obtendo Ajuda

- Use o **GitHub Copilot Agent** para entender código e obter sugestões de implementação
- Faça perguntas nos comentários das issues
- Confira o [Código de Conduta](CODE_OF_CONDUCT.md)
- Leia nossas [Diretrizes de Contribuição](CONTRIBUTING.md)

## Licença

Distributed under the MIT License. See the `LICENSE` file (you may need to create one if it doesn't exist) for more information.

