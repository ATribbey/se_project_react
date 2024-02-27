import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose, registerUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAvatarChange(event) {
    setAvatar(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    registerUser({ email, password, name, avatar });
  }

  return (
    <ModalWithForm
      name="register"
      title="Sign Up"
      onClose={onClose}
      buttonText="Sign Up"
      onSubmit={onSubmit}
    >
      <div>
        <label htmlFor="email-input" className="modal__input-title">
          Email *
        </label>
        <input
          id="email-input"
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>
      </div>

      <div>
        <label htmlFor="password-input" className="modal__input-title">
          Password *
        </label>
        <input
          id="password-input"
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </div>
      <div>
        <label htmlFor="name-input" className="modal__input-title">
          Name *
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
          value={name}
          onChange={handleNameChange}
        ></input>
      </div>
      <div>
        <label htmlFor="avatar-input" className="modal__input-title">
          Avatar URL *
        </label>
        <input
          id="avatar-input"
          className="modal__input"
          type="url"
          name="url"
          placeholder="Avatar URL"
          required
          value={avatar}
          onChange={handleAvatarChange}
        ></input>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
