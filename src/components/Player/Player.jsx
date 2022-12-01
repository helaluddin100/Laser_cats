import React, { useRef } from "react";
import "../../styles/audioplayer.scss";
import { isMobile } from "react-device-detect";

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  isMaximized,
  setMaximized,
  playPrev,
  playNext,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const TogglePlayer = () => {
    setMaximized(!isMaximized);
  };

  return (
    <div
      className="player-container-main"
      style={{ display: isMobile ? "none" : "" }}
    >
      <div className="player-container">
        <div className="player" style={{ display: isMaximized ? "" : "none" }}>
          <div className="player-image">
            <img />
          </div>
          <div className="song">
            <div className="title">{currentSong.title}</div>

            <div className="navigation">
              <div
                className="navigation_wrapper"
                onClick={checkWidth}
                ref={clickRef}
              >
                <div
                  className="seek_bar"
                  style={{ width: `${currentSong.progress + "%"}` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="controls">
            <button className="btn_action" onClick={playPrev}>
              <img className="btn_playprev" />
            </button>
            {isplaying ? (
              <button className="btn_action pp" onClick={PlayPause}>
                <img className="btn_pause" />
              </button>
            ) : (
              <button className="btn_action pp" onClick={PlayPause}>
                <img className="btn_play" />
              </button>
            )}
            <button className="btn_action" onClick={playNext}>
              <img className="btn_playnext" />
            </button>
          </div>
        </div>

        <div
          className="player-minimized"
          style={{ display: isMaximized ? "none" : "block" }}
        >
          <div className="player-image">
            <img />
          </div>
        </div>

        {isMaximized ? (
          <button className="btn_toggleplayer" onClick={TogglePlayer}>
            <img className="btn_collapse" />
          </button>
        ) : (
          <button className="btn_toggleplayer" onClick={TogglePlayer}>
            <img className="btn_expand" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Player;
