import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import spritesheet from "../../assets/spritesheet_popup_futureplans.png";
import '../../styles/about.scss'
 
class Spritesheet_About_Popup_FuturePlans extends Component {
 
  render() {
 
    return (
      <Spritesheet className='spritesheet_about_popup_futureplans'
        image={spritesheet}
        widthFrame={1500}
        heightFrame={700}
        steps={6}
        fps={24}
        autoplay={true}
        loop={false}
        getInstance={
          spritesheet => {
            this.spriteInstance = spritesheet;
          }}
     />
    );
 }
 
}

export default Spritesheet_About_Popup_FuturePlans;