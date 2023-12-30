import "./ItemCard.css";
import defaultClothingItems from "../../utils/DefaultClothing";

function ItemCard() {
  return (
    <section className="itemcard">
      {defaultClothingItems.map((item) => {
        return (
          <div className="itemcard__card">
            <p className="itemcard__name">{item.name}</p>
            <img
              className="itemcard__image"
              src={item.link}
              alt="Clothing Item"
            />
          </div>
        );
      })}
    </section>
  );
}

export default ItemCard;
