import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

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
          <Link key={Photo.photoId} to="PHOTOURLHERE">
            <img className="" src={Photo.imagePath} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ExploreCard;