import React from "react";
import SpriteSheet_Discord from "./Spritesheets/Spritesheet_Discord";
import SpriteSheet_Instagram from "./Spritesheets/Spritesheet_Instagram";
import SpriteSheet_Youtube from "./Spritesheets/Spritesheet_Youtube";
import SpriteSheet_Twitter from "./Spritesheets/Spritesheet_Twitter";
import '../styles/footer.scss';
import AudioPlayer from "./AudioPlayer";

const Footer = () => {
    return (
        <div>
            <hr class="footer-line" />
            <div class="footer">
                <div class="email-container">
                    <span class="email-label">Get on the list</span>
                        {/*<form id="email-submit" method="post" name="mc-embedded-subscribe-form" target="_blank" class="email-form">
                            <input id="email-address" class="email-input-text" type="email" placeholder="Email Address" name="EMAIL" required="" />
                            <button name="subscribe" class="email-submit" type="submit">→</button>
                        </form>*/}

                    <div class="email-form-container">
                        <form id="email-submit" method="post" name="mc-embedded-subscribe-form" target="_blank" class="email-form">
                            <input id="email-address" class="email-input-text" type="email" placeholder="Email Address" name="EMAIL" required="" />
                            <input name="subscribe" class="email-submit" type="submit" value="Click"/>
                        </form>
                    </div>
                </div>

                {/*<div>
                    <img class="img-fluid footer-logo" src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="logo" />
                    </div>*/}
                <div class="company-info">
                    <div class="socialmedialink-footer-container">
                        <div class="socialmedialink-footer">
                            <a href="https://twitter.com/TheOmniverse4" target="_blank">
                                <SpriteSheet_Youtube />
                            </a>
                        </div>
                        <div class="socialmedialink-footer">
                            <a href="https://twitter.com/TheOmniverse4" target="_blank">
                                <SpriteSheet_Instagram />
                            </a>
                        </div>
                        <div class="socialmedialink-footer">
                            <a href="https://twitter.com/TheOmniverse4" target="_blank">
                                <SpriteSheet_Discord />
                            </a>
                        </div>
                        <div class="socialmedialink-footer">
                            <a href="https://twitter.com/TheOmniverse4" target="_blank">
                                <SpriteSheet_Twitter />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p class="copyright"><span class="copy-left">© 2022 Laser Cats</span></p>
                    </div>
                </div>
            </div>
            <AudioPlayer />
        </div>
    );
}

export default Footer;