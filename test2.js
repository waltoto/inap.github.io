const slider = document.querySelector('.slider ul');

// Replace with the image names in your folder
const images = [
    'assets/img/distribution-actor-director-age-1-film.png',
    'assets/img/distribution-actor-director-age-movie.png',
    'assets/img/distribution-actor-director-DoB.png',
    'assets/img/distribution-nbr-film-actor-director.png'
];

// Dynamically create list items for images
images.forEach((image, index) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = `images/${image}`;
  img.alt = `Slide ${index + 1}`;
  if (index === 0) {
    li.classList.add('active'); // Set the first slide as active
  }
  li.appendChild(img);
  slider.appendChild(li);
});

// Store the total number of images
const slides = slider.querySelectorAll('li');
const slideCount = slides.length;
let activeSlide = 0;

// Change the images dynamically every 5 seconds
setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
}, 2000);
