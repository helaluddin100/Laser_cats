import React from "react";
import { useState } from "react";
import videoIntro from "../assets/cyber city 1920x1080 intro.mp4";
import videoLoop from "../assets/cyber city 1920x1080 loop.mp4";
import Spritesheet_Discord from "./Spritesheets/Spritesheet_Discord";
import Spritesheet_Instagram from "./Spritesheets/Spritesheet_Instagram";
import Spritesheet_Youtube from "./Spritesheets/Spritesheet_Youtube";
import Spritesheet_Twitter from "./Spritesheets/Spritesheet_Twitter";
import Spritesheet_Enter from "./Spritesheets/Spritesheet_Enter";
import { Link } from "react-router-dom";
import "../styles/landing.scss";
import Loading from "./Loading";

const Landing = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [showSocialMediaLinkContainer, setShowSocialMediaLinkContainer] =
    useState(false);
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const SetComplete = () => {
    setLoadingComplete(true);
  };

  document.addEventListener("DOMContentLoaded", function () {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (
                typeof videoSource.tagName === "string" &&
                videoSource.tagName === "SOURCE"
              ) {
                videoSource.src = videoSource.dataset.src;
              }
            }

            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });

      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });

  return (
    <div className="landing-container">
      <div
        className="loading-container"
        style={{ visibility: isLoadingComplete ? "hidden" : "visible" }}
      >
        <Loading />
      </div>
      <div className="landing">
        <div className="video-container">
          <div className="landingvideo">
            <video
              preload="none"
              width="100%"
              style={{ display: videoIndex === 1 ? "none" : "inline-block" }}
              src={videoIntro}
              autoPlay
              muted
              onLoadedData={SetComplete}
              onEnded={() => {
                setVideoIndex((idx) => idx + 1);
                setShowSocialMediaLinkContainer(true);
              }}
            />
            <video
              preload="none"
              width="100%"
              style={{ display: videoIndex === 0 ? "none" : "inline-block" }}
              src={videoLoop}
              autoPlay
              muted
              loop
            />
          </div>
          <div
            className="enterbutton-container"
            style={{
              visibility:
                showSocialMediaLinkContainer === false ? "hidden" : "visible",
            }}
          >
            <Link to="/home">
              <Spritesheet_Enter />
            </Link>
          </div>
          <div
            className="socialmedialink-container"
            style={{
              visibility:
                showSocialMediaLinkContainer === false ? "hidden" : "visible",
            }}
          >
            <div className="socialmedialink">
              <a href="https://twitter.com/TheOmniverse4" target="_blank">
                <Spritesheet_Youtube />
              </a>
            </div>
            <div className="socialmedialink">
              <a href="https://twitter.com/TheOmniverse4" target="_blank">
                <Spritesheet_Instagram />
              </a>
            </div>
            <div className="socialmedialink">
              <a href="https://twitter.com/TheOmniverse4" target="_blank">
                <Spritesheet_Discord />
              </a>
            </div>
            <div className="socialmedialink">
              <a href="https://twitter.com/TheOmniverse4" target="_blank">
                <Spritesheet_Twitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
