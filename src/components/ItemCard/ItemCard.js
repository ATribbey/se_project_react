import { useContext } from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({
  item,
  onSelectCard,
  handleOpenItemModal,
  onCardLike,
  loggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const id = item._id;
  const isLiked = item.likes.some((user) => {
    return user.includes(currentUser?._id);
  });
  const likeButtonClass = `itemcard__likebutton ${
    isLiked ? "itemcard__likebutton_liked" : ""
  }`;

  function handleLike(id, isLiked) {
    onCardLike(id, isLiked);
  }

  return (
    <li className="itemcard__card">
      <div className="itemcard__container">
        <div className="itemcard__info">
          <div className="itemcard__name-container">
            <p className="itemcard__name">{item.name}</p>
          </div>
          {loggedIn ? (
            <button
              className={likeButtonClass}
              type="button"
              onClick={() => {
                handleLike(id, isLiked);
              }}
            ></button>
          ) : (
            <></>
          )}
        </div>
        <img
          className="itemcard__image"
          src={item.imageUrl}
          alt={item.name}
          onClick={() => {
            onSelectCard(item);
            handleOpenItemModal();
          }}
        />
      </div>
    </li>
  );
}

export default ItemCard;
