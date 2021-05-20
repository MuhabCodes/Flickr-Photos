import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './usefetch';
import './Showcase.css';
// import images from './imagesArray';

const Showcase = () => {
  const { data: showCase } = useFetch('http://localhost:8002/showcasePhotos');
  return (
    <div className="container-fluid">
      <div className="showcase-view-scp">
        <div className="showcase-scp">
          <div className="title-container-scp">
            <p className="title-view-scp">
              <span>Showcase</span>
            </p>
          </div>
          { showCase && Object.keys(showCase).length !== 0 ? (
            <div className="showcase-container-scp" id="user-sc-full">
              {showCase.map((image) => (
                <img className="grid-item-scp" src={image.src} alt="" />
              ))}
            </div>
          )
            : (
              <div className="empty-showcase-scp" id="user-sc-empty">
                <p className="empty-title-scp">This is your showcase.</p>
                <p className="empty-title-scp">Show off up to 25 of your photos.</p>
                <p className="empty-title-scp">
                  <Link className="link-scp" to="/photostream">Get Started</Link>
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
