import React from "react";
import "./Profile.css";
import avatar from "../../images/user-avatar.svg";
import ItemCard from "../ItemCard/ItemCard";
import defaultClothingItems from "../../utils/DefaultClothing";

function Profile({ onSelectCard, handleOpenItemModal }) {
  return (
    <div className="profile">
      <div className="profile__user-info">
        <div className="profile__user-info-container">
          <img
            className="profile__user-avatar"
            src={avatar}
            alt="Profile Avatar"
          ></img>
          <p className="profile__user-name">Terrence Tegegne</p>
        </div>
      </div>
      <div className="profile__clothing">
        <div className="profile__clothing-header">
          <p className="profile__clothing-title">Your Items</p>
          <button className="profile__clothing-button">+ Add New</button>
        </div>
        <div className="profile__items">
          <ul className="itemcard">
            {defaultClothingItems.map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onSelectCard={onSelectCard}
                  handleOpenItemModal={handleOpenItemModal}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
