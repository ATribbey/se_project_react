import "./ModalWithForm.css";

function ModalWithForm({
  name,
  title,
  onClose,
  children,
  buttonText = "Add Garment",
}) {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <h1 className="modal__title">{title}</h1>
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <form className="modal__form">
          {children}
          <div>
            <button className="modal__submit" type="submit">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
