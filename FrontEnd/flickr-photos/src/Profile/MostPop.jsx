import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './usefetch';
// import images from './imagesArray';

const MostPop = () => {
  const { data: mostPop } = useFetch('http://localhost:8002/mostPopPhotos');
  return (
    <div className="pop-photos-view">
      <div className="pop-container">
        <h4>Most popular photos</h4>
        <div className="dropdown" />
        {mostPop && Object.keys(mostPop).length !== 0 ? (
          <div className="grid-mp" id="pop-exist">
            {mostPop.map((image) => (
              <img className="grid-item-mp" src={image.src} alt="" />
            ))}
          </div>
        ) : (
          <div className="empty-pop" id="pop-false">
            <h3>Your most popular photos will appear here.</h3>
            <p>Set your photos to public for more faves, comments and views.</p>
            <p>For even ore exposure, add them to Groups</p>
            <p>
              <Link to="/cameraroll">
                Go to Camera Roll
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default MostPop;
