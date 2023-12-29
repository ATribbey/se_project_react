import "./WeatherCard.css";

const weatherOptions = [
  {
    url: "../../images/weathercard-banners/day-sunny.svg",
    day: true,
    type: "sunny",
  },
  {
    url: "../../images/weathercard-banners/day-cloudy.svg",
    day: true,
    type: "cloudy",
  },
  {
    url: "../../images/weathercard-banners/day-foggy.svg",
    day: true,
    type: "foggy",
  },
  {
    url: "../../images/weathercard-banners/day-rainy.svg",
    day: true,
    type: "rainy",
  },
  {
    url: "../../images/weathercard-banners/day-snowy.svg",
    day: true,
    type: "snowy",
  },
  {
    url: "../../images/weathercard-banners/day-stormy.svg",
    day: true,
    type: "stormy",
  },
  {
    url: "../../images/weathercard-banners/night-clear.svg",
    day: false,
    type: "clear",
  },
  {
    url: "../../images/weathercard-banners/night-cloudy.svg",
    day: false,
    type: "cloudy",
  },
  {
    url: "../../images/weathercard-banners/night-foggy.svg",
    day: false,
    type: "foggy",
  },
  {
    url: "../../images/weathercard-banners/night-rainy.svg",
    day: false,
    type: "rainy",
  },
  {
    url: "../../images/weathercard-banners/night-snowy.svg",
    day: false,
    type: "snowy",
  },
  {
    url: "../../images/weathercard-banners/night-stormy.svg",
    day: false,
    type: "stormy",
  },
];

function WeatherCard({ day, type }) {
  const bannerSrc = weatherOptions.filter((image) => {
    return image.day === day && image.type === type;
  });

  const bannerSrcUrl = bannerSrc[0].url || "";

  return (
    <section className="weather">
      <p className="weather__temp">75°F</p>
      <img
        src={bannerSrcUrl}
        alt="Current Weather Banner"
        className="weather__banner"
      />
    </section>
  );
}

export default WeatherCard;
