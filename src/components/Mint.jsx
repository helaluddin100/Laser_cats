import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../styles/gallery.css";
import "./Mint.css";

import mintQtyBoxActive from "../assets/mint-qty-box-active.png";
import mintQtyBoxDiactive from "../assets/mint-qty-box-diactive.png";
import nftBox from "../assets/nft-box.png";
import itemImg2 from "../assets/cat2.jpg";
import itemImg3 from "../assets/cat3.jpg";
import itemImg4 from "../assets/cat4.jpg";

const Mint = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (inde) => {
    setToggleState(inde);
  };
  return (
    <div className="mint-container">
      <Header />

      <div className="mint-bg">
        <div className="mint">
          <div className="mint-left">
            <div className="mint-left-container">
              <p>5000 / 5000 Laser Cats Remaining (Phase 1)</p>
              <h2>How Many Laser Cats Would You Like To Mint?</h2>
              <div className="mint-qty">
                <div
                  className={
                    toggleState === 1 ? "mint-qty-box active" : "mint-qty-box"
                  }
                  onClick={() => toggleTab(1)}
                >
                  <p>01</p>
                </div>
                <div
                  className={
                    toggleState === 2 ? "mint-qty-box active" : "mint-qty-box"
                  }
                  onClick={() => toggleTab(2)}
                >
                  <p>02</p>
                </div>
                <div
                  className={
                    toggleState === 3 ? "mint-qty-box active" : "mint-qty-box"
                  }
                  onClick={() => toggleTab(3)}
                >
                  <p>03</p>
                </div>
                <div
                  className={
                    toggleState === 4 ? "mint-qty-box active" : "mint-qty-box"
                  }
                  onClick={() => toggleTab(4)}
                >
                  <p>04</p>
                </div>
                <div
                  className={
                    toggleState === 5 ? "mint-qty-box active" : "mint-qty-box"
                  }
                  onClick={() => toggleTab(5)}
                >
                  <p>05</p>
                </div>
              </div>
              <div className="mint-price-info-btn">
                <div className="mint-price-info-box">
                  <div className="mint-price">
                    <p>PRICE</p>
                    <h3>1.00 ETH</h3>
                  </div>
                  <div className="mint-price">
                    <p>Laser Cat</p>
                    <h3>1x</h3>
                  </div>
                  <div className="mint-price">
                    <p>Total</p>
                    <h3>1.00 ETH</h3>
                  </div>
                </div>
                <div className="mint-btn-box">
                  <Link to="/mint-next">
                    <button className="mint-btn">Mint Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mint-right">
            <div className="mint-right-box">
              <img src={nftBox} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
