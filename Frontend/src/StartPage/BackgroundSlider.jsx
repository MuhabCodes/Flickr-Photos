import React from 'react';
import BackgroundSlider from 'react-background-slider';
import img2 from './img1.jpg';
import img1 from './img6.jpg';
import img3 from './img2.jpg';

export default function BackgroundSlide() {
  return (
    <BackgroundSlider
      images={[img1, img2, img3]}
      duration={10}
      transition={0}
    />

  );
}
