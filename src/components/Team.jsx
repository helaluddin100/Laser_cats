import React from "react";
import Header from "./Header";
import '../styles/team.scss';
import cat1Image from '../assets/cat1.jpg';
import cat2Image from '../assets/cat2.jpg';
import cat3Image from '../assets/cat3.jpg';
import cat4Image from '../assets/cat4.jpg';

const Team = () => {
    return (
        <div class = "team-container">
            <Header />
            <div class = "team">
                <div class = "team-title">
                    <h1>
                        The Omniverse Four
                    </h1>
                    <h2>
                        The team at Omniverse is made up of artists, engineers, and creatives that have been working in the video game and film/animation industry for twenty plus years.
                    </h2>
                </div>
                <div class = "team-images">
                    <span class="mem-image">
                        <img src= {cat1Image} />
                        <p>
                            <span class="mem-title">The One - Overlord</span>
                            <br/>Art Director/Design Lead
                        </p>
                    </span>
                    <span class="mem-image">
                        <img src= {cat2Image} />
                        <p>
                            <span class="mem-title">Number 2</span>
                            <br/>Second in Command - Technical Director
                        </p>
                    </span>
                    <span class="mem-image">
                        <img src= {cat3Image} />
                        <p>
                            <span class="mem-title">Nightwolf</span>
                            <br/>Night gamer - Lead Producer
                        </p>
                    </span>
                    <span class="mem-image">
                        <img src= {cat4Image} />
                        <p>
                            <span class="mem-title">Fingers</span>
                            <br/>Makes money with keystrokes - Lead Engineer
                        </p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Team;