import "./ItemCard.css";
import defaultClothingItems from "../../utils/DefaultClothing";

function ItemCard() {
  return (
    <>
      {defaultClothingItems.map((item) => {
        return (
          <>
            <p>{item.name}</p>
            <img src={item.link} alt="Clothing Item" />
          </>
        );
      })}
    </>
  );
}

export default ItemCard;
