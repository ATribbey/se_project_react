import { useContext } from "react";
import "../ModalWithForm/Modal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ cardObj, onClose, handleDelete }) {
  const cardId = cardObj._id;
  const currentUser = useContext(CurrentUserContext);
  const isOwn = cardObj.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__preview-deletebutton ${
    isOwn
      ? "modal__preview-deleteButton__visible"
      : "modal__preview-deleteButton__hidden"
  }`;

  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__preview-close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__preview"
          src={cardObj.imageUrl}
          alt={cardObj.name}
        />
        <div className="modal__preview-text-container">
          <div id="preview-group-divider">
            <p className="modal__preview-text">{cardObj.name}</p>
            <p className="modal__preview-text">Weather: {cardObj.weather}</p>
          </div>
          <div id="preview-group-divider">
            <button
              className={itemDeleteButtonClassName}
              onClick={() => {
                handleDelete(cardId);
              }}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
