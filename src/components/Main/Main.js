import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";
import defaultClothingItems from "../../utils/DefaultClothing";

function Main({ weatherTemp, onSelectCard }) {
  return (
    <>
      <WeatherCard day={false} type="clear" weatherTemp={weatherTemp} />
      <section id="clothing-card-section">
        <p className="itemcard__description">
          Today is {weatherTemp} / You may want to wear:
        </p>
        <div className="itemcard">
          {defaultClothingItems.map((item) => {
            return <ItemCard item={item} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Main;
