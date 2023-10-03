// Fungsi untuk mengambil dan menampilkan data cuaca saat ini
function fetchCurrentWeather() {
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const currentWeather = data.current_weather;
        document.getElementById("current-temperature").textContent = currentWeather.temperature;
        document.getElementById("current-weather-code").textContent = currentWeather.weathercode;
        document.getElementById("current-wind-speed").textContent = currentWeather.windspeed;
        document.getElementById("current-wind-direction").textContent = currentWeather.winddirection;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  

  // Memanggil fungsi untuk mengambil data cuaca
  fetchCurrentWeather();
  