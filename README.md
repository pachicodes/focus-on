# Focus On

> 🎯 **Projeto Workshop**: Contribuindo com Open Source com a ajuda do GitHub Copilot (Agent Mode)

Uma aplicação web projetada para ajudar os usuários a aumentar a produtividade e manter o foco através de um conjunto de ferramentas simples e eficazes. Este app combina uma lista de tarefas, um timer Pomodoro e um player de música lofi embutido, tudo em uma interface limpa e moderna com opções de modo claro e escuro.

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
- **☀️/🌙 Modo Claro e Escuro**: Alterne entre temas claro e escuro para conforto visual ideal a qualquer hora do dia.
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

- **Alternar Tema**: Clique no botão "☀️/🌙" (Alternar Tema), geralmente localizado no canto superior direito da página, para alternar entre os modos claro e escuro.
- **Gerenciar Tarefas**: Na seção "Lista de Tarefas", digite sua tarefa no campo de entrada e clique no botão "Adicionar Tarefa".
- **Usar Timer Pomodoro**: Na seção "Timer Pomodoro", clique em "Iniciar" para começar uma sessão de foco. Use os botões "Pausar" e "Reiniciar" conforme necessário.
- **Ouvir Música**: O player de mídia incorporado na seção "Música Lofi" deve estar pronto para reproduzir.

## Como rodar o projeto localmente (evite o erro 'Cannot GET /')

Para rodar o projeto corretamente e evitar o erro "Cannot GET /", **NÃO abra o arquivo index.html diretamente** no navegador. Use um servidor HTTP simples. Você pode:

### Opção 1: Usar o comando pronto (recomendado)

```bash
npm install
npm start
```

Isso irá rodar o projeto na pasta correta usando o `live-server`.

### Opção 2: Usar http-server (Node.js)

```bash
npx http-server ./public -p 3000
```
Acesse http://localhost:3000

### Opção 3: Usar a extensão Live Server do VS Code
- Clique com o botão direito no arquivo `index.html` dentro da pasta `public/` e escolha **Open with Live Server**.

---

> **Importante:** Sempre rode o servidor na pasta `public/` para que o arquivo `index.html` seja encontrado corretamente.

---

## Contribuindo

As contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.


### Obtendo Ajuda

- Use o **GitHub Copilot Agent** para entender código e obter sugestões de implementação
- Faça perguntas nos comentários das issues
- Confira o [Código de Conduta](CODE_OF_CONDUCT.md)
- Leia nossas [Diretrizes de Contribuição](CONTRIBUTING.md)

## Licença

Distributed under the MIT License. See the `LICENSE` file (you may need to create one if it doesn't exist) for more information.

