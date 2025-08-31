const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherData = document.getElementById('weather-data');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const weatherChart = document.getElementById('weather-chart');

searchBtn.addEventListener('click', getWeatherData);

function getWeatherData() {
    const city = cityInput.value.trim();
    const apiKey = '7364a96667b81b19f1e8d3cb11b2c7f7';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = data.name;temperature.textContent = `Temperature: ${data.main.temp}°C`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;

            // Create chart
            const ctx = document.createElement('canvas').getContext('2d');
            weatherChart.innerHTML = '';
            weatherChart.appendChild(ctx.canvas);
            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Temperature', 'Humidity'],
                    datasets: [{
                        label: 'Weather Data',
                        data: [data.main.temp, data.main.humidity],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true      }
                        }
                    }
                });
            })
            .catch(error => console.error(error));
    }
    
const apiKey = '7364a96667b81b19f1e8d3cb11b2c7f7';

fetch(`https://api.example.com/data?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data));


    