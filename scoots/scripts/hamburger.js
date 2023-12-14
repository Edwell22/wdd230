// Create variable for hamburger menu operation
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// create listener to toggle open and closed
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
