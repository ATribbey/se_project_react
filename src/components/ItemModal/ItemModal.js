import "../ModalWithForm/Modal.css";

function ItemModal({ cardObj, onClose, handleDelete }) {
  const cardId = `:${cardObj._id}`;

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
              className="modal__preview-deletebutton"
              onClick={() => {
                handleDelete({ cardId });
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
