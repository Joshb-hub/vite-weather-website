const API_KEY = import.meta.env.VITE_API_KEY; // Make sure this is in quotes

document.getElementById('getWeatherBtn').addEventListener('click', () => {
  let city = document.getElementById('cityInput').value.trim();
  if (!city.includes(',')) city += ',INDIA';
  if (city) getWeather(city);
});

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log("Fetching URL:", url); // ✅ DEBUG LINE
    const response = await fetch(url);

    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    console.log("API response:", data); // ✅ DEBUG LINE

    const temp = data.main.temp;
    const condition = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById('temperature').textContent = `${temp}°C`;
    document.getElementById('condition').textContent = condition;
    document.getElementById('weatherIcon').src = iconUrl;
    document.getElementById('weatherDisplay').classList.remove('hidden');

  } catch (err) {
    console.error(err); // ✅ Better than alert
    alert(err.message);
  }
}
