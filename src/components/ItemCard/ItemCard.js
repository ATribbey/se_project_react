import "./ItemCard.css";

function ItemCard({ item, onSelectCard, handleOpenItemModal, onCardLike }) {
  function handleLike() {
    onCardLike();
  }

  return (
    <li className="itemcard__card">
      <div className="itemcard__container">
        <div className="itemcard__info">
          <div className="itemcard__name-container">
            <p className="itemcard__name">{item.name}</p>
          </div>
          <button
            className="itemcard__likebutton"
            type="button"
            onClick={handleLike}
          ></button>
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
