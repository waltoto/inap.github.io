const images = [
    'assets/img/distribution-actor-director-age-1-film.png',
    'assets/img/distribution-actor-director-age-movie.png',
    'assets/img/distribution-actor-director-DoB.png',
    'assets/img/distribution-nbr-film-actor-director.png'
];
let currentIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', () => {
    const imageDisplay = document.getElementById('image-display');
    const actionButton = document.getElementById('action-button'); // Single button

    const startCycling = () => {
        console.log('Starting cycling...');
        intervalId = setInterval(() => {
            currentIndex++;
            if (currentIndex >= images.length) {
                console.log('Reached the last image. Stopping cycling.');
                clearInterval(intervalId);
                intervalId = null; // Reset intervalId
                currentIndex = images.length - 1; // Keep index in bounds
                return;
            }
            console.log(`Switching to image ${currentIndex}`);
            imageDisplay.src = images[currentIndex];
        }, 2000); // 2-second interval
    };

    actionButton.addEventListener('click', () => {
        if (!intervalId) {
            // If cycling is stopped, reset and restart
            console.log('Restarting cycle...');
            currentIndex = 0; // Reset to the first image
            imageDisplay.src = images[currentIndex];
            startCycling();
        } else {
            // If cycling is running, go to the next image immediately
            console.log('Moving to the next image...');
            currentIndex++;
            if (currentIndex < images.length) {
                imageDisplay.src = images[currentIndex];
            } else {
                console.log('Reached the last image. Stopping cycling.');
                clearInterval(intervalId);
                intervalId = null; // Reset intervalId to allow restarting
                currentIndex = images.length - 1; // Keep index in bounds
            }
        }
    });
});
