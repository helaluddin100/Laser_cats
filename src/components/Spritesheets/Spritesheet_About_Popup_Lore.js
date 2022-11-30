import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import spritesheet from "../../assets/spritesheet_popup_lore.png";
import '../../styles/about.scss'
import About from '../About'
 
class Spritesheet_About_Popup_Lore extends Component {
 
  render() {
 
    return (
      <Spritesheet className='spritesheet_about_popup_lore'
        image={spritesheet}
        widthFrame={1500}
        heightFrame={700}
        width={3000}
        steps={6}
        fps={24}
        autoplay={true}
        loop={false}
        getInstance={
          spritesheet => {
            this.spriteInstance = spritesheet;
          }}

          onEnterFrame={[
            {
              frame: 5,
              callback: (() => {
                <About showInfoText={true} />
              })
            }
          ]}
     />
    );
 }
 
}

export default Spritesheet_About_Popup_Lore;