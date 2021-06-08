import { Link } from 'react-router-dom';
import React from 'react';
import './NotFound.css';

const NotFoundExplore = (props) => {
  const prop = props;
  let { images } = prop;
  images = images.slice(0, 18); // Limit photos to just 18
  return (
    <div className="lower-404-container">
      { /* container of all images */}
      <div className="images-container-404">
        { images.map((image) => (
          <Link className="link-img-container-404" to="imgURLHERE">
            <img key={image.photoId} src={image.imagePath} alt="" className="image-404-style" />
          </Link>
        ))}
      </div>
      <div className="explore-button">
        <Link className="view-more-button-link" to="Explore">
          <button className="view-more-button" type="button">View more photos</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundExplore;
