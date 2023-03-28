import React from "react";
import "../css/Product.css";
import { useStateValue } from "../StateProvider";
function Product({ image, price, rating, info, id }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        price: price,
        info: info,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="productInfo">
        <p>{info}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt={""} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
