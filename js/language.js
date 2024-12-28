const translations = {
    en: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        contact: 'Contact',
        heroTitle: 'Requirements Coordinator',
        experienceTitle: 'Experience',
        educationTitle: 'Education',
        skillsTitle: 'Skills'
    },
    tr: {
        home: 'Ana Sayfa',
        about: 'Hakkımda',
        experience: 'Deneyim',
        education: 'Eğitim',
        skills: 'Yetenekler',
        contact: 'İletişim',
        heroTitle: 'Gereksinim Koordinatörü',
        experienceTitle: 'Deneyim',
        educationTitle: 'Eğitim',
        skillsTitle: 'Yetenekler'
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update section titles
    document.querySelectorAll('.section-title').forEach(title => {
        const key = title.parentElement.parentElement.id + 'Title';
        if (translations[lang][key]) {
            title.textContent = translations[lang][key];
        }
    });

    // Update hero title
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        heroTitle.textContent = translations[lang].heroTitle;
    }

    localStorage.setItem('language', lang);
}

// Set default language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);
});
