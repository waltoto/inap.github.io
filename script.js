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
        // Start cycling if not already started
        if (!intervalId) {
            intervalId = setInterval(() => {
                // Increment index
                currentIndex++;
                
                // Stop cycling if we've reached the last image
                if (currentIndex >= images.length) {
                    clearInterval(intervalId);
                    intervalId = null; // Reset intervalId to allow restarting if needed
                    return;
                }
                
                // Update the image
                imageDisplay.src = images[currentIndex];
            }, 2000); // 2-second interval
        }

        // Immediately show the next image on button click
        currentIndex++;
        if (currentIndex < images.length) {
            imageDisplay.src = images[currentIndex];
        } else {
            // If last image is reached, stop cycling
            clearInterval(intervalId);
            intervalId = null; // Reset intervalId to allow restarting if needed
            currentIndex = images.length - 1; // Ensure we don't go past the last image
        }
    });
});
