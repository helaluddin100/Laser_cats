import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import spritesheet from "../../assets/spritesheet_loading.png";
import '../../styles/index.scss'
 
class Spritesheet_Loading extends Component {
 
  render() {
 
    return (
      <Spritesheet className='spritesheet-loading'
        image={spritesheet}
        widthFrame={576}
        heightFrame={324}
        steps={50}
        fps={24}
        autoplay={true}
        loop={true}
        getInstance={
          spritesheet => {
            this.spriteInstance = spritesheet;
          }}
     />
    );
 }
}

export default Spritesheet_Loading;