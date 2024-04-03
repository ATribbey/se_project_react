import { checkResponse } from "./api";

const apiKey = "14d44ec4d5240a30ba4956199a204a55";

export function getForecastWeather({ lat, long }) {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    return checkResponse(res);
  });

  return weatherApi;
}

export function getWeatherCondition(data) {
  const weatherCondition = data.weather[0].main;
  return weatherCondition.toLowerCase();
}

export function getCurrentTime(data) {
  const currentTime = data.dt;
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;

  if (currentTime > sunrise && currentTime < sunset) {
    return true;
  } else if (currentTime <= sunrise || currentTime >= sunset) {
    return false;
  }
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
