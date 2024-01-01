import "./ItemCard.css";

function ItemCard({ item, onSelectCard, escClose, clickClose }) {
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
              document.addEventListener("keyup", escClose);
              document.addEventListener("click", clickClose);
            }}
          />
        </li>
      </ul>
    </>
  );
}

export default ItemCard;
