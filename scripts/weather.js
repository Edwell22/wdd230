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