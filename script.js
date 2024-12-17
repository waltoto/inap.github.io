const images = [
    'assets/img/distribution-actor-director-age-1-film.png',
    'assets/img/distribution-actor-director-age-movie.png',
    'assets/img/distribution-actor-gender.png',
];
let currentIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', () => {
    const imageDisplay = document.getElementById('image-display');
    const nextImageButton = document.getElementById('next-image-button');

    nextImageButton.addEventListener('click', () => {
        // Start automatic cycling if not already started
        if (!intervalId) {
            intervalId = setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                imageDisplay.src = images[currentIndex];
            }, 2000); // 2 seconds interval
        }

        // Also immediately switch the image on button click
        currentIndex = (currentIndex + 1) % images.length;
        imageDisplay.src = images[currentIndex];
    });
});
