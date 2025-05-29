# Focus On

A web application designed to help users boost productivity and maintain focus through a set of simple yet effective tools. This app combines a to-do list, a Pomodoro timer, and an embedded media player for lofi music, all wrapped in a clean, modern interface with light and dark mode options.
ssssss
## Features

- **📝 To-Do List**: Easily add, manage, and track your tasks.
- **🍅 Pomodoro Timer**: Work in focused 25-minute intervals with short breaks, customizable to your workflow.
- **🎧 Lofi Music Player**: Embed your favorite Spotify playlists (or other media) to create a relaxing work atmosphere.
- **☀️/🌙 Light & Dark Mode**: Switch between light and dark themes for optimal viewing comfort at any time of day.
- **🎨 Modern UI**: Aesthetically pleasing and intuitive user interface.

## Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Development Server**: `live-server` (via npm scripts)

## Project Structure

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
├── src/
│   ├── index.html          # Main HTML structure
│   ├── css/
│   │   └── style.css       # Stylesheets, including theme variables
│   ├── js/
│   │   ├── app.js          # Main application logic, theme toggling
│   │   └── components/
│   │       ├── todoList.js       # To-Do list functionality
│   │       ├── pomodoroTimer.js  # Pomodoro timer logic
│   │       └── mediaEmbed.js     # Media player embedding
├── package.json            # Project metadata and dependencies
└── README.md               # This file
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/focus-on.git
   ```

   (Replace `yourusername` with your actual GitHub username or the correct repository URL if it's hosted elsewhere.)

2. **Navigate to the project directory:**

   ```bash
   cd focus-on
   ```

3. **Install the dependencies:**
   (This project uses `live-server` as a devDependency, as specified in `package.json`.)

   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm start
   ```

   This command will execute the `start` script defined in `package.json` (which is `live-server src`). It will typically open the application in your default web browser, often at `http://127.0.0.1:8080`.

2. **Alternatively, you can open `src/index.html` directly in your web browser.** However, using `npm start` is recommended to take advantage of `live-server`'s features like automatic reloading.

## How to Use

- **Toggle Theme**: Click the "Alternar Tema" (Toggle Theme) button, usually found at the top-right of the page, to switch between light and dark modes.
- **Manage Tasks**: In the "To-Do List" section, type your task into the input field and click the "Add Task" button.
- **Use Pomodoro Timer**: In the "Pomodoro Timer" section, click "Start" to begin a focus session. Use the "Stop" and "Reset" buttons as needed.
- **Listen to Music**: The embedded media player in the "Listen to Lofi" section should be ready to play.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See the `LICENSE` file (you may need to create one if it doesn't exist) for more information.

## Author

- **Your Name** - *Initial work* - (e.g., `Pachicodes` or your GitHub profile link)

---

*Remember to replace placeholders like `yourusername`, `Your Name`, and potentially add a `LICENSE` file if you intend to distribute this project more formally.*
