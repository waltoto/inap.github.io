const images = [
    'assets/img/distribution-actor-director-age-1-film.png',
    'assets/img/distribution-actor-director-age-movie.png',
    'assets/img/distribution-actor-gender.png',
];

document.addEventListener('DOMContentLoaded', () => {
    const imageDisplay = document.getElementById('image-display');
    const imageSlider = document.getElementById('image-slider');

    // Update image whenever slider value changes
    imageSlider.addEventListener('input', () => {
        const selectedIndex = parseInt(imageSlider.value, 10);
        imageDisplay.src = images[selectedIndex];
    });
});
