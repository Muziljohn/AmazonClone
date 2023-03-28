import React from "react";
import "../css/BasketItem.css";
import { useStateValue } from "../StateProvider";
function BasketItem({ image, info, rating, price, id }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="basketItem">
      <img src={image} />
      <div className="basketItemText">
        <h1>{info}</h1>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="BasketItemRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        <button className="basketButton" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
