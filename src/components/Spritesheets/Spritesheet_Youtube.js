import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import spritesheet from "../../assets/spritesheet_rollover_button_youtube.png"
 
class Spritesheet_Youtube extends Component {
 
  render() {
 
    return (
      <Spritesheet
        image={spritesheet}
        widthFrame={200}
        heightFrame={200}
        steps={54}
        fps={24}
          autoplay={false}
        loop={true}
        getInstance={spritesheet => {
            this.spriteInstance = spritesheet;
          }}
        onMouseEnter={spritesheet => {
            spritesheet.play();
        }}
        onMouseLeave={spritesheet => {
          spritesheet.pause();
      }}
     />
    );
 }
 
}

export default Spritesheet_Youtube;