import React from "react";
import "../css/Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />

        <h1>Your Shoping Basket</h1>
        {basket.map((item, index) => {
          return (
            <BasketItem
              key={index}
              info={item.info}
              image={item.image}
              rating={item.rating}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
