const images = [
    'assets/img/image1.png',
    'assets/img/image2.png',
    'assets/img/image3.png',
];
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const imageDisplay = document.getElementById('image-display');
    const nextImageButton = document.getElementById('next-image-button');

    nextImageButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        imageDisplay.src = images[currentIndex];
    });
});
