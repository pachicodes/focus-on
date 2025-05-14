console.log('pomodoroTimer.js loaded');

function initPomodoroTimer() {
    // Elementos do DOM
    const timerDisplay = document.getElementById('timer-display');
    const startButton = document.getElementById('start-timer');
    const resetButton = document.getElementById('reset-timer');
    const modeButtons = document.querySelectorAll('.timer-mode-item');
    
    // Configurações padrão
    const timerConfigs = {
        pomodoro: 25 * 60, // 25 minutos em segundos
        shortBreak: 5 * 60, // 5 minutos em segundos
        longBreak: 15 * 60 // 15 minutos em segundos
    };
    
    // Estado do timer
    let currentMode = 'pomodoro';
    let timeRemaining = timerConfigs[currentMode];
    let isRunning = false;
    let timerId = null;
    let completedPomodoros = 0;
    
    // Funções de formatação
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Atualiza o display do timer
    function updateTimerDisplay() {
        timerDisplay.textContent = formatTime(timeRemaining);
    }
    
    // Inicia o timer
    function startTimer() {
        if (isRunning) return;
        
        isRunning = true;
        startButton.textContent = 'Pause';
        
        timerId = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateTimerDisplay();
            } else {
                completeTimer();
            }
        }, 1000);
    }
    
    // Pausa o timer
    function pauseTimer() {
        if (!isRunning) return;
        
        isRunning = false;
        startButton.textContent = 'Continue';
        clearInterval(timerId);
    }
    
    // Reseta o timer
    function resetTimer() {
        pauseTimer();
        timeRemaining = timerConfigs[currentMode];
        updateTimerDisplay();
        startButton.textContent = 'Start';
    }
    
    // Completa o timer atual
    function completeTimer() {
        pauseTimer();
        
        // Notificar o usuário
        notifyTimerComplete();
        
        // Se foi um pomodoro, incrementar o contador
        if (currentMode === 'pomodoro') {
            completedPomodoros++;
            
            // A cada 4 pomodoros completados, sugerir pausa longa
            if (completedPomodoros % 4 === 0) {
                switchMode('longBreak');
            } else {
                switchMode('shortBreak');
            }
        } else {
            // Se era uma pausa, voltar para o modo pomodoro
            switchMode('pomodoro');
        }
        
        updateTimerDisplay();
        startButton.textContent = 'Start';
    }
    
    // Troca o modo do timer (pomodoro/pausa curta/pausa longa)
    function switchMode(mode) {
        pauseTimer();
        currentMode = mode;
        timeRemaining = timerConfigs[mode];
        updateTimerDisplay();
        
        // Destacar o botão do modo atual
        modeButtons.forEach((button, index) => {
            const isActive = 
                (index === 0 && mode === 'pomodoro') || 
                (index === 1 && mode === 'shortBreak') ||
                (index === 2 && mode === 'longBreak');
            
            button.classList.toggle('active', isActive);
        });
    }
    
    // Notificação quando o timer termina
    function notifyTimerComplete() {
        // Som de alerta simples
        const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...'); // Base64 do som simplificado
        try {
            audio.play();
        } catch (error) {
            console.log('Erro ao tocar som de notificação', error);
        }
        
        // Vibração se disponível
        if ('vibrate' in navigator) {
            navigator.vibrate([200, 100, 200]);
        }
    }
    
    // Configurar event listeners
    startButton.addEventListener('click', () => {
        if (isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    });
    
    resetButton.addEventListener('click', resetTimer);
    
    // Adicionar event listeners para os botões de modo
    modeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const modes = ['pomodoro', 'shortBreak', 'longBreak'];
            if (index < modes.length) {
                switchMode(modes[index]);
            }
        });
    });
    
    // Inicializar o timer
    updateTimerDisplay();
    
    // Marcar o modo inicial como ativo
    if (modeButtons.length > 0) {
        modeButtons[0].classList.add('active');
    }
    
    // Salvar e carregar as configurações do timer
    function saveTimerSettings() {
        localStorage.setItem('pomodoroSettings', JSON.stringify({
            configs: timerConfigs,
            completedPomodoros
        }));
    }
    
    function loadTimerSettings() {
        const savedSettings = JSON.parse(localStorage.getItem('pomodoroSettings'));
        if (savedSettings) {
            if (savedSettings.configs) {
                Object.assign(timerConfigs, savedSettings.configs);
            }
            if (savedSettings.completedPomodoros) {
                completedPomodoros = savedSettings.completedPomodoros;
            }
        }
    }
    
    // Carregar configurações salvas
    loadTimerSettings();
    
    // Salvar configurações ao fechar a página
    window.addEventListener('beforeunload', saveTimerSettings);
}

// Auto-inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initPomodoroTimer);
</html>