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

//last Visits

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

// Display Current Weather Data

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
   "https://api.openweathermap.org/data/2.5/weather?lat=-12.09&lon=-77.06&appid=d95dddf55be4cf8701c5a27d5d84f3cc&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.textContent = `${data.main.temp} °F`;
  console.log(data.weather[0].icon)
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  captionDesc.textContent = data.weather[0].description;
}

apiFetch();

