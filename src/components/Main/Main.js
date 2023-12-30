import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";

function Main() {
  return (
    <>
      <WeatherCard day={false} type="clear" />
      <ItemCard />
    </>
  );
}

export default Main;
