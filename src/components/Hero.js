import React from 'react';
import '../Hero.css';
import heroImage from '../HeroBackground.jpg'; // Update with your image path

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Welcome to My Website</h1>
        <p>Explore my work and projects</p>
      </div>
    </div>
  );
}

export default Hero;
