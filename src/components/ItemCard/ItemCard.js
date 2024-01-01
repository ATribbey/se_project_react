import "./ItemCard.css";

function ItemCard({ item, onSelectCard }) {
  return (
    <>
      <ul className="itemcard__list">
        <li className="itemcard__card">
          <p className="itemcard__name">{item.name}</p>
          <img
            className="itemcard__image"
            src={item.link}
            alt="Clothing Item"
            onClick={() => {
              onSelectCard(item);
            }}
          />
        </li>
      </ul>
    </>
  );
}

export default ItemCard;
