import "./WeatherCard.css";
import daySunny from "../../images/weathercard-banners/day-sunny.svg";

function WeatherCard() {
  return (
    <section className="weather">
      <p className="weather__temp">75°F</p>
      <img
        src={daySunny}
        alt="Current Weather Banner"
        className="weather__banner"
      />
    </section>
  );
}

export default WeatherCard;
