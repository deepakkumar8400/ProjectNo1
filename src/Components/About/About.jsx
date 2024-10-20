import React from 'react';
import aboutImage from '../../assets/about.png';
import playIcon from '../../assets/play-icon.png';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <div className="image-container">
          <img src={aboutImage} alt="University" className="about-image" />
          <img src={playIcon} alt="Play Icon" className="play-icon" />
        </div>
      </div>

      <div className="about-right">
        <h3>About University</h3>
        <p>
          Welcome to our university, where we foster an environment of growth, learning, and innovation.
          Our mission is to provide a world-class education and create future leaders in various fields.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

export default About;
