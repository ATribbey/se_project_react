import "./Main.css";
import { useContext, useMemo } from "react";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({
  weatherTemp,
  weatherCondition,
  currentTime,
  onSelectCard,
  handleOpenItemModal,
  clothingItems,
  onCardLike,
  loggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temperature =
    currentTemperatureUnit === "°C" ? weatherTemp.C : weatherTemp.F;

  const weatherType = useMemo(() => {
    let hotTemp = 85;
    let warmTemp = 66;

    const tempF = weatherTemp.F;

    if (tempF > hotTemp) {
      return "hot";
    } else if (tempF >= warmTemp && tempF <= hotTemp) {
      return "warm";
    } else if (tempF < warmTemp) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main>
      <WeatherCard
        day={currentTime}
        type={weatherCondition ? weatherCondition : "clear"}
        weatherTemp={temperature}
      />
      <section className="main__section" id="clothing-card-section">
        <p className="itemcard__description">
          Today is {temperature}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="itemcard">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
                handleOpenItemModal={handleOpenItemModal}
                onCardLike={onCardLike}
                loggedIn={loggedIn}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
