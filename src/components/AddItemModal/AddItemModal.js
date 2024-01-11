import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ onClose, onAddItem, isOpen }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [weather, setWeather] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleUrlChange(event) {
    setUrl(event.target.value);
  }

  function handleWeatherChange(event) {
    setWeather(event.target.id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem({ name, url, weather });
  }

  return (
    <ModalWithForm
      name="add-new-garment"
      title="New Garment"
      onClose={onClose}
      buttonText="Add Garment"
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
        minLength={1}
        maxLength={30}
        required
        value={name}
        onChange={handleNameChange}
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
        minLength={1}
        required
        value={url}
        onChange={handleUrlChange}
      />
      <fieldset className="modal__radio">
        <h2 className="modal__input-title">Select the weather type:</h2>
        <input
          type="radio"
          name="temp"
          id="hot"
          className="modal__radio-button"
          onChange={handleWeatherChange}
        />
        <label htmlFor="hot"> Hot</label>
        <br />
        <input
          type="radio"
          name="temp"
          id="warm"
          className="modal__radio-button"
          onChange={handleWeatherChange}
        />
        <label htmlFor="warm"> Warm</label>
        <br />
        <input
          type="radio"
          name="temp"
          id="cold"
          className="modal__radio-button"
          onChange={handleWeatherChange}
        />
        <label htmlFor="cold"> Cold</label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
