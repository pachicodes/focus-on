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
    <script src="js/pomodoroTimer.js"></script>
    <script>
        // Pomodoro Timer logic will go here
        console.log("pomodoroTimer.js loaded");

        export function initPomodoroTimer() {
            // Pomodoro Timer initialization code
            const timerDisplay = document.getElementById('timer-display');
            const startButton = document.getElementById('start-timer');
            const stopButton = document.getElementById('stop-timer');
            const resetButton = document.getElementById('reset-timer');

            let timeLeft = 25 * 60; // 25 minutes in seconds
            let timerInterval = null;

            function updateDisplay() {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }

            function startTimer() {
                if (timerInterval) return; // Timer already running
                timerInterval = setInterval(() => {
                    timeLeft--;
                    updateDisplay();
                    if (timeLeft === 0) {
                        clearInterval(timerInterval);
                        timerInterval = null;
                        // Add notification or sound here
                        alert("Pomodoro session finished!");
                    }
                }, 1000);
            }

            function stopTimer() {
                clearInterval(timerInterval);
                timerInterval = null;
            }

            function resetTimer() {
                stopTimer();
                timeLeft = 25 * 60;
                updateDisplay();
            }

            startButton.addEventListener('click', startTimer);
            stopButton.addEventListener('click', stopTimer);
            resetButton.addEventListener('click', resetTimer);

            updateDisplay(); // Initial display update
        }
    </script>
</body>
</html>