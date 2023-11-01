// const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
// document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);

const date = new Date();

let year = date.getFullYear();

let currentYear = `${year}`;

document.querySelector("#year").textContent = currentYear;

document.getElementById("currentdate").textContent = document.lastModified;

// Hamburger Javascript

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

function initMap() {
	const location = { lat: -25.363, lng: 131.044 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: location
	});
}



// dark mode and light mode

const modeButton = document.querySelector("#mode");
const main = document.getElementById("main");
const bdy = document.getElementById("bdys")
// const secbdy = document.getElementById("secbdy")
const kings = document.getElementById("king")

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		bdy.style.background = "#000";
		bdy.style.color = "#fff";
		secbdy.style.background = "#000";
		secbdy.style.color = "#fff";
	   
		kings.style.background = "0000";
		kings.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		bdy.style.background = "#000";
		bdy.style.color = "#fff";
		kings.style.background = "0000";
		kings.style.color = "#fff";
		modeButton.textContent = "🌑";
	}
});
