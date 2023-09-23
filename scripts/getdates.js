const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);

const date = new Date();
const year = date.getFullYear();
const currentYear = `${year}`;
document.querySelector("#year").textContent = currentYear;


function displayWeather() {
  const apiKey = "YOUR_API_KEY"; 
  const city = "Harare";
  const country = "ZW";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weatherDescription = data.weather[0].description;
      const weatherElement = document.getElementById("weather");
      weatherElement.textContent = `Weather: ${weatherDescription}`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}

// Call the function to display the current weather
displayWeather();