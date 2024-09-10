document.addEventListener('DOMContentLoaded', () => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = (e) => {
        console.log('Zmiana trybu:', e.matches ? 'dark' : 'light'); // Debugowanie
        document.body.classList.toggle('dark-mode', e.matches);
    };

    darkModeMediaQuery.addEventListener('change', applyTheme);
    applyTheme(darkModeMediaQuery);
});
