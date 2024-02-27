import { React, useContext } from "react";
import "./Profile.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile({
  onSelectCard,
  handleOpenItemModal,
  onClick,
  clothingItems,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <div className="profile__user-info">
        <div className="profile__user-info-container">
          <img
            className="profile__user-avatar"
            src={currentUser?.avatar}
            alt="Profile Avatar"
          ></img>
          <p className="profile__user-name">{currentUser?.name}</p>
        </div>
      </div>
      <div className="profile__clothing">
        <div className="profile__clothing-header">
          <p className="profile__clothing-title">Your Items</p>
          <button className="profile__clothing-button" onClick={onClick}>
            + Add New
          </button>
        </div>
        <div className="profile__items">
          <ul className="itemcard">
            {clothingItems.map((item) => {
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
