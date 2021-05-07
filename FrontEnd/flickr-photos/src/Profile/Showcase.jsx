import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './usefetch';
// import images from './imagesArray';

const Showcase = () => {
  const { data: showCase } = useFetch('http://localhost:8002/showcasePhotos');
  return (
    <div className="container-fluid">
      <div className="showcase-view">
        <div className="showcase">
          <div className="title-container">
            <p className="title-view">
              <span>Showcase</span>
            </p>
          </div>
          { showCase && Object.keys(showCase).length !== 0 ? (
            <div className="showcase-container" id="user-sc-full">
              {showCase.map((image) => (
                <img className="grid-item-sc" src={image.src} alt="" />
              ))}
            </div>
          )
            : (
              <div className="empty-showcase" id="user-sc-empty">
                <p>This is your showcase.</p>
                <p>Show off up to 25 of your photos.</p>
                <p>
                  <Link to="/photostream" className="get-started">Get Started</Link>
                </p>
              </div>
            )}
          <div className="divider" />
        </div>
      </div>
    </div>
  );
};
export default Showcase;
