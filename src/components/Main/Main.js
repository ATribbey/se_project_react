import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";
import defaultClothingItems from "../../utils/DefaultClothing";

function Main() {
  return (
    <>
      <WeatherCard day={false} type="clear" />
      <section className="itemcard">
        {defaultClothingItems.map((item) => {
          return <ItemCard item={item} />;
        })}
      </section>
    </>
  );
}

export default Main;
