import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// The RecentPhotos.jsx is the component which helps in displaying the recent photos,
// It includes the function 'RecentPhotos' which has a code the helps in fetching the photos from
// a mock server. This function returns the fetched images, but not all at once,
// but a couple at a time and the more the user scrolls down,
// the more images are fetched and displayed.
const RecentPhotos = () => {
  const [photos, setRecPhotos] = useState([]);
  // useEffect helps us fetch the photos from the mock server.
  useEffect(() => {
    fetch(' http://localhost:8000/photos')
      .then((res) => res.json())
      .then((data) => {
        setRecPhotos(data);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  }, []);
  // The following changes the photos(objects) to array that can be used by the .map
  // function in the return block.
  const photoArr = Array.from(photos);
  // The following if condition checks if no images are in photos (fetched), display loading.
  if (!photos) {
    return <h1>No Photos Found</h1>;
  }
  // The following part is the one returns the fetched images.
  // The ResponsiveMasonry component is used to make our grid responsive.
  // The masonry component is used to make the layout of the fetched images.
  // The lazy load Image component is used to display the images but not all at once,
  // when the user scrolls down more images are fetched to be displayed.
  // The next lines are to display the image description, username, faves and comments count
  // and the add to gallery button.
  return (

    <div className="recentPhotos">

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className="imageGrid">
          {photoArr.map((photo) => (
            <div className="singleImage" height={photo.height}>
              <LazyLoadImage
                effect="blur"
                key={photo.photoId}
                src={photo.imagePath}
                alt={photo.description}
                height={photo.height}
                style={{ width: '100%', display: 'block' }}
              />
              <span className="textArea">
                <span className="description">
                  {photo.description}
                  <br />
                  <br />
                </span>
                <span className="userName">
                  by
                  {' '}
                  {photo.user}
                </span>
                <span className="faves">
                  <div>
                    <button className="favBtn" type="button" id="faveButton">
                      <img
                        className="star"
                        src="https://img.icons8.com/android/24/ffffff/star.png"
                        alt="favIcon"
                      />
                    </button>
                  </div>
                  <span className="favCount">
                    {photo.favs}
                  </span>
                </span>
                <span className="comments">
                  <img src="https://img.icons8.com/ios/50/ffffff/topic.png" alt="commentIcon" width="25px" height="25px" />
                  {photo.comments}
                </span>
                <span className="addToGallery">
                  <img src="https://img.icons8.com/ios/50/ffffff/plus-2-math.png" alt="addToGallery" width="25px" height="25px" />
                </span>
              </span>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
export default RecentPhotos;
