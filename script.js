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
    const restartButton = document.getElementById('restart-button');

    // Function to handle cycling logic
    const startCycling = () => {
        // Start cycling only if not already started
        if (!intervalId) {
            intervalId = setInterval(() => {
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
    };

    // Event listener for "Next Image" button
    nextImageButton.addEventListener('click', () => {
        // Immediately show the next image on button click
        if (currentIndex < images.length - 1) {
            currentIndex++;
            imageDisplay.src = images[currentIndex];
        } else {
            // Stop cycling if it's the last image
            clearInterval(intervalId);
            intervalId = null; // Reset intervalId to allow restarting
        }

        // Start automatic cycling
        startCycling();
    });

    // Event listener for "Restart" button
    restartButton.addEventListener('click', () => {
        // Reset the index and clear any ongoing intervals
        clearInterval(intervalId);
        intervalId = null; // Reset intervalId

        currentIndex = 0; // Restart from the first image
        imageDisplay.src = images[currentIndex]; // Update displayed image

        // Start automatic cycling
        startCycling();
    });
});
