import React from 'react';
import Header from './Header';
import imageRoadmap from '../assets/roadmap.jpg';
import '../styles/roadmap.scss';

const Roadmap = () => {
    return (
        <div class = "roadmap-container">
            <Header />
            <div class = "roadmap">
                <img src = {imageRoadmap} />
            </div>
        </div>
    );
}

export default Roadmap;