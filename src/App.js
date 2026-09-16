import React, { useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import './App.css';

function App() {
  // Hero text for each slide
  const herodata = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Explore more", text2: "of your passion" },
    { text1: "Discover", text2: "new horizons" }
  ];

  // State
  const [heroCount, setHeroCount] = useState(0);       // Current slide
  const [playStatus, setPlayStatus] = useState(false); // Video play status

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        herodata={herodata[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  );
}

export default App;
