import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditLocationModal({ onClose, updateLocation, coords, loading }) {
  const [latitude, setLatitude] = useState(coords.lat);
  const [longitude, setLongitude] = useState(coords.long);

  function handleLatitudeChange(event) {
    setLatitude(event.target.value);
  }

  function handleLongitudeChange(event) {
    setLongitude(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    updateLocation({ latitude, longitude });
  }

  return (
    <ModalWithForm
      name="edit-profile"
      title="Change profile data"
      onClose={onClose}
      buttonText="Save changes"
      onSubmit={onSubmit}
      loading={loading}
    >
      <div>
        <label htmlFor="latitude-input" className="modal__input-title">
          Latitude *
        </label>
        <input
          id="latitude-input"
          className="modal__input"
          type="number"
          name="latitude"
          required
          value={latitude}
          onChange={handleLatitudeChange}
        ></input>
      </div>
      <div>
        <label htmlFor="longitude-input" className="modal__input-title">
          Longitude *
        </label>
        <input
          id="longitude-input"
          className="modal__input"
          type="number"
          name="longitude"
          required
          value={longitude}
          onChange={handleLongitudeChange}
        ></input>
      </div>
    </ModalWithForm>
  );
}

export default EditLocationModal;
