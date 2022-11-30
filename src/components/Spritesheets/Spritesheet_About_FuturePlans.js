import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import spritesheet from "../../assets/spritesheet_rollover_button_futureplans.png";
 
class Spritesheet_About_FuturePlans extends Component {
 
  render() {
 
    return (
      <Spritesheet className='spritesheet-container'
        image={spritesheet}
        widthFrame={458}
        heightFrame={227}
        steps={42}
        fps={24}
        autoplay={false}
        loop={true}
        getInstance={
          spritesheet => {
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

export default Spritesheet_About_FuturePlans;