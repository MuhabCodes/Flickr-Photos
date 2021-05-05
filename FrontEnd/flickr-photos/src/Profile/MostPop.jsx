import React from 'react';
// import { Link } from 'react-router-dom';
import images from './imagesArray';

const MostPop = () => (
  <div className="pop-photos-view">
    <div className="pop-container">
      <h4>Most popular photos</h4>
      <div className="dropdown" />
      <div className="grid-mp" id="pop-exist">
        {images.map((image) => (
          <img className="grid-item-mp" src={image.src} alt="" />
        ))}
      </div>
      {/* <div className="empty-pop" id="pop-false">
        <h3>Your most popular photos will appear here.</h3>
        <p>Set your photos to public for more faves, comments and views.</p>
        <p>For even ore exposure, add them to Groups</p>
        <p>
          <Link to="/cameraroll">
            Go to Camera Roll
          </Link>
        </p>
        </div> */}
    </div>
  </div>
);

export default MostPop;
