// Отримайте елементи DOM
const heading = document.getElementById('heading');
const greeting = document.getElementById('greeting');
const languageSelect = document.getElementById('languageSelect');

// Об'єкт, що містить тексти для різних мов
const languages = {
    eng: {
        heading: 'Welcome to the Multi-Language Page',
        greeting: 'Hello, how are you?',
    },
    ua: {
        heading: 'Ласкаво просимо на багатомовну сторінку',
        greeting: 'Привіт, як справи?',
    },
};

// Обробник події при зміні вибраної мови
languageSelect.addEventListener('change', function () {
    const selectedLanguage = languageSelect.value;
    heading.textContent = languages[selectedLanguage].heading;
    greeting.textContent = languages[selectedLanguage].greeting;
});

// Ініціалізація текстів на сторінці відповідно до вибраної мови при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = languageSelect.value;
    heading.textContent = languages[selectedLanguage].heading;
    greeting.textContent = languages[selectedLanguage].greeting;
});
