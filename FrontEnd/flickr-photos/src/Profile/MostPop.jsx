import React from 'react';
import images from './imagesArray';

const MostPop = () => (
  <div className="pop-photos-view">
    <div className="pop-container">
      <h4>Most popular photos</h4>
      <div className="dropdown" />
      <div className="grid">
        {images.map((image) => (
          <img className="grid-item" src={image.src} alt="" />
        ))}
      </div>
    </div>
  </div>
);

export default MostPop;
