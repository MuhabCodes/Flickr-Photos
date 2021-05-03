import React from 'react';
import images from './imagesArray';

const Showcase = () => (
  <div className="showcase-view">
    <div className="showcase">
      <div className="title-container">
        <p className="title-view">
          <span>Showcase</span>
        </p>
      </div>
      <div lassName="showcase-container">
        {images.map((image) => (
          <img className="grid-item" src={image.src} alt="" />
        ))}
      </div>
      <div className="divider" />
    </div>
  </div>
);
export default Showcase;
