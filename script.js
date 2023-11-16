function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    
    const apiKey = '9808336f4a0548398a374404231611';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherDetails = document.querySelector('.weather-details');

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    
    weatherDetails.style.display = 'block';
}
