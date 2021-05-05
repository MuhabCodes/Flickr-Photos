import React from 'react';
import { Link } from 'react-router-dom';
import images from './imagesArray';

const Showcase = () => (
  <div className="showcase-view">
    <div className="showcase">
      <div className="title-container">
        <p className="title-view">
          <span>Showcase</span>
        </p>
      </div>
      <div className="empty-showcase">
        <p>This is your showcase.</p>
        <p>Show off up to 25 of your photos.</p>
        <p>
          <Link to="/photostream" className="get-started">Get Started</Link>
        </p>
      </div>
      <div className="showcase-container">
        {images.map((image) => (
          <img className="grid-item" src={image.src} alt="" />
        ))}
      </div>
      <div className="divider" />
    </div>
  </div>
);
export default Showcase;
