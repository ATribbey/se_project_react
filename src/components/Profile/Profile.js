import { React } from "react";
import "./Profile.css";
import SideBar from "../Sidebar/Sidebar.js";
import ClothesSection from "../ClothesSection/ClothesSection.js";

function Profile({
  onSelectCard,
  handleOpenItemModal,
  onClick,
  onCardLike,
  loggedIn,
  clothingItems,
  editProfile,
  editLocation,
  logout,
}) {
  return (
    <div className="profile">
      <SideBar
        editProfile={editProfile}
        editLocation={editLocation}
        logout={logout}
      ></SideBar>
      <div className="profile__clothing">
        <div className="profile__clothing-header">
          <p className="profile__clothing-title">Your Items</p>
          <button className="profile__clothing-button" onClick={onClick}>
            + Add New
          </button>
        </div>
        <ClothesSection
          onSelectCard={onSelectCard}
          handleOpenItemModal={handleOpenItemModal}
          onCardLike={onCardLike}
          loggedIn={loggedIn}
          clothingItems={clothingItems}
        ></ClothesSection>
      </div>
    </div>
  );
}

export default Profile;
