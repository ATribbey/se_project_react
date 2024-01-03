import "../ModalWithForm/Modal.css";

function ItemModal({ cardObj, onClose }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__preview-close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal__preview" src={cardObj.link} alt={cardObj.name} />
        <div className="modal__preview-text-container">
          <p className="modal__preview-text">{cardObj.name}</p>
          <p className="modal__preview-text">Weather: {cardObj.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
