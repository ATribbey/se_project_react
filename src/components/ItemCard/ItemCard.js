import "./ItemCard.css";

function ItemCard({ item, onSelectCard, handleOpenItemModal }) {
  return (
    <li className="itemcard__card">
      <p className="itemcard__name">{item.name}</p>
      <img
        className="itemcard__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => {
          onSelectCard(item);
          handleOpenItemModal();
        }}
      />
    </li>
  );
}

export default ItemCard;
