const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = slides[0].clientWidth; // Largura de um slide
let currentIndex = 0;

function moveToSlide(index) {
  carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  moveToSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveToSlide(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Opcional: Adicionar funcionalidade de "passagem" automática (slideshow)
setInterval(nextSlide, 3000); // Muda de slide a cada 3 segundos