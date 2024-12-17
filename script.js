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

    const startCycling = () => {
        console.log('Starting cycling...');
        if (!intervalId) {
            intervalId = setInterval(() => {
                currentIndex++;
                if (currentIndex >= images.length) {
                    console.log('Reached the last image. Stopping cycling.');
                    clearInterval(intervalId);
                    intervalId = null;
                    currentIndex = images.length - 1;
                    return;
                }
                console.log(`Switching to image ${currentIndex}`);
                imageDisplay.src = images[currentIndex];
            }, 2000);
        }
    };

    nextImageButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            console.log(`Next button clicked. Displaying image ${currentIndex}`);
            imageDisplay.src = images[currentIndex];
        } else {
            console.log('Reached the last image. Stopping cycling.');
            clearInterval(intervalId);
            intervalId = null;
        }
        startCycling();
    });

    restartButton.addEventListener('click', () => {
        console.log('Restart button clicked.');
        clearInterval(intervalId);
        intervalId = null; // Clear any active intervals
        currentIndex = 0; // Reset to the first image
        console.log('Reset to the first image.');
        imageDisplay.src = images[currentIndex]; // Show the first image
        startCycling(); // Start cycling from the beginning
    });
});
