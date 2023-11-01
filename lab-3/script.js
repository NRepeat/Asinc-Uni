const heading = document.getElementById('heading');
const greeting = document.getElementById('greeting');
const languageSelect = document.getElementById('languageSelect');

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

languageSelect.addEventListener('change', function () {
  const selectedLanguage = languageSelect.value;
  heading.textContent = languages[selectedLanguage].heading;
  greeting.textContent = languages[selectedLanguage].greeting;
});

document.addEventListener('DOMContentLoaded', function () {
  const selectedLanguage = languageSelect.value;
  heading.textContent = languages[selectedLanguage].heading;
  greeting.textContent = languages[selectedLanguage].greeting;
});
