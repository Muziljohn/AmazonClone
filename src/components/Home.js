import React from "react";
import "../css/home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
      <div className="row1">
        <Product
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          }
          id={"1"}
          rating={5}
          info={
            "My name is khan My name is khan My name is khan My name is khan My name is khan My name is khan My name is khan My name is khan My name is khan My name is khan My name is khan My name is khan "
          }
          price={10}
        />
        <Product
          image={
            "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          }
          id={"2"}
          rating={3}
          info={"My name is khan"}
          price={10}
        />
      </div>

      <div className="row2">
        <Product
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          }
          id={"3"}
          rating={5}
          info={"My name is khan"}
          price={10}
        />
        <Product
          image={
            "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          }
          id={"4"}
          rating={5}
          info={"My name is khan"}
          price={10}
        />
        <Product
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          }
          rating={5}
          info={"My name is khan"}
          price={10}
          id={"5"}
        />
      </div>
      <div className="row3">
        <Product
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          }
          rating={5}
          info={
            "My name is khan My name is khan My name is khan My name is khan My name is khan My name is khan My name is khan"
          }
          price={10}
          id={"6"}
        />
      </div>
    </div>
  );
}

export default Home;
