import React from 'react';
import Header from './header';
import Slider from './slider';

const Hero = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="/images/hero-bg.png" alt="" />
        </div>
      </div>
      <Header />
      <Slider />
    </div>
  );
};

export default Hero;
