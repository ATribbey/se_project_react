import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onClose }) {
  function onSubmit() {}
  return (
    <ModalWithForm
      name="login"
      title="Log In"
      onClose={onClose}
      buttonText="Log In"
      onSubmit={onSubmit}
    ></ModalWithForm>
  );
}

export default LoginModal;
