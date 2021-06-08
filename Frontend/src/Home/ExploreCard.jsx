import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

/**
 * ExploreCard of recent photos of website
 * @namespace HomePage.SideBar.ExploreCard
 * @example <ExploreCard />
 * @function ExploreCard
 * @returns ExploreCard of home page sidebar
 */

const ExploreCard = (props) => {
  const prop = props;
  let { ExplorePhotos } = prop;
  ExplorePhotos = ExplorePhotos.slice(0, 8);
  return (
    <div className="explore-card-main">
      <h6 className="side-bar-card-title">
        Explore popular photos
      </h6>
      <div className="images-container-explore-card">
        {ExplorePhotos.map((Photo) => (
          <Link className="images-container-explore-card-link" key={Photo.photoId} to={`/photoview/${Photo.photoId}`}>
            <img className="images-container-explore-card-img" src={Photo.imagePath} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ExploreCard;
