import { React, useContext } from "react";
import "./Profile.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Profile({
  onSelectCard,
  handleOpenItemModal,
  onClick,
  onCardLike,
  loggedIn,
  clothingItems,
  editProfile,
  logout,
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
        <div className="profile__user-options">
          <button className="profile__user-button" onClick={editProfile}>
            Change Profile Data
          </button>
          <button className="profile__user-button" onClick={logout}>
            Logout
          </button>
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
              const isOwn = item.owner === currentUser._id;
              if (isOwn) {
                return (
                  <ItemCard
                    key={item._id}
                    item={item}
                    onSelectCard={onSelectCard}
                    handleOpenItemModal={handleOpenItemModal}
                    onCardLike={onCardLike}
                    loggedIn={loggedIn}
                  />
                );
              } else return null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
