const images = [
    'assets/img/distribution-actor-director-age-1-film.png',
    'assets/img/distribution-actor-director-age-movie.png',
    'assets/img/distribution-actor-gender.png',
];

document.addEventListener('DOMContentLoaded', () => {
    const imageDisplay = document.getElementById('image-display');
    const imageList = document.getElementById('image-list');

    // Add event listener to each list item
    imageList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedIndex = parseInt(event.target.getAttribute('data-index'), 10); // Get the index from the clicked list item
            imageDisplay.src = images[selectedIndex]; // Update image display
            console.log(`Selected index: ${selectedIndex}, Image: ${images[selectedIndex]}`);
        }
    });
});
