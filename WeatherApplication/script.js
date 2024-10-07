// import env from 'dotenv';
// env.config();

// function getWeather() {
//     const apiKey = `6ed0c82028062a8c46d28edfc75d6d2a`;
//     const city = document.getElementById('city').value;

//     if (!city) {
//         alert('Please enter a city');
//         return;
//     }

//     const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//     const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

//     fetch(currentWeatherUrl)
//         .then(response => response.json())
//         .then(data => {
//             displayWeather(data);
//         })
//         .catch(error => {
//             console.error('Error fetching current weather data:', error);
//             alert('Error fetching current weather data. Please try again.');
//         });

//     fetch(forecastUrl)
//         .then(response => response.json())
//         .then(data => {
//             displayHourlyForecast(data.list);
//         })
//         .catch(error => {
//             console.error('Error fetching hourly forecast data:', error);
//             alert('Error fetching hourly forecast data. Please try again.');
//         });
// }

async function getWeather() {
    const apiKey = `6ed0c82028062a8c46d28edfc75d6d2a`;
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    try {
        const weatherResponse = await fetch(currentWeatherUrl);
        if (!weatherResponse.ok) {
            throw new Error('Error fetching current weather data');
        }
        const weatherData = await weatherResponse.json();
        displayWeather(weatherData);

        // Fetch hourly forecast data
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
            throw new Error('Error fetching hourly forecast data');
        }
        const forecastData = await forecastResponse.json();
        displayHourlyForecast(forecastData.list);

    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}


function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    console.log(data);

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name; // 
        const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `
            <p>${temperature}°C</p>
        `;

        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    const next24Hours = hourlyData.slice(0, 8); // (3 Hour Intervals) 24 / 8 = 3

    next24Hours.forEach(item => {
        // console.log(item);

        const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;

        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}