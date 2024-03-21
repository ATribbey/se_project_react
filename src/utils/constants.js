import daySunny from "../images/weathercard-banners/day-sunny.svg";
import dayCloudy from "../images/weathercard-banners/day-cloudy.svg";
import dayFoggy from "../images/weathercard-banners/day-foggy.svg";
import dayRainy from "../images/weathercard-banners/day-rainy.svg";
import daySnowy from "../images/weathercard-banners/day-snowy.svg";
import dayStormy from "../images/weathercard-banners/day-stormy.svg";
import nightClear from "../images/weathercard-banners/night-clear.svg";
import nightCloudy from "../images/weathercard-banners/night-cloudy.svg";
import nightFoggy from "../images/weathercard-banners/night-foggy.svg";
import nightRainy from "../images/weathercard-banners/night-rainy.svg";
import nightSnowy from "../images/weathercard-banners/night-snowy.svg";
import nightStormy from "../images/weathercard-banners/night-stormy.svg";

export const weatherOptions = [
  { url: daySunny, day: true, type: "clear" },
  { url: dayCloudy, day: true, type: "clouds" },
  { url: dayFoggy, day: true, type: "fog" },
  { url: dayFoggy, day: true, type: "mist" },
  { url: dayFoggy, day: true, type: "smoke" },
  { url: dayFoggy, day: true, type: "haze" },
  { url: dayFoggy, day: true, type: "dust" },
  { url: dayFoggy, day: true, type: "sand" },
  { url: dayFoggy, day: true, type: "ash" },
  { url: dayStormy, day: true, type: "squall" },
  { url: dayStormy, day: true, type: "tornado" },
  { url: dayRainy, day: true, type: "rain" },
  { url: dayRainy, day: true, type: "drizzle" },
  { url: daySnowy, day: true, type: "snow" },
  { url: dayStormy, day: true, type: "thunderstorm" },
  { url: nightClear, day: false, type: "clear" },
  { url: nightCloudy, day: false, type: "clouds" },
  { url: nightFoggy, day: false, type: "fog" },
  { url: nightFoggy, day: false, type: "mist" },
  { url: nightFoggy, day: false, type: "smoke" },
  { url: nightFoggy, day: false, type: "haze" },
  { url: nightFoggy, day: false, type: "dust" },
  { url: nightFoggy, day: false, type: "sand" },
  { url: nightFoggy, day: false, type: "ash" },
  { url: nightStormy, day: false, type: "squall" },
  { url: nightStormy, day: false, type: "tornado" },
  { url: nightRainy, day: false, type: "rain" },
  { url: nightRainy, day: false, type: "drizzle" },
  { url: nightSnowy, day: false, type: "snow" },
  { url: nightStormy, day: false, type: "thunderstorm" },
];
