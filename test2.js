const images = [
    'assets/img/distribution-actor-director-age-1-film.png',
    'assets/img/distribution-actor-director-age-movie.png',
    'assets/img/distribution-actor-gender.png',
];

document.addEventListener('DOMContentLoaded', () => {
    const imageDisplay = document.getElementById('image-display');
    const imageSelector = document.getElementById('image-selector');

    // Update image when dropdown value changes
    imageSelector.addEventListener('change', () => {
        const selectedIndex = parseInt(imageSelector.value, 10); // Get selected value as index
        imageDisplay.src = images[selectedIndex]; // Update the image source
        console.log(`Selected index: ${selectedIndex}, Image: ${images[selectedIndex]}`);
    });
});
