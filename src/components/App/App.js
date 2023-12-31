import "./App.css";
import React, { useState, useEffect } from "react";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext.js";
import {
  getForecastWeather,
  parseWeatherTempF,
  parseWeatherTempC,
  parseWeatherLocation,
} from "../../utils/WeatherApi.js";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import ItemModal from "../ItemModal/ItemModal.js";
import Footer from "../Footer/Footer.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, changeTemp] = useState(0);
  const [location, changeLocation] = useState("");
  const [currentTempUnit, changeTempUnit] = useState("°F");

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
    if (currentTempUnit !== "°F") {
      getForecastWeather().then((data) => {
        const temperature = parseWeatherTempC(data);
        changeTemp(temperature);
      });
    } else if (currentTempUnit !== "°C") {
      getForecastWeather().then((data) => {
        const temperature = parseWeatherTempF(data);
        changeTemp(temperature);
      });
    }
  }, [currentTempUnit]);

  return (
    <>
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleSwitchChange }}
      >
        <Header location={location} onClick={handleOpenCreateModal} />

        <Main
          weatherTemp={temp}
          onSelectCard={handleSelectedCard}
          handleOpenItemModal={handleOpenItemModal}
        />
        {activeModal === "create" && (
          <ModalWithForm
            name="add-new-garment"
            title="New Garment"
            onClose={handleCloseModal}
            buttonText="Add Garment"
          >
            <label htmlFor="name-input" className="modal__input-title">
              Name
            </label>
            <input
              id="name-input"
              className="modal__input"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <label htmlFor="url-input" className="modal__input-title">
              Image
            </label>
            <input
              id="url-input"
              className="modal__input"
              type="url"
              name="url"
              placeholder="Image URL"
              required
            />
            <fieldset className="modal__radio">
              <h2 className="modal__input-title">Select the weather type:</h2>
              <input
                type="radio"
                name="temp"
                id="hot"
                className="modal__radio-button"
              />
              <label htmlFor="hot"> Hot</label>
              <br />
              <input
                type="radio"
                name="temp"
                id="warm"
                className="modal__radio-button"
              />
              <label htmlFor="warm"> Warm</label>
              <br />
              <input
                type="radio"
                name="temp"
                id="cold"
                className="modal__radio-button"
              />
              <label htmlFor="cold"> Cold</label>
            </fieldset>
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal cardObj={selectedCard} onClose={handleCloseModal} />
        )}
        <Footer />
      </CurrentTempUnitContext.Provider>
    </>
  );
}

export default App;
