const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function showImage(index) {
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }

  const offset = -currentIndex * images[0].width;
  carousel.style.transform = `translateX(${offset}px)`;
}

function nextImage() {
  currentIndex++;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex--;
  showImage(currentIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

showImage(currentIndex);