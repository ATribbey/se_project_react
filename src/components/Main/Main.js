import "./Main.css";
import { useContext, useMemo } from "react";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function Main({
  weatherTemp,
  onSelectCard,
  handleOpenItemModal,
  clothingItems,
}) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);

  const temperature = currentTempUnit === "°C" ? weatherTemp.C : weatherTemp.F;

  const weatherType = useMemo(() => {
    let hotTemp = 85;
    let warmTemp = 66;

    // if (currentTempUnit === "°C") {
    //   hotTemp = 29.5;
    //   warmTemp = 18.9;
    // }

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
      <WeatherCard day={false} type="clear" weatherTemp={temperature} />
      <section className="main__section" id="clothing-card-section">
        <p className="itemcard__description">
          Today is {temperature}
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
    </main>
  );
}

export default Main;
