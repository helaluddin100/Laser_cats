import React, { useState } from "react";
import Header from "./Header";
import "../styles/about.scss";
import videoBoardIntro from "../assets/board_intro.mp4";
import videoBoardLoop from "../assets/board_loop.mp4";
import Spritesheet_About_LCC from "./Spritesheets/Spritesheet_About_LCC";
import Spritesheet_About_Lore from "./Spritesheets/Spritesheet_About_Lore";
import Spritesheet_About_FuturePlans from "./Spritesheets/Spritesheet_About_FuturePlans";
import Spritesheet_About_OurMission from "./Spritesheets/Spritesheet_About_OurMission";
import Spritesheet_About_Tavern from "./Spritesheets/Spritesheet_About_Tavern";
import Spritesheet_About_Popup_LCC from "./Spritesheets/Spritesheet_About_Popup_LCC";
import Spritesheet_About_Popup_Lore from "./Spritesheets/Spritesheet_About_Popup_Lore";
import Spritesheet_About_Popup_OurMission from "./Spritesheets/Spritesheet_About_Popup_OurMission";
import Spritesheet_About_Popup_FuturePlans from "./Spritesheets/Spritesheet_About_Popup_FuturePlans";
import Spritesheet_About_Popup_Tavern from "./Spritesheets/Spritesheet_About_Popup_Tavern";
import Loading from "./Loading";

