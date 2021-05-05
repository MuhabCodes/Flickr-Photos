import React from 'react';
import images from './imagesArray';

const Faves = () => (
  <div className="faves-view">
    <div className="faves-container">
      {images.map((image) => (
        <img className="grid-item-faves" src={image.src} alt="" />
      ))}
    </div>
  </div>
);

export default Faves;
