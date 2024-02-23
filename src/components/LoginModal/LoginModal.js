import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onClose, onSubmit }) {
  return (
    <ModalWithForm
      name="login"
      title="Log In"
      onClose={onClose}
      buttonText="Log In"
      onSubmit={onSubmit}
    >
      <label htmlFor="email-input" className="modal__input-title">
        Email
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
        Password
      </label>
      <input
        id="password-input"
        className="modal__input"
        type="password"
        name="password"
        placeholder="Password"
        required
      ></input>
    </ModalWithForm>
  );
}

export default LoginModal;
