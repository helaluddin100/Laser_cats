import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import spritesheet from "../../assets/spritesheet_rollover_button_enter.png"
 
class Spritesheet_Enter extends Component {
 
  render() {
 
    return (
      <Spritesheet className='spritesheet-container'
        image={spritesheet}
        widthFrame={321}
        heightFrame={72}
        steps={54}
        fps={24}
        autoplay={false}
        loop={true}
        direction={"forward"}
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

export default Spritesheet_Enter;