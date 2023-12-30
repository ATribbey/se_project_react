import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <>
      <div className="itemcard__card">
        <p className="itemcard__name">{item.name}</p>
        <img className="itemcard__image" src={item.link} alt="Clothing Item" />
      </div>
    </>
  );
}

export default ItemCard;
