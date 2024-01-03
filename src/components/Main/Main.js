import "./Main.css";
import { useMemo } from "react";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";
import defaultClothingItems from "../../utils/DefaultClothing";

function Main({ weatherTemp, onSelectCard, handleOpenItemModal }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= `${86}°F`) {
      return "hot";
    } else if (weatherTemp >= `${66}°F` && weatherTemp <= `${85}°F`) {
      return "warm";
    } else {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <>
      <WeatherCard day={false} type="clear" weatherTemp={weatherTemp} />
      <section id="clothing-card-section">
        <p className="itemcard__description">
          Today is {weatherTemp} / You may want to wear:
        </p>
        <ul className="itemcard">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
                handleOpenItemModal={handleOpenItemModal}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default Main;