const About = ({ showInfoText }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [popup, setPopup] = useState(false);
  const [popupHeaderText, setPopupHeaderText] = useState("temp popup header");
  const [popupText, setPopupText] = useState("temp popup info");
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const SetComplete = () => {
    setLoadingComplete(true);
  };

  function handlePopup(event, infoHeader, info) {
    setPopupText(info);
    setPopupHeaderText(infoHeader);
    setPopup(infoHeader ? true : false);
  }

  return (
    <div className="about-container">
      <Header />
      <div
        className="spritesheet-loading-container"
        style={{ visibility: isLoadingComplete ? "hidden" : "visible" }}
      >
        <Loading />
      </div>
      <div className="about">
        <div className="about-bg">
          <div className="aboutvideo">
            <video
              preload="none"
              width="100%"
              style={{ display: videoIndex === 1 ? "none" : "inline-block" }}
              src={videoBoardIntro}
              autoPlay
              muted
              onLoadedData={SetComplete}
              onEnded={() => {
                setVideoIndex((idx) => idx + 1);
              }}
            />
            <video
              preload="none"
              width="100%"
              style={{ display: videoIndex === 0 ? "none" : "inline-block" }}
              src={videoBoardLoop}
              autoPlay
              muted
              loop
            />
          </div>

          <button
            id="lasercatscolbutton"
            onClick={(event) =>
              handlePopup(
                event,
                "Laser Cats Collection",
                "Laser Cats are a collection of programmatically, randomly generated NFTS on the Ethereum blockchain. The genesis Laser Cats collection will consist of 8,000 cats that have a pool of (XXX) characteristics to randomly generate from. Owning one of the Laser Cats will give you exclusive access to “Tavern 77” where only these high-class mercenaries are granted entry."
              )
            }
          >
            <Spritesheet_About_LCC />
          </button>
          <button
            id="ourmissionbutton"
            onClick={(event) =>
              handlePopup(
                event,
                "Our Mission",
                "•	Decentralization has disrupted the industry and put the world on notice. With the introduction of Web3 and the Metaverse we have a unique opportunity to create an immersive collection, universe, and brand that is dedicated to and rightfully owned by its community. There has never been a more exciting time for Indie studios, and also, no other time when a community and developer have been able to have a symbiotic relationship with similar goals in mind. Together we will create a unique universe that will be held to no restrictions and we will do everything in our power to provide vast amounts of value to the people who made this dream a reality.\n\n•	We have an exciting list of goals for The Omniverse, but we will slowly roll them out over the course of the next year as goals are met on the road map.2022 is the year of the Indie so let’s start building this Omniverse together."
              )
            }
          >
            <Spritesheet_About_OurMission />
          </button>
          <button
            id="lorebutton"
            onClick={(event) =>
              handlePopup(
                event,
                "Lore",
                "Laser Cats are a warrior race that have been genetically created on the planet Nero. They are hired as galactic mercenaries that roam the galaxy hunting down fugitives, criminals and galactic monsters. Some of these beings have cyber enhanced weaponry and genetically enhanced abilities that turn them into deadly fighters. Their planet was destroyed by the Cyber-Syndicate and search the universe for revenge versus their old adversary.\n\nMajority of the surviving Laser Cats found refuge in the city of Bymere on the planet Aris. Bymere is one of the three largest cities on Aris and thrives on its black markets economy. This is where the Laser Cats mercenary guild and base “Tavern 77” was founded.\n\nThe Cyber-Syndicate are a collective of extremely powerful self-aware androids. When the Cyber-Syndicate are not able to thrive on their own, they believe sacrifices must be made in order to save their people. Many planets have been ravaged due Cyber-Syndicate demand for rare resources or fertile land. As the proud race they are, the Laser Cats refused the Cyber-Syndicate’s demands and as a result vast majority of their species was wiped out. After the Laser Cats home world of Nero was mined for resources it has now become a polluted and desolate wasteland.\n\nBymere’sblack market is known across The Omniverse for being one of the most dangerous as well as most lucrative underworld economies. The Laser Cats exist within Bymere’s black market ecosystem as many different services, but all in all they are self-serving.  The Laser Cats as well as the rest of the strong guilds and establishments give the city of Bymere high status and power.\n\nTavern 77 is a mystery to most of the outside world, but people prominent in the black market scene of Bymere understand that is the hub of the Laser Cats mercenary guild.\n\nLaser Cat Mercenary Code:\n1) Once accepting a “Hunt” or mission, it must be completed or die trying.\n2) If you are an active Laser Cat Guild member, your life quest is to see the destruction of the Cyber Syndicate that destroyed your home world.\n3) To become a Laser Cat Guild Member, you must a survive deadly test of agility, speed and strength which is held in secret Guilds Headquarters Octagon."
              )
            }
          >
            <Spritesheet_About_Lore />
          </button>
          <button
            id="tavern77button"
            onClick={(event) =>
              handlePopup(
                event,
                "Tavern 77",
                "•	Access to Tavern 77 will give owners of the Laser Cat collection ability to claim future mint passes and free air drops of other unique NFT’s that exist within The Omniverse world. Overtime, Tavern 77 will become a hub for members of the community to buy limited physical merchandise ranging from collectibles to clothing and tickets to in person Omniverse events. It will also be the headquarters for newson what’s coming up next from The Omniverse team."
              )
            }
          >
            <Spritesheet_About_Tavern />
          </button>
          <button
            id="futureplansbutton"
            onClick={(event) =>
              handlePopup(
                event,
                "Future Plans",
                "•	As The Omniverse expands its universe, we plan to expand and produce new NFTs that exist within its own as well as other metaverses. New additions of NFTs, physical goods, and in person events will release in a way where those with access to Tavern 77 will have an influence on what’s to come.\n\n•	One of the ultimate goals for The Omniverse will be creating an animated pilot for an aminated series. We want to create a universe that is not restricted by societal norms and truly loved and influenced by the community that helped bring it to life."
              )
            }
          >
            <Spritesheet_About_FuturePlans />
          </button>

          <div
            className="about-popup-container"
            style={{ visibility: popup === false ? "hidden" : "visible" }}
          >
            <div className="close">
              <img onClick={(event) => handlePopup(event)} />
            </div>
            <div className="about-popup-bg">
              {popupHeaderText == "Laser Cats Collection" ? (
                <Spritesheet_About_Popup_LCC />
              ) : popupHeaderText == "Our Mission" ? (
                <Spritesheet_About_Popup_OurMission />
              ) : popupHeaderText == "Lore" ? (
                <Spritesheet_About_Popup_Lore />
              ) : popupHeaderText == "Tavern 77" ? (
                <Spritesheet_About_Popup_Tavern />
              ) : popupHeaderText == "Future Plans" ? (
                <Spritesheet_About_Popup_FuturePlans />
              ) : (
                <div />
              )}
            </div>
            <div className="about-popup">
              <h
                className={popup === true ? "about-info-header" : ""}
                style={{
                  color:
                    popupHeaderText == "Laser Cats Collection"
                      ? "#02f0d8"
                      : popupHeaderText == "Our Mission"
                      ? "#feb43b"
                      : popupHeaderText == "Lore"
                      ? "#6cff00"
                      : popupHeaderText == "Tavern 77"
                      ? "#a400ff"
                      : popupHeaderText == "Future Plans"
                      ? "#ff01cb"
                      : "#ffffff",
                }}
              >
                <u>{popupHeaderText}</u>
              </h>
              <p className={popup === true ? "about-info" : ""}>{popupText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
