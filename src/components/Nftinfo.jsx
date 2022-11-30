import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";
import "./Nftinfo.css";

import nftBoxBorder from "../assets/nft-box-border.png";
import mintQtyBoxDiactive from "../assets/mint-qty-box-diactive.png";
import itemImg1 from "../assets/cat1.jpg";
import opensea from "../assets/opensea.png";

const Nftinfo = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (inde) => {
    setToggleState(inde);
  };
  return (
    <div className="nftinfo-container">
      <Header />

      <div className="nftinfo-bg">
        <div className="nftinfo">
          <div className="nftinfo-left">
            <div className="nftinfo-img-con">
              <div className="nftinfo-img">
                <img src={itemImg1} alt="" />
              </div>
              <div className="nftinfo-img-border">
                <img src={nftBoxBorder} alt="" />
              </div>
            </div>
          </div>
          <div className="nftinfo-right">
            <div className="nftinfo-right-con">
              <div className="nftinfo-top">
                <div>
                  <p>Laser Cat</p> 
                </div>
                <div>
                  <p>
                    <span>NO: </span>3045
                  </p>
                </div>
              </div>
              <div className="nftinfo-mid">
                <div className="nftinfo-mid-box-group">
                  <div className="nftinfo-mid-box"><p>Type</p></div>
                  <div className="nftinfo-mid-box"><p>Type</p></div>
                </div>
                <div className="nftinfo-mid-box-group">
                  <div className="nftinfo-mid-box"><p>Type</p></div>
                  <div className="nftinfo-mid-box"><p>Type</p></div>
                </div>
                <div className="nftinfo-mid-box-group">
                  <div className="nftinfo-mid-box"><p>Type</p></div>
                  <div className="nftinfo-mid-box"><p>Type</p></div>
                </div>
                <div className="nftinfo-mid-box-group">
                  <div className="nftinfo-mid-box"><p>Type</p></div>
                  <div className="nftinfo-mid-box"><p>Type</p></div>
                </div>
              </div>
              <div className="nftinfo-bottom">
                <div className="nftinfo-bottom-box">
                <p>View On....</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nftinfo;
