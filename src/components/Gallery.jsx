import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Header from "./Header";
import "../styles/team.scss";
import "../styles/gallery.css";
import "./galleryn.css";
import "./modal.css";
// import galleryBg from '../assets/gallery-bg.png';
import galleryBtnBg from "../assets/gallery-btn-bg.png";
import reloadBtn from "../assets/reload-btn.png";
import itemNumberPlate from "../assets/item-number-plate.png";
import myCollection from "../assets/my-collection.png";
import itemImg1 from "../assets/cat1.jpg";
import nftBoxBorder from "../assets/nft-box-border.png";
import opensea from "../assets/opensea.png";
import x from "../assets/x.svg";

import { getDefaultProvider, utils } from "ethers";
import { NftProvider, useNft } from "use-nft";
import Nft from "./Nft";
import axios from "axios";

const ethersConfig = {
  provider: getDefaultProvider("homestead"),
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState();

  const [filterActive, setFilterActive] = useState(false);

  const _toggleFilters = () => {
    setFilterActive(!filterActive);
  };

  const [menuActive, setMenuActive] = useState(false);
  const _toggleSidebar = () => {
    setMenuActive(!menuActive);
  };

  const [modal, setModal] = useState(false);
  const toggleMadal = () => {
    setModal(!modal);
  };
  //   if(modal){
  //     document.body.classList.add("active-modal");
  //   } else {
  //     document.body.classList.remove("active-modal");
  //   }
  const [modalCon, setModalCon] = useState(false);
  const toggleMadalCon = () => {
    setModalCon(!modalCon);
  };

  const perPage = 50;
  const [nfts, setNfts] = useState([]);
  const [showCount, setShowCount] = useState(perPage);
  const [address, setAddress] = useState(
    "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
  );
  const [errorMessageText, setErrorMessageText] = useState("");
  const [startToken, setStartToken] = useState("");

  useEffect(() => {
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_alchemy_api_key}/getNFTsForCollection`;
    const withMetadata = true;
    const perPage = 50;
    if (!utils.isAddress(address) && address != "") {
      setErrorMessageText("Invalid address");
      setNfts(null);
    } else {
      if ((nfts == null || nfts.length < showCount) && address != "") {
        var config = {
          method: "get",
          url: `${baseURL}?contractAddress=${address}&withMetadata=${withMetadata}&startToken=${startToken}`,
          headers: {},
        };
        axios(config)
          .then((response) => {
            setErrorMessageText("");
            setNfts([...nfts, ...response.data.nfts]);
            setStartToken(
              response.data.nfts[response.data.nfts.length - 1].id.tokenId
            );
            console.log(response.data);
          })
          .catch((error) => setErrorMessageText(error.message));
      }
    }
  }, [showCount, address]);

  // ==============filter section================
  const [inputField, setInputField] = useState({
    Blue: true,
    Human: true,
    Red: false,
    Spirit: false,
  });

  const onChange = (e) => {
    setInputField({ ...inputField, [e.target.value]: e.target.checked });
  };
  console.log(inputField);

  return (
    <div className="gallery-container">
      <Header />
      {/* ------------------- mobile filter icon ------------ */}
      <div
        className={`filter-btn ${filterActive ? "pink-svg" : ""}`}
        onClick={_toggleFilters}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.88096 3.33325H33.1203C35.08 3.33325 36.6673 4.96834 36.6673 6.98701V9.53951C36.6673 10.5188 36.2846 11.4592 35.6051 12.145L24.7634 23.1116C24.5764 23.3025 24.3224 23.4086 24.0599 23.4068L14.9822 23.3785C14.7059 23.3785 14.4434 23.2601 14.2546 23.0533L4.29151 12.0956C3.67547 11.4185 3.33398 10.5241 3.33398 9.59608V6.98878C3.33398 4.97011 4.92129 3.33325 6.88096 3.33325ZM15.4675 26.3735L23.5584 26.3982C24.0629 26.4 24.4713 26.8225 24.4713 27.3404V31.8921C24.4713 32.4118 24.1762 32.882 23.7163 33.0994L16.3718 36.5481C16.2002 36.6277 16.0183 36.6666 15.8364 36.6666C15.5945 36.6666 15.3525 36.5959 15.1414 36.4562C14.7725 36.2123 14.5494 35.7916 14.5494 35.3408V27.3157C14.5494 26.7942 14.9613 26.3717 15.4675 26.3735Z"
            fill="white"
          />
        </svg>
      </div>
      {/* ------------------- mobile filter icon end ------------ */}

      <div className="gallery-bg">
        <div className="gallery">
          <div className={`filters ${filterActive ? "" : "hidden-filters"}`}>
            <div className="filters-intro">
              <img src={x} className="filter-x" onClick={_toggleFilters} />
              {/* <p className="rocky-white-58">FILTER BY</p>
              <button className="btn-filters">CLEAR SELECTED</button> */}
            </div>
            {/* 
            <div className='for-sale'>
                <input type="checkbox" />
                <p className='acme-white-24'>FOR SALE</p>
            </div> */}

            <div className="select-filter">
              <div className="sb-btn">
                <div className="sb-btn-bg">
                  <img src={galleryBtnBg} />
                </div>
                <div
                  className={`filter-name sb-btn-text
                                ${
                                  activeFilter === 1
                                    ? "active-filter sb-btn-text"
                                    : ""
                                }`}
                  onClick={() => {
                    activeFilter === 1
                      ? setActiveFilter(0)
                      : setActiveFilter(1);
                  }}
                >
                  <p>Type</p>
                  {/* <img src={arrowDown} alt="" /> */}
                </div>
                <div className="checkboxes">
                  <div className="check">
                    <input
                      type="checkbox"
                      name="Blue"
                      checked={inputField.Blue}
                      value="Blue"
                      onChange={onChange}
                    />
                    <p className="acme-white-24">BLUE</p>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="Human"
                      value="Human"
                      onChange={onChange}
                      checked={inputField.Human}
                    />
                    <p className="acme-white-24">HUMAN</p>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="Red"
                      onChange={onChange}
                      value="Red"
                      checked={inputField.Red}
                    />
                    <p className="acme-white-24">RED</p>
                  </div>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="Spirit"
                      onChange={onChange}
                      value="Spirit"
                      checked={inputField.Spirit}
                    />
                    <p className="acme-white-24">SPIRIT</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="select-filter">
              <div className="sb-btn">
                <div className="sb-btn-bg">
                  <img src={galleryBtnBg} />
                </div>
                <div
                  className={`filter-name sb-btn-text
                                ${
                                  activeFilter === 2
                                    ? "active-filter sb-btn-text"
                                    : ""
                                }`}
                  onClick={() => {
                    activeFilter === 2
                      ? setActiveFilter(0)
                      : setActiveFilter(2);
                  }}
                >
                  <p>Special</p>
                </div>
                <div className="checkboxes">
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">LEGENDARY</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">Human</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">RARE</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">UNCOMMON</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="select-filter">
              <div className="sb-btn">
                <div className="sb-btn-bg">
                  <img src={galleryBtnBg} />
                </div>
                <div
                  className={`filter-name sb-btn-text
                                ${
                                  activeFilter === 3
                                    ? "active-filter sb-btn-text"
                                    : ""
                                }`}
                  onClick={() => {
                    activeFilter === 3
                      ? setActiveFilter(0)
                      : setActiveFilter(3);
                  }}
                >
                  <p>Clothing</p>
                </div>
                <div className="checkboxes">
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">LEGENDARY</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">Human</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">RARE</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">UNCOMMON</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="select-filter">
              <div className="sb-btn">
                <div className="sb-btn-bg">
                  <img src={galleryBtnBg} />
                </div>
                <div
                  className={`filter-name sb-btn-text
                                ${
                                  activeFilter === 4
                                    ? "active-filter sb-btn-text"
                                    : ""
                                }`}
                  onClick={() => {
                    activeFilter === 4
                      ? setActiveFilter(0)
                      : setActiveFilter(4);
                  }}
                >
                  <p>Off Hand</p>
                </div>
                <div className="checkboxes">
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">LEGENDARY</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">Human</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">RARE</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">UNCOMMON</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="select-filter">
              <div className="sb-btn">
                <div className="sb-btn-bg">
                  <img src={galleryBtnBg} />
                </div>
                <div
                  className={`filter-name sb-btn-text
                                ${
                                  activeFilter === 5
                                    ? "active-filter sb-btn-text"
                                    : ""
                                }`}
                  onClick={() => {
                    activeFilter === 5
                      ? setActiveFilter(0)
                      : setActiveFilter(5);
                  }}
                >
                  <p>Hair</p>
                </div>
                <div className="checkboxes">
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">LEGENDARY</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">Human</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">RARE</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">UNCOMMON</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="select-filter">
              <div className="sb-btn">
                <div className="sb-btn-bg">
                  <img src={galleryBtnBg} />
                </div>
                <div
                  className={`filter-name sb-btn-text
                                ${
                                  activeFilter === 6
                                    ? "active-filter sb-btn-text"
                                    : ""
                                }`}
                  onClick={() => {
                    activeFilter === 6
                      ? setActiveFilter(0)
                      : setActiveFilter(6);
                  }}
                >
                  <p>HeadGear</p>
                </div>
                <div className="checkboxes">
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">LEGENDARY</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">Human</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">RARE</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">UNCOMMON</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="select-filter">
              <div className="sb-btn">
                <div className="sb-btn-bg">
                  <img src={galleryBtnBg} />
                </div>
                <div
                  className={`filter-name sb-btn-text
                                ${
                                  activeFilter === 7
                                    ? "active-filter sb-btn-text"
                                    : ""
                                }`}
                  onClick={() => {
                    activeFilter === 7
                      ? setActiveFilter(0)
                      : setActiveFilter(7);
                  }}
                >
                  <p>Face</p>
                </div>
                <div className="checkboxes">
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">LEGENDARY</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">Human</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">RARE</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">UNCOMMON</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="select-filter">
              <div className="sb-btn">
                <div className="sb-btn-bg">
                  <img src={galleryBtnBg} />
                </div>
                <div
                  className={`filter-name sb-btn-text
                                ${
                                  activeFilter === 8
                                    ? "active-filter sb-btn-text"
                                    : ""
                                }`}
                  onClick={() => {
                    activeFilter === 8
                      ? setActiveFilter(0)
                      : setActiveFilter(8);
                  }}
                >
                  <p>Neck</p>
                </div>
                <div className="checkboxes">
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">LEGENDARY</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">Human</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">RARE</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">UNCOMMON</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="select-filter">
              <div className="sb-btn">
                <div className="sb-btn-bg">
                  <img src={galleryBtnBg} />
                </div>
                <div
                  className={`filter-name sb-btn-text
                                ${
                                  activeFilter === 9
                                    ? "active-filter sb-btn-text"
                                    : ""
                                }`}
                  onClick={() => {
                    activeFilter === 9
                      ? setActiveFilter(0)
                      : setActiveFilter(9);
                  }}
                >
                  <p>Eyes</p>
                </div>
                <div className="checkboxes">
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">LEGENDARY</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">Human</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">RARE</p>
                  </div>
                  <div className="check">
                    <input type="checkbox" />
                    <p className="acme-white-24">UNCOMMON</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="gallery-items">
            <div className="items-con">
              <div className="items-top-bar">
                <div className="bar-left">
                  <p>Filter 10,000</p>
                </div>
                <div className="bar-right">
                  <button className="sbg-btn" onClick={toggleMadalCon}>
                    <div className="sbg-btn-bg">
                      <img src={myCollection} />
                    </div>
                    <div className="sbg-btn-text">
                      <p>My Collection</p>
                    </div>
                  </button>
                  <button className="sbg-btn reload-btn">
                    <img src={reloadBtn} />
                  </button>
                </div>
              </div>
              <div className="items-groups">
                {nfts.length > 0
                  ? nfts
                      .slice(0, showCount)
                      .filter((x) => inputField[x.metadata.attributes[0].value])
                      .map((nft, key) => (
                        <Link to={`/nft-info/${nft.id.tokenId}`}>
                          <div className="item">
                            <div className="item-img-box">
                              <div className="item-img">
                                <img
                                  src={nft.media[0].gateway}
                                  alt="Item Image"
                                />
                              </div>
                              <div className="item-img-border">
                                <img src={nftBoxBorder} alt="Item Image" />
                              </div>
                            </div>
                            <div className="item-name-no">
                              <div className="item-name-no-con">
                                <div className="item-name-bg">
                                  <img src={itemNumberPlate} />
                                </div>
                                <div className="name-no">
                                  <div>
                                    <p>{nft.metadata.attributes[0].value}</p>
                                    <p>{nft.contractMetadata.name}</p>
                                  </div>
                                  <div>
                                    <p>
                                      <span>No.</span>
                                      {parseInt(nft.id.tokenId, 16)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))
                  : null}

                {/* Modal */}
                {modal && (
                  <div className="modal">
                    <div className="modal-overlay" onClick={toggleMadal}>
                      <div className="modal-contant">
                        <div className="modal-img">
                          <img src={itemImg1} alt="NFT Image" />
                        </div>
                        <div className="modal-info">
                          <div className="modal-item-top">
                            <div className="modal-item-name">
                              {/* <div className="modal-item-name-bg">
                                    <img src={modalItemNameBg} alt="" />
                                </div> */}
                              <div>
                                <p>Laser Cat</p>
                              </div>
                              <div>
                                <p>No. 0345</p>
                              </div>
                            </div>
                          </div>
                          <div className="item-details">
                            <div className="details-box-group">
                              <div className="details-box">
                                <p>Type</p>
                                <span>Cat</span>
                              </div>
                              <div className="details-box">
                                <p>Type: </p>
                                <span> Cat</span>
                              </div>
                            </div>
                            <div className="details-box-group">
                              <div className="details-box">
                                <p>Type:</p>
                                <span>Cat</span>
                              </div>
                              <div className="details-box">
                                <p>Type:</p>
                                <span>Cat</span>
                              </div>
                            </div>
                            <div className="details-box-group">
                              <div className="details-box">
                                <p>Type:</p>
                                <span>Cat</span>
                              </div>
                              <div className="details-box">
                                <p>Type:</p>
                                <span>Cat</span>
                              </div>
                            </div>
                          </div>
                          <div className="viwe-box">
                            <p>Wiew On......</p>
                            <a href="" target="_blank">
                              <img src={opensea} alt="" />
                            </a>
                          </div>
                        </div>
                        {/* <button className="modal-close" onClick={toggleMadal}>
                                    X
                                </button> */}
                      </div>
                    </div>
                  </div>
                )}
                {/* Modal */}
                {/* ModalCon */}
                {modalCon && (
                  <div className="modal-con">
                    <div className="modal-con-overlay" onClick={toggleMadalCon}>
                      <div className="modal-con-contant">
                        <div className="connect-btn">
                          <button>Connect Wallet</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Modal */}
              </div>
              <div className="load-more">
                <button
                  className="sbg-btn"
                  onClick={() => {
                    setShowCount(showCount + perPage);
                  }}
                >
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
