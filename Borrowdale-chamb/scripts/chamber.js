// const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
// document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);

const date = new Date();

let year = date.getFullYear();

let currentYear = `${year}`;

document.querySelector("#year").textContent = currentYear;

document.getElementById("currentdate").textContent = document.lastModified;

// Hamburger Javascript

const hamButton = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
	navbar.classList.toggle('open');
	hamButton.classList.toggle('open');
});


