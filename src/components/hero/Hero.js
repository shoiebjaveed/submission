import React from 'react';
import './hero.css';
import B2 from '../banner/B2';
import Slanted from '../helpers/input/Slanted';
import About from '../about/About';

const HeroSection = () => {
  return (
    <>
{/* <Navbar /> */}
    <section className="hero-section">
      <div className="hero-text">
        <h1>Give your technology language</h1>
        <div className='inputs'>
        <Slanted title="Get Started" />
        <input
        className='second-input'
        value="contact us"
        disabled
      />
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
