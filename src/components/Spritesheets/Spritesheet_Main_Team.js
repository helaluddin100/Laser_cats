import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import spritesheet from "../../assets/spritesheet_rollover_team.png";
 
class Spritesheet_Main_Team extends Component {
 
  render() {
 
    return (
      <Spritesheet className='spritesheet-container'
        image={spritesheet}
        widthFrame={90}
        heightFrame={364}
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

export default Spritesheet_Main_Team;