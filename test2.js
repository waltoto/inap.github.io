const images = [
    'assets/img/distribution-actor-director-age-1-film.png',
    'assets/img/distribution-actor-director-age-movie.png',
    'assets/img/distribution-actor-gender.png',
];

document.addEventListener('DOMContentLoaded', () => {
    const imageDisplay = document.getElementById('image-display');
    const imageSelector = document.getElementById('image-selector');

    // Update image based on the selected option
    imageSelector.addEventListener('change', () => {
        const selectedIndex = parseInt(imageSelector.value, 10); // Get the selected option value
        imageDisplay.src = images[selectedIndex]; // Update image display
        console.log(`Selected index: ${selectedIndex}, Image: ${images[selectedIndex]}`);
    });
});
