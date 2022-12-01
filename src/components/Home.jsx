import React from "react";
import { useState } from "react";
import videoLoop from "../assets/cyberCityMain1920x1080 loop.mp4";
import { Link } from "react-router-dom";
import SpriteSheet_Main_About from "./Spritesheets/Spritesheet_Main_About";
import SpriteSheet_Main_Tavern77 from "./Spritesheets/Spritesheet_Main_Tavern77";
import SpriteSheet_Main_Team from "./Spritesheets/Spritesheet_Main_Team";
import SpriteSheet_Main_Merc from "./Spritesheets/Spritesheet_Main_Merc";
import SpriteSheet_Main_Contracts from "./Spritesheets/Spritesheet_Main_Contracts";
import SpriteSheet_Main_Roadmap from "./Spritesheets/Spritesheet_Main_Roadmap";
import Header from "./Header";
import "../styles/home.scss";
import Loading from "./Loading";

const Home = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const SetComplete = () => {
    setLoadingComplete(true);
  };

  return (
    <div className="home-container">
      <Header />
      <div
        className="spritesheet-loading-container"
        style={{ visibility: isLoadingComplete ? "hidden" : "visible" }}
      >
        <Loading />
      </div>
      <div class="home">
        <div className="video-container">
          <div className="mainvideo">
            <video
              preload="none"
              width="100%"
              style={{ display: "inline-block" }}
              src={videoLoop}
              autoPlay
              muted
              loop
              onLoadedData={SetComplete}
            />
          </div>

          <div id="about-container" class="infolink-container">
            <Link to="/about">
              <SpriteSheet_Main_About />
            </Link>
          </div>
          <div id="tavern77-container" class="infolink-container">
            <Link to="/home">
              <SpriteSheet_Main_Tavern77 />
            </Link>
          </div>
          <div id="team-container" class="infolink-container">
            <Link to="/team">
              <SpriteSheet_Main_Team />
            </Link>
          </div>
          <div id="merc-container" class="infolink-container">
            <Link to="/home">
              <SpriteSheet_Main_Merc />
            </Link>
          </div>
          <div id="contracts-container" class="infolink-container">
            <Link to="/home">
              <SpriteSheet_Main_Contracts />
            </Link>
          </div>
          <div id="roadmap-container" class="infolink-container">
            <Link to="/roadmap">
              <SpriteSheet_Main_Roadmap />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
