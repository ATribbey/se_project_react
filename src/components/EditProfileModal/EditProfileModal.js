import { useState, useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ onClose, updateUser, loading }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const currentUser = useContext(CurrentUserContext);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAvatarChange(event) {
    setAvatar(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    updateUser({ name, avatar });
  }

  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [currentUser.name, currentUser.avatar]);

  return (
    <ModalWithForm
      name="edit-profile"
      title="Change profile data"
      onClose={onClose}
      buttonText="Save changes"
      onSubmit={onSubmit}
      loading={loading}
    >
      <div>
        <label htmlFor="name-input" className="modal__input-title">
          Name *
        </label>
        <input
          id="name-input"
          className="modal__input"
          type="text"
          name="name"
          minLength={1}
          maxLength={30}
          required
          value={name}
          onChange={handleNameChange}
        ></input>
      </div>
      <div>
        <label htmlFor="avatar-input" className="modal__input-title">
          Avatar *
        </label>
        <input
          id="avatar-input"
          className="modal__input"
          type="url"
          name="url"
          required
          value={avatar}
          onChange={handleAvatarChange}
        ></input>
      </div>
    </ModalWithForm>
  );
}

export default EditProfileModal;
