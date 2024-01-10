import React from "react";
import "./Profile.css";
import avatar from "../../images/user-avatar.svg";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/DefaultClothing";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__user-info">
        <img
          className="profile__user-avatar"
          src={avatar}
          alt="Profile Avatar"
        ></img>
        <p className="profile__user-name">Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default Profile;
