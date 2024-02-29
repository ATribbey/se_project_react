import { React } from "react";
import "./Profile.css";
import SideBar from "../Sidebar/Sidebar.js";
import ClothingSection from "../ClothingSection/ClothingSection.js";

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
  return (
    <div className="profile">
      <SideBar editProfile={editProfile} logout={logout}></SideBar>
      <div className="profile__clothing">
        <div className="profile__clothing-header">
          <p className="profile__clothing-title">Your Items</p>
          <button className="profile__clothing-button" onClick={onClick}>
            + Add New
          </button>
        </div>
        <ClothingSection
          onSelectCard={onSelectCard}
          handleOpenItemModal={handleOpenItemModal}
          onCardLike={onCardLike}
          loggedIn={loggedIn}
          clothingItems={clothingItems}
        ></ClothingSection>
      </div>
    </div>
  );
}

export default Profile;
