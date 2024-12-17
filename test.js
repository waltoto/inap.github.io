const images = [
    'assets/img/distribution-actor-director-age-movie.png',
    'assets/img/distribution-actor-gender.png',
    'assets/img/distribution-actor-director-age-1-film.png'
];

document.addEventListener('DOMContentLoaded', () => {
    const imageDisplay = document.getElementById('image-display');
    const imageSlider = document.getElementById('image-slider');

    // Ensure the slider's range matches the number of images
    imageSlider.max = images.length - 1;

    // Update image whenever slider value changes
    imageSlider.addEventListener('input', () => {
        const selectedIndex = parseInt(imageSlider.value, 10); // Get slider value as an integer
        imageDisplay.src = images[selectedIndex]; // Update image source
        console.log(`Slider moved to: ${selectedIndex}, showing image: ${images[selectedIndex]}`);
    });
});
