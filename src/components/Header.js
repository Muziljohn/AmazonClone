import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="headerLogo"
        />
      </Link>

      <div className="headerSearch">
        <input />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="headerNav">
        <Link to={"/signIn"} style={{ textDecoration: "none" }}>
          <div className="NavOptions">
            <span className="option1">
              <small>Hello</small>
            </span>
            <span className="option2">
              <strong>SignIn</strong>
            </span>
          </div>
        </Link>
        <div className="NavOptions">
          <span className="option1">
            <small>Return</small>
          </span>
          <span className="option2">
            <strong>&Order</strong>
          </span>
        </div>
        <div className="NavOptions">
          <span className="option1">
            <small>Your</small>
          </span>
          <span className="option2">
            <strong>Prime</strong>
          </span>
        </div>
        <Link to="/checkout">
          <div className="headerBasket">
            <ShoppingBasketIcon className="basket" />
            <span className="option2 basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
