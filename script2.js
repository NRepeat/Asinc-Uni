// Отримайте всі зображення
const image = document.querySelectorAll('.image');


image[0].addEventListener('mouseenter', function () {
  this.src = 'нерозмите1.jpg'; // Замініть на URL нерозмитого зображення
});
image[0].addEventListener('mouseleave', function () {
  this.src = 'розмите1.jpg'; // Замініть на URL розмитого зображення
});
image[1].addEventListener('mouseenter', function () {
  this.src = 'нерозмите2.jpg'; // Замініть на URL нерозмитого зображення
});
image[1].addEventListener('mouseleave', function () {
  this.src = 'розмите2.jpg'; // Замініть на URL розмитого зображення
});