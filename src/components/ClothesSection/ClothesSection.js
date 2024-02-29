import { React, useContext } from "react";
import "../Profile/Profile.css";
import ItemCard from "../ItemCard/ItemCard.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function ClothingSection({
  onSelectCard,
  handleOpenItemModal,
  onCardLike,
  loggedIn,
  clothingItems,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
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
  );
}

export default ClothingSection;
