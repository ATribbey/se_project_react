import "./Main.css";
import { useContext, useMemo } from "react";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";
import clothingItems from "../../utils/clothingItems.js";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

function Main({ weatherTemp, onSelectCard, handleOpenItemModal }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

  const weatherType = useMemo(() => {
    let hotTemp = 85;
    let warmTemp = 66;

    if (currentTempUnit === "°C") {
      hotTemp = 29.5;
      warmTemp = 18.9;
    }

    if (weatherTemp > hotTemp) {
      return "hot";
    } else if (weatherTemp >= warmTemp && weatherTemp <= hotTemp) {
      return "warm";
    } else if (weatherTemp < warmTemp) {
      return "cold";
    }
  }, [weatherTemp, currentTempUnit]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <>
      <WeatherCard day={false} type="clear" weatherTemp={weatherTemp} />
      <section className="main__section" id="clothing-card-section">
        <p className="itemcard__description">
          Today is {weatherTemp}
          {currentTempUnit} / You may want to wear:
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
