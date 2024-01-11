import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddItemModal({ onClose, onAddItem, isOpen }) {
  return (
    <ModalWithForm
      name="add-new-garment"
      title="New Garment"
      onClose={onClose}
      buttonText="Add Garment"
      isOpen={isOpen}
      onSubmit={onAddItem}
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
  );
}

export default AddItemModal;
