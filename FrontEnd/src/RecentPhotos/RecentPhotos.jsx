import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';
import $ from 'jquery';
import jwt from 'jwt-decode';
import CheckLoggedIn from '../CheckLoggedIn';
// The RecentPhotos.jsx is the component which helps in displaying the recent photos,
// It includes the function 'RecentPhotos' which has a code the helps in fetching the photos.
// This function returns the fetched images, but not all at once,
// but a couple at a time and the more the user scrolls down,
// the more images are fetched and displayed.
// Furthermore, if the user logged in, he can see each photo's details
// (username, image's title, fav button, fav count and comment count)
// Meanwhile, if the user is a guest (not logged in), he cannot see these details.

const RecentPhotos = () => {
  const [photos, setRecPhotos] = useState([]); // sets the images fetched
  const [loading, setLoading] = useState(false); // for loading purpose
  // The following loadPage function, checks if the user is a guest or logged in and displays
  // images details accordingly.
  let userjwt = [];
  function loadPage() {
    if (CheckLoggedIn()) {
      userjwt = jwt(localStorage.getItem('token'));
      $('.text-area').css('display', 'block');
    }
  }
  // useEffect helps us fetch the photos from the server.
  useEffect(() => {
    axios.get('/photosExplore?_sort=dateUploaded&_order=desc')
      .then((resp) => {
        setLoading(false);
        setRecPhotos(resp.data);
      });
  }, []);
  // The following changes the photos(objects) to array that can be used by the .map
  // function in the return block.
  const photoArr = Array.from(photos);
  // The following function toggles the fave icon on click
  function ClickMe(e) {
    if (userjwt) {
      if (e.target.getAttribute('src') === 'https://img.icons8.com/android/24/ffffff/star.png') {
        e.target.setAttribute('src', 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png');
      } else if (e.target.getAttribute('src') === 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png') {
        e.target.setAttribute('src', 'https://img.icons8.com/android/24/ffffff/star.png');
      }
    }
  }

  // The following if condition checks if no images are in photos (fetched), display loading.
  if (loading) {
    return <h1>Loading</h1>;
  }
  // The following part returns the fetched images.
  // The lazy load Image component is used to display the images but not all at once,
  // when the user scrolls down more images are fetched to be displayed.
  // The next lines are to display the image title, username, faves and comments count
  // when hovering on an image
  return (
    <div className="recent-photos">
      <div className="image-grid">
        {photoArr.map((photo) => (
          <div className="image-container">
            <LazyLoadImage
              className="single-image"
              src={photo.imagePath}
              alt=""
              key={photo.photoId}
              onLoad={loadPage}
            />
            <span className="text-area" style={{ display: 'none' }}>
              <span className="title-exp">
                {photo.title}
              </span>
              <span className="user-name-explore">
                by
                {' '}
                {photo.user}
              </span>
              <span className="faves">
                <button className="fav-btn" type="button" id="fave-button" key={photo.photoId} onClick={ClickMe}>
                  <img
                    className="star"
                    src="https://img.icons8.com/android/24/ffffff/star.png"
                    alt="favIcon"
                  />
                </button>
                <span className="fav-count" id="fav-num" key={photo.photoId}>
                  {photo.favs}
                </span>
              </span>
              <span className="comments">
                <img className="comment-icon" src="https://img.icons8.com/ios/50/ffffff/topic.png" alt="commentIcon" width="25px" height="25px" />
                {photo.comments}
              </span>
            </span>

          </div>
        ))}
        <div />
      </div>
    </div>
  );
};
export default RecentPhotos;
