import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
  // The following if condition checks if no images are in photos (fetched), display loading.
  if (!photos) {
    return <h1>Loading ...</h1>;
  }
  // The following part is the one returns the fetched images, but not all at once.
  return (
    <div className="recentPhotos">
      {photos.map((photo) => (
        <LazyLoadImage
          effect="blur"
          src={photo.imagePath}
          alt={photo.description}
          key={photo.photoId}
          height={photo.height}
          width={photo.width}
          placeholderSrc={`${process.env.PUBLIC_URL}/logo192.png`}
        />
      ))}
    </div>
  );
};
export default RecentPhotos;
