const urlCarmen = `https://api.openweathermap.org/data/2.5/weather?lat=20.62196&lon=-87.07643&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlPuerta = `https://api.openweathermap.org/data/2.5/weather?lat=20.47641&lon=-86.97412&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlForecastC = `https://api.openweathermap.org/data/2.5/forecast?lat=20.62196&lon=-87.07643&cnt=13&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;
const urlForecastP = `https://api.openweathermap.org/data/2.5/forecast?lat=20.47641&lon=-86.97412&cnt=13&appid=2e0af6a26f96c6c75cc96bb0b60984e6&units=imperial`;

// fetch current weather API for Playa Del Carmen
async function apiCarmenFetch() {
    try {
        const response = await fetch(urlCarmen);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCarmenCurrent(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for current Playa Del Carmen
apiCarmenFetch();

function displayCarmenCurrent(data) {
    const delCarmenCurr = document.getElementById('del-carmen');

    const carmenHumidity = document.createElement('h5');
    carmenHumidity.setAttribute('id', 'carmen-humid');
    carmenHumidity.setAttribute('class', 'description');
    carmenHumidity.textContent = `Humidity: ${data.main.humidity.toFixed()}%`;

    const currCarmenTemp = document.createElement('h5');
    currCarmenTemp.setAttribute('id', 'carmen-temp');
    currCarmenTemp.setAttribute('class', 'temp-display');
    currCarmenTemp.textContent = `${data.main.temp.toFixed(0)}°F`;

    const carmenIconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    let carmenIcon = document.createElement('img');
    carmenIcon.setAttribute('src', carmenIconsrc);
    carmenIcon.setAttribute('id', 'carmen-icon');
    carmenIcon.setAttribute('alt', 'Playa Del Carmen Weather Icon');
    carmenIcon.setAttribute('width', "50");
    carmenIcon.setAttribute('height', "50");

    let carmenDesc = document.createElement('h5');
    carmenDesc.textContent = data.weather[0].description;
    carmenDesc.setAttribute('id', 'carmen-desc');
    carmenDesc.setAttribute('class', 'description');

    delCarmenCurr.append(carmenHumidity);
    delCarmenCurr.append(currCarmenTemp);
    delCarmenCurr.append(carmenIcon);
    delCarmenCurr.append(carmenDesc);
}

// fetch current weather API for Terminal Puerta Maya
async function apiPuertaFetch() {
    try {
        const response = await fetch(urlPuerta);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayPuertaCurrent(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for current Terminal Puerta Maya
apiPuertaFetch();

function displayPuertaCurrent(data) {
    const puertaCurr = document.getElementById('puerta-maya');

    const puertaHumidity = document.createElement('h5');
    puertaHumidity.setAttribute('id', 'puerta-humid');
    puertaHumidity.setAttribute('class', 'description');
    puertaHumidity.textContent = `Humidity: ${data.main.humidity.toFixed()}%`;

    const currPuertaTemp = document.createElement('h5');
    currPuertaTemp.setAttribute('id', 'puerta-temp');
    currPuertaTemp.setAttribute('class', 'temp-display');
    currPuertaTemp.textContent = `${data.main.temp.toFixed(0)}°F`;

    const puertaIconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    let puertaIcon = document.createElement('img');
    puertaIcon.setAttribute('src', puertaIconsrc);
    puertaIcon.setAttribute('id', 'puerta-icon');
    puertaIcon.setAttribute('alt', 'Terminal Puerta Maya Weather Icon');
    puertaIcon.setAttribute('width', "50");
    puertaIcon.setAttribute('height', "50");

    let puertaDesc = document.createElement('h5');
    puertaDesc.textContent = data.weather[0].description;
    puertaDesc.setAttribute('id', 'puerta-desc');
    puertaDesc.setAttribute('class', 'description');

    puertaCurr.append(puertaHumidity);
    puertaCurr.append(currPuertaTemp);
    puertaCurr.append(puertaIcon);
    puertaCurr.append(puertaDesc);
}


// fetch forecast weather API for Playa Del Carmen
async function apiCarmenForecastFetch() {
    try {
        const response = await fetch(urlForecastC);
        if (response.ok) {
            const carmenData = await response.json();
            console.log(carmenData);
            displayCarmenForecast(carmenData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


// call fetch function for Playa Del Carmen
apiCarmenForecastFetch();

function displayCarmenForecast(carmenData) {
    const forcastCarmenList = carmenData.list;

    const delCarmenForecast = document.getElementById('del-carmen-forecast');

    const carmenTempsByDay = {};

    const currentCarmenDayIndex = new Date().getDay();

    forcastCarmenList.forEach((forecastItem) => {
        // Time and date info for Forecast data
        const timestamp = forecastItem.dt;
        const date = new Date(timestamp * 1000); // Convert timestamp to Date object
        const dayIndex = date.getDay();
        if (dayIndex === currentCarmenDayIndex) {
            return; // if today, skip first day
        }

        const day = date.toLocaleDateString('en-Us', { weekday: 'long' }); //Get the day of the week

        if (!carmenTempsByDay[day]) {
            carmenTempsByDay[day] = {
                minTemp: forecastItem.main.temp_min,
                maxTemp: forecastItem.main.temp_max,
                icon: forecastItem.weather[0].icon,
                description: forecastItem.weather[0].description,
            };
        } else {
            carmenTempsByDay[day].minTemp = Math.min(carmenTempsByDay[day].minTemp, forecastItem.main.temp_min);
            carmenTempsByDay[day].maxTemp = Math.max(carmenTempsByDay[day].maxTemp, forecastItem.main.temp_max);
        }

    });

    let dayCount = 0;
    for (const day in carmenTempsByDay) {
        if (dayCount >= 1) {
            break;
        }

        let forecastInfo = carmenTempsByDay[day];

        const iconsrc = `https://openweathermap.org/img/wn/${forecastInfo.icon}.png`;

        let temps = document.createElement('h5');
        temps.setAttribute('id', 'carmen-forecast-temp');
        temps.setAttribute('class', 'temp-display');
        temps.textContent = `${forecastInfo.maxTemp.toFixed(0)}°F | ${forecastInfo.minTemp.toFixed(0)}°F`;

        let carmenForecastIcon = document.createElement('img');
        carmenForecastIcon.setAttribute('src', iconsrc);
        carmenForecastIcon.setAttribute('id', 'tomorrow-carmen-forecast');
        carmenForecastIcon.setAttribute('alt', `${day} forecast info`);
        carmenForecastIcon.setAttribute('width', "50");
        carmenForecastIcon.setAttribute('height', "50");

        let carmenForecastDesc = document.createElement('h5');
        carmenForecastDesc.setAttribute('id', 'carmen-forecast-desc');
        carmenForecastDesc.setAttribute('class', 'description');

        carmenForecastDesc.textContent = forecastInfo.description;

        delCarmenForecast.append(temps);
        delCarmenForecast.append(carmenForecastIcon);
        delCarmenForecast.append(carmenForecastDesc);

        dayCount++;
    }

}

// fetch current weather API for Terminal Puerta Maya
async function apiPuertaForecast() {
    try {
        const response = await fetch(urlForecastP);
        if (response.ok) {
            const puertaData = await response.json();
            console.log(puertaData);
            displayPuertaForecast(puertaData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// call fetch function for Terminal Puerta Maya
apiPuertaForecast();

function displayPuertaForecast(puertaData) {
    const puertaForecast = document.getElementById('puerta-maya-forecast');

    const forcastPuertaList = puertaData.list;

    const puertaTempsByDay = {};

    const currentPuertaDayIndex = new Date().getDay();

    forcastPuertaList.forEach((forecastItem) => {
        // Time and date info for Forecast data
        const timestamp = forecastItem.dt;
        const date = new Date(timestamp * 1000); // Convert timestamp to Date object
        const dayIndex = date.getDay();
        if (dayIndex === currentPuertaDayIndex) {
            return; // if today, skip first day
        }

        const day = date.toLocaleDateString('en-Us', { weekday: 'long' }); //Get the day of the week

        if (!puertaTempsByDay[day]) {
            puertaTempsByDay[day] = {
                minTemp: forecastItem.main.temp_min,
                maxTemp: forecastItem.main.temp_max,
                icon: forecastItem.weather[0].icon,
                description: forecastItem.weather[0].description,
            };
        } else {
            puertaTempsByDay[day].minTemp = Math.min(puertaTempsByDay[day].minTemp, forecastItem.main.temp_min);
            puertaTempsByDay[day].maxTemp = Math.max(puertaTempsByDay[day].maxTemp, forecastItem.main.temp_max);
        }

    });

    let dayCount = 0;
    for (const day in puertaTempsByDay) {
        if (dayCount >= 1) {
            break;
        }

        let forecastInfo = puertaTempsByDay[day];

        const iconsrc = `https://openweathermap.org/img/wn/${forecastInfo.icon}.png`;

        let temps = document.createElement('h5');
        temps.setAttribute('id', 'puerta-forecast-temp');
        temps.setAttribute('class', 'temp-display');
        temps.textContent = `${forecastInfo.maxTemp.toFixed(0)}°F | ${forecastInfo.minTemp.toFixed(0)}°F`;

        let puertaForecastIcon = document.createElement('img');
        puertaForecastIcon.setAttribute('src', iconsrc);
        puertaForecastIcon.setAttribute('id', 'tomorrow-puerta-forecast');
        puertaForecastIcon.setAttribute('alt', `${day} forecast info`);
        puertaForecastIcon.setAttribute('width', "50");
        puertaForecastIcon.setAttribute('height', "50");

        let puertaForecastDesc = document.createElement('h5');
        puertaForecastDesc.setAttribute('id', 'puerta-forecast-desc');
        puertaForecastDesc.setAttribute('class', 'description');

        puertaForecastDesc.textContent = forecastInfo.description;

        puertaForecast.append(temps);
        puertaForecast.append(puertaForecastIcon);
        puertaForecast.append(puertaForecastDesc);

        dayCount++;
    }

}