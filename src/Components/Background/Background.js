import React from 'react';
import './Background.css';
import video1 from './Assets/12698110_4070_2160_24fps (1).mp4';
import img1 from './Assets/pexels-lynxexotics-3802510.jpg';
import img2 from './Assets/samuele-errico-piccarini-FMbWFDiVRPs-unsplash.jpg';
import img3 from './Assets/pexels-sebastiaan9977-17454902.jpg';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="Background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    )
  }

  if (heroCount === 0) return <img src={img1} className="background" alt="" />;
  if (heroCount === 1) return <img src={img2} className="background" alt="" />;
  if (heroCount === 2) return <img src={img3} className="background" alt="" />;

  return null;
}

export default Background;
