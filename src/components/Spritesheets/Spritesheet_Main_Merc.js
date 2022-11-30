import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import spritesheet from "../../assets/spritesheet_rollover_merc_cs.png";
 
class Spritesheet_Main_Merc extends Component {
 
  render() {
 
    return (
      <Spritesheet className='spritesheet-container'
        image={spritesheet}
        widthFrame={694}
        heightFrame={467}
        steps={54}
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

export default Spritesheet_Main_Merc;