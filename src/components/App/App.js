import "./App.css";
import React, { useState, useEffect } from "react";
import {
  getForecastWeather,
  parseWeatherTemp,
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

  function handleOpenCreateModal() {
    setActiveModal("create");
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
      setActiveModal("");
      document.removeEventListener("keyup", handleEscapeClose);
    }
  }

  function handleClickClose(event) {
    if (event.target.classList.contains("modal")) {
      setActiveModal("");
      document.removeEventListener("click", handleClickClose);
    }
  }

  function handleSelectedCard(card) {
    setSelectedCard(card);
    setActiveModal("preview");
  }

  useEffect(() => {
    getForecastWeather().then((data) => {
      const temperature = parseWeatherTemp(data);
      changeTemp(`${temperature}°F`);
      const locale = parseWeatherLocation(data);
      changeLocation(locale);
    });
  }, []);

  return (
    <>
      <Header location={location} onClick={handleOpenCreateModal} />
      <Main
        weatherTemp={temp}
        onSelectCard={handleSelectedCard}
        escClose={handleEscapeClose}
        clickClose={handleClickClose}
      />
      {activeModal === "create" && (
        <ModalWithForm
          name="add-new-garment"
          title="New Garment"
          onClose={handleCloseModal}
          buttonText="Add Garment"
        >
          <h2 className="modal__input-title">Name</h2>
          <input
            className="modal__input"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <h2 className="modal__input-title">Image</h2>
          <input
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
            <label for="hot"> Hot</label>
            <br />
            <input
              type="radio"
              name="temp"
              id="warm"
              className="modal__radio-button"
            />
            <label for="warm"> Warm</label>
            <br />
            <input
              type="radio"
              name="temp"
              id="cold"
              className="modal__radio-button"
            />
            <label for="cold"> Cold</label>
          </fieldset>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal cardObj={selectedCard} onClose={handleCloseModal} />
      )}
      <Footer />
    </>
  );
}

export default App;
