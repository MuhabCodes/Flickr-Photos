import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './usefetch';
import './MostPop.css';
// import images from './imagesArray';

const MostPop = () => {
  const { data: mostPop } = useFetch('http://localhost:8002/mostPopPhotos');
  return (
    <div className="pop-photos-view-mp">
      <div className="pop-container-mp">
        <h4 className="h4-mp">Most popular photos</h4>
        <div className="dropdown-mp" />
        {mostPop && Object.keys(mostPop).length !== 0 ? (
          <div className="grid-mp" id="pop-exist">
            {mostPop.map((image) => (
              <img className="grid-item-mp" src={image.src} alt="" />
            ))}
          </div>
        ) : (
          <div className="empty-pop-mp" id="pop-false">
            <h3 className="h3-mp">Your most popular photos will appear here.</h3>
            <p className="p-mp">Set your photos to public for more faves, comments and views.</p>
            <p className="p-mp">For even ore exposure, add them to Groups</p>
            <p>
              <Link className="link-mp" to="/cameraroll">
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
