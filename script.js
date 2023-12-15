function changeLanguage(lang) {
    const translations = {
        en: { heading: 'Welcome!', description: 'This is a simple internationalized and styled application.' },
        es: { heading: '¡Bienvenido!', description: 'Esta es una aplicación simple internacionalizada y con estilo.' },
        rus: { heading: 'Добро пожаловать !', description: 'Это простое интернационализированное и стилизованное приложение' }
    };

    document.getElementById('heading').textContent = translations[lang].heading;
    document.getElementById('description').textContent = translations[lang].description;
}
