import "./Modal.css";

function ModalWithForm({
  name,
  title,
  onClose,
  children,
  buttonText = "Add Garment",
  onSubmit,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <h1 className="modal__title">{title}</h1>
        <button className="modal__close" type="button" onClick={onClose} />
        <form className="modal__form" name={name} onSubmit={onSubmit}>
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
