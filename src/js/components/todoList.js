<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Focus On</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1>Focus On</h1>
        <section id="todo-list">
            <h2>To-Do List</h2>
            <div id="task-input">
                <input type="text" id="task" placeholder="Add a new task...">
                <button id="add-task">Add Task</button>
            </div>
            <ul id="tasks"></ul>
        </section>
        <section id="pomodoro-timer">
            <h2>Pomodoro Timer</h2>
            <div id="timer-display">25:00</div>
            <button id="start-timer">Start</button>
            <button id="stop-timer">Stop</button>
            <button id="reset-timer">Reset</button>
        </section>
        <section id="media-embed">
            <h2>Listen to Lofi</h2>
            <div id="media-player"></div>
        </section>
    </div>
    <script src="js/app.js"></script>
</body>
</html>