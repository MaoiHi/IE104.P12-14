let currentIndex = 0;
const slides = document.querySelectorAll('.body-content__image-slide');
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 5000);