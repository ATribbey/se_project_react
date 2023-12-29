import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard.js";

function Main() {
  return (
    <>
      <WeatherCard day={true} type="foggy" />
      <ItemCard />
    </>
  );
}

export default Main;
