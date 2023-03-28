import React, { useEffect } from "react";
import "../css/Subtotat.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  let sum = 0;

  const total = basket?.reduce((accumulator, value) => {
    return accumulator + value.price;
  }, 0);
  return (
    <div>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Subtotal ({basket?.length} items):
                <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={total} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
