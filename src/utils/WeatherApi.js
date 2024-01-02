// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
// 14d44ec4d5240a30ba4956199a204a55

const longitude = 10.9;
const latitude = 44.34;
const apiKey = "14d44ec4d5240a30ba4956199a204a55";

export function getForecastWeather() {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Error: ${res.status}`);
    }
  });

  return weatherApi;
}

export function parseWeatherTemp(data) {
  const temp = data.main.temp;
  return Math.ceil(temp);
}

export function parseWeatherLocation(data) {
  const locale = data.name;
  return locale;
}
