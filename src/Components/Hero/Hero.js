import React from 'react';
import './Hero.css';
import playicon from '../Background/Assets/music-play-button-icon-vector.jpg';

const Hero = ({ herodata, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
  return (
    <div className="Hero">

      {/* Hero Text */}
      <div className="hero-text">
        <p>{herodata.text1}</p>
        <p>{herodata.text2}</p>
      </div>

      {/* Explore button */}
      <div
        className="hero-explore"
        onClick={() => setPlayStatus(true)}
      >
        <p>Explore the feature</p>
        <img src={playicon} alt="play" />
      </div>

      {/* Dots Navigation */}
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[0, 1, 2].map((i) => (
            <li
              key={i}
              className={heroCount === i ? "active" : ""}
              onClick={() => {
                setHeroCount(i);      // Change image
                setPlayStatus(false); // Stop video
              }}
            ></li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Hero;
