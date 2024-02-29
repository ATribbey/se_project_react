import { React, useContext } from "react";
import "../Profile/Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function SideBar({ editProfile, logout }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile__user-info">
      <div className="profile__user-info-container">
        <img
          className="profile__user-avatar"
          src={currentUser?.avatar}
          alt="Profile Avatar"
        ></img>
        <p className="profile__user-name">{currentUser?.name}</p>
      </div>
      <div className="profile__user-options">
        <button className="profile__user-button" onClick={editProfile}>
          Change Profile Data
        </button>
        <button className="profile__user-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar;
