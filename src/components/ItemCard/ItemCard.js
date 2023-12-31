import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <>
      <ul className="itemcard__list">
        <li className="itemcard__card">
          <p className="itemcard__name">{item.name}</p>
          <img
            className="itemcard__image"
            src={item.link}
            alt="Clothing Item"
          />
        </li>
      </ul>
    </>
  );
}

export default ItemCard;
