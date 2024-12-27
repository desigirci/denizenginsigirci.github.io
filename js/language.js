const translations = {
    en: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        contact: 'Contact'
    },
    tr: {
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        experience: 'Deneyim',
        education: 'Eğitim',
        skills: 'Yetenekler',
        contact: 'İletişim'
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);
});