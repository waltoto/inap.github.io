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
                // Increment the index
                currentIndex++;

                // Stop cycling if we've reached the last image
                if (currentIndex >= images.length) {
                    clearInterval(intervalId);
                    intervalId = null; // Reset intervalId to allow restarting
                    currentIndex = images.length - 1; // Ensure index stays valid
                    return;
                }

                // Update the displayed image
                imageDisplay.src = images[currentIndex];
            }, 2000); // 2-second interval
        }

        // Immediately show the next image on button click (manual override)
        if (currentIndex < images.length - 1) {
            currentIndex++;
            imageDisplay.src = images[currentIndex];
        } else {
            // Stop cycling if it's the last image
            clearInterval(intervalId);
            intervalId = null; // Reset intervalId to allow restarting
        }
    });
});
