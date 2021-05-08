import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './usefetch';
import './Showcase.css';
// import images from './imagesArray';

const Showcase = () => {
  const { data: showCase } = useFetch('http://localhost:8002/showcasePhotos');
  return (
    <div className="container-fluid">
      <div className="showcase-view-scP">
        <div className="showcase-scP">
          <div className="title-container-scP">
            <p className="title-view-scP">
              <span>Showcase</span>
            </p>
          </div>
          { showCase && Object.keys(showCase).length !== 0 ? (
            <div className="showcase-container-scP" id="user-sc-full">
              {showCase.map((image) => (
                <img className="grid-item-scP" src={image.src} alt="" />
              ))}
            </div>
          )
            : (
              <div className="empty-showcase-scP" id="user-sc-empty">
                <p className="empty-title-scP">This is your showcase.</p>
                <p className="empty-title-scP">Show off up to 25 of your photos.</p>
                <p className="empty-title-scP">
                  <Link className="link-scP" to="/photostream">Get Started</Link>
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
