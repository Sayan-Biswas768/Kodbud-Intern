const apiKey = "09bd734a31dbec5d6bbd5959467e6cf1"; // use your working key here

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "❗ Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found or Invalid API Key");
      return response.json();
    })
    .then(data => {
      resultDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ ${data.main.temp}°C</p>
        <p>🌤️ ${data.weather[0].description}</p>
        <p>💨 ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `❌ ${error.message}`;
    });
}