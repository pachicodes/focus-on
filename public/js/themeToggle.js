function getCurrentTheme() {
    return localStorage.getItem('theme') || 'default';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const lightIcon = document.querySelector('.light-icon');
    const darkIcon = document.querySelector('.dark-icon');
    
    if (theme === 'dark') {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    } else {
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    }
}

function toggleTheme() {
    const themes = ['default', 'light', 'dark'];
    const currentTheme = getCurrentTheme();
    const nextThemeIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    setTheme(themes[nextThemeIndex]);
}

// Inicializar tema
document.addEventListener('DOMContentLoaded', () => {
    setTheme(getCurrentTheme());
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});
