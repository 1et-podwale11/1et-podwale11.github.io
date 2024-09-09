document.addEventListener('DOMContentLoaded', () => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const applyTheme = (e) => {
        document.body.classList.toggle('dark-mode', e.matches);
    };

    darkModeMediaQuery.addEventListener('change', applyTheme);
    applyTheme(darkModeMediaQuery);
});
