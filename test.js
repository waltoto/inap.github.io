const images = [
    'assets/img/distribution-actor-director-age-1-film.png',
    'assets/img/distribution-actor-director-age-movie.png',
    'assets/img/distribution-actor-gender.png',
];

document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded!'); // Debugging: Confirm script runs

    const imageDisplay = document.getElementById('image-display');
    const imageSlider = document.getElementById('image-slider');

    // Debugging: Confirm elements are found
    console.log('Image display element:', imageDisplay);
    console.log('Image slider element:', imageSlider);

    // Ensure the slider's range matches the number of images
    imageSlider.max = images.length - 1;
    console.log(`Slider max set to: ${imageSlider.max}`);

    // Update image whenever slider value changes
    imageSlider.addEventListener('input', () => {
        const selectedIndex = parseInt(imageSlider.value, 10); // Get slider value as an integer
        console.log(`Slider moved to index: ${selectedIndex}`);

        if (images[selectedIndex]) {
            imageDisplay.src = images[selectedIndex]; // Update image source
            console.log(`Image updated to: ${images[selectedIndex]}`);
        } else {
            console.error(`No image found for index: ${selectedIndex}`);
        }
    });
});
