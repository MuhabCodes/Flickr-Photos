import { Link } from 'react-router-dom';
import React from 'react';
import './NotFound.css';

const NotFoundExplore = (props) => {
  const prop = props;
  let { images } = prop;
  images = images.slice(0, 18); // Limit photos to just 18
  return (
    <div className="lower404Container">
      { /* container of all images */}
      <div className="imagesContainer404">
        { images.map((image) => (
          <Link to="imgURLHERE">
            <img key={image.photoId} src={image.imagePath} alt="" className="image404Style" />
          </Link>
        ))}
      </div>
      <div className="exploreButton">
        <Link to="Explore">
          <button className="viewMoreButton" type="button">View more photos</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundExplore;
