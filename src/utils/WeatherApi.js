import { checkResponse } from "./api";

const latitude = 26.2517;
const longitude = -80.1789;
const apiKey = "14d44ec4d5240a30ba4956199a204a55";

export function getForecastWeather() {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    return checkResponse(res);
  });

  return weatherApi;
}

export function parseWeatherTempF(data) {
  const temp = data.main.temp;
  return Math.round(temp);
}

export function parseWeatherTempC(data) {
  const temp = ((data.main.temp - 32) * 5) / 9;
  return Math.round(temp);
}

export function parseWeatherLocation(data) {
  const locale = data.name;
  return locale;
}
