import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import {
  getForecastWeather,
  parseWeatherTempF,
  parseWeatherTempC,
  parseWeatherLocation,
} from "../../utils/WeatherApi.js";
import {
  getClothingItems,
  postClothingItem,
  deleteClothingItem,
} from "../../utils/api.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import ItemModal from "../ItemModal/ItemModal.js";
import Profile from "../Profile/Profile.js";
import Footer from "../Footer/Footer.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, changeTemp] = useState(0);
  const [location, changeLocation] = useState("");
  const [currentTempUnit, changeTempUnit] = useState("°F");
  const [clothingItems, setClothingItems] = useState([]);

  function fetchClothes() {
    getClothingItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSwitchChange() {
    if (currentTempUnit === "°F") {
      changeTempUnit("°C");
    } else if (currentTempUnit === "°C") {
      changeTempUnit("°F");
    }
  }

  function handleOpenCreateModal() {
    setActiveModal("create");
    document.addEventListener("keyup", handleEscapeClose);
    document.addEventListener("click", handleClickClose);
  }

  function handleOpenItemModal() {
    setActiveModal("preview");
    document.addEventListener("keyup", handleEscapeClose);
    document.addEventListener("click", handleClickClose);
  }

  function handleCloseModal() {
    setActiveModal("");
    document.removeEventListener("keyup", handleEscapeClose);
    document.removeEventListener("click", handleClickClose);
  }

  function handleEscapeClose(event) {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  }

  function handleClickClose(event) {
    if (event.target.classList.contains("modal")) {
      handleCloseModal();
    }
  }

  function handleSelectedCard(card) {
    setSelectedCard(card);
  }

  function onAddItem(values) {
    postClothingItem(values)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(`Unable to add clothing item due to: ${err}`);
      });
  }

  function onDeleteItem(cardId) {
    deleteClothingItem(cardId)
      .then(() => {
        const newArr = clothingItems.filter((card) => {
          return card._id !== cardId;
        });
        setClothingItems(newArr);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(`Unable to delete clothing item due to: ${err}`);
      });
  }

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherTempF(data);
        changeTemp(temperature);
        const locale = parseWeatherLocation(data);
        changeLocation(locale);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetchClothes();
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        if (currentTempUnit !== "°F") {
          const temperature = parseWeatherTempC(data);
          changeTemp(temperature);
        } else if (currentTempUnit !== "°C") {
          const temperature = parseWeatherTempF(data);
          changeTemp(temperature);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentTempUnit]);

  return (
    <CurrentTempUnitContext.Provider
      value={{ currentTempUnit, handleSwitchChange }}
    >
      <Header location={location} onClick={handleOpenCreateModal} />
      <Switch>
        <Route exact path="/">
          <Main
            weatherTemp={temp}
            onSelectCard={handleSelectedCard}
            handleOpenItemModal={handleOpenItemModal}
            clothingItems={clothingItems}
          />
        </Route>
        <Route path="/profile">
          <Profile
            onSelectCard={handleSelectedCard}
            handleOpenItemModal={handleOpenItemModal}
            onClick={handleOpenCreateModal}
            clothingItems={clothingItems}
          />
        </Route>
      </Switch>
      {activeModal === "create" && (
        <AddItemModal
          onClose={handleCloseModal}
          onAddItem={onAddItem}
          isOpen={activeModal === "create"}
        />
      )}
      {activeModal === "preview" && (
        <ItemModal
          cardObj={selectedCard}
          onClose={handleCloseModal}
          handleDelete={onDeleteItem}
        />
      )}

      <Footer />
    </CurrentTempUnitContext.Provider>
  );
}

export default App;
