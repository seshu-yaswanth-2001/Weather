const apiKey = "1cc846cf366a087cf7c0897c498fa4b4";
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function search(city) {
  const response = await fetch(api + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "../images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "../images/clear.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "../images/drizzle.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "../images/rain.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "../images/snow.png";
    } else {
      weatherIcon.src = "../images/mist.png";
    }
  }
}

searchBtn.addEventListener("click", () => {
  search(searchBar.value);
});
