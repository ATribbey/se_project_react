import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose }) {
  function onSubmit() {}

  return (
    <ModalWithForm
      name="register"
      title="Sign Up"
      onClose={onClose}
      buttonText="Sign Up"
      onSubmit={onSubmit}
    ></ModalWithForm>
  );
}

export default RegisterModal;
