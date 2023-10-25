const images = document.querySelectorAll('.image');
images[0].addEventListener('click', function () {
  const isBlurred = this.getAttribute('data-blurred') === 'true';
  this.setAttribute('data-blurred', !isBlurred);
  if (isBlurred) {
    this.src = 'нерозмите1.jpg'; 
  } else {
    this.src = 'розмите1.jpg'; 
  }
  setTimeout(() => {
    this.src = 'розмите1.jpg'; 
    this.setAttribute('data-blurred', true);
  }, 1200);
})

images[1].addEventListener('click', function () {
  const isBlurred = this.getAttribute('data-blurred') === 'true';
  this.setAttribute('data-blurred', !isBlurred);
  if (isBlurred) {
    this.src = 'нерозмите2.jpg'; 
  } else {
    this.src = 'розмите2.jpg';
  }
  setTimeout(() => {
    this.src = 'розмите2.jpg'; 
    this.setAttribute('data-blurred', true);
  }, 1200);
})

images[2].addEventListener('click', function () {
  const isBlurred = this.getAttribute('data-blurred') === 'true';
  this.setAttribute('data-blurred', !isBlurred);
  if (isBlurred) {
    this.src = 'нерозмите2.jpg'; 
  } else {
    this.src = 'розмите2.jpg';
  }
  setTimeout(() => {
    this.src = 'розмите2.jpg'; 
    this.setAttribute('data-blurred', true);
  }, 1200);
})

images[3].addEventListener('click', function () {
  const isBlurred = this.getAttribute('data-blurred') === 'true';
  this.setAttribute('data-blurred', !isBlurred);
  if (isBlurred) {
    this.src = 'нерозмите2.jpg'; 
  } else {
    this.src = 'розмите2.jpg';
  }
  setTimeout(() => {
    this.src = 'розмите2.jpg'; 
    this.setAttribute('data-blurred', true);
  }, 1200);
})
