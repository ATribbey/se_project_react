import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ day, type, weatherTemp = "" }) {
  const bannerSrc = weatherOptions.filter((image) => {
    return image.day === day && image.type === type;
  });

  const bannerSrcUrl = bannerSrc[0].url || "";

  return (
    <section className="weather">
      <p className="weather__temp">{weatherTemp}</p>
      <img
        src={bannerSrcUrl}
        alt="Current Weather Banner"
        className="weather__banner"
      />
    </section>
  );
}

export default WeatherCard;
