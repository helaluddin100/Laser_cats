import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";
import "../styles/gallery.css";
import "./Mintnext.css";

import totalSupply from "../assets/5000.png";
import currentPrice from "../assets/current-price.png";
import mintBNow from "../assets/mint-b-now.png";
import bike from "../assets/bike.png";
import itemImg3 from "../assets/cat3.jpg";
import itemImg4 from "../assets/cat4.jpg";

const Mintnext = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (inde) => {
    setToggleState(inde);
  };
  return (
    <div className="mint-next">
      <Header />
      <div className="mint-next-bg">
        <div className="mint-next-container">
          <div className="next-mint-top">
            <div className="total-supply">
              <img src={totalSupply} alt="" />
            </div>
            <div className="current-price">
              <img src={currentPrice} alt="" />
            </div>
          </div>
          <div className="next-mint-bottom">
            <img src={mintBNow} alt="" />
            <div className="ddds">
        <img src={bike} alt="" />
      </div>
          </div>
        </div>
        
      </div>
      <div className="bike">
        <img src={bike} alt="" />
      </div>
    </div>
  );
};

export default Mintnext;
