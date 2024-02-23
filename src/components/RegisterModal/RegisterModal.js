import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose, onSubmit }) {
  return (
    <ModalWithForm
      name="register"
      title="Sign Up"
      onClose={onClose}
      buttonText="Sign Up"
      onSubmit={onSubmit}
    >
      <label htmlFor="email-input" className="modal__input-title">
        Email*
      </label>
      <input
        id="email-input"
        className="modal__input"
        type="email"
        name="email"
        placeholder="Email"
        required
      ></input>
      <label htmlFor="password-input" className="modal__input-title">
        Password*
      </label>
      <input
        id="password-input"
        className="modal__input"
        type="password"
        name="password"
        placeholder="Password"
        required
      ></input>
      <label htmlFor="name-input" className="modal__input-title">
        Name*
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
      ></input>
      <label htmlFor="avatar-input" className="modal__input-title">
        Avatar URL*
      </label>
      <input
        id="avatar-input"
        className="modal__input"
        type="url"
        name="url"
        placeholder="Avatar URL"
        required
      ></input>
    </ModalWithForm>
  );
}

export default RegisterModal;
