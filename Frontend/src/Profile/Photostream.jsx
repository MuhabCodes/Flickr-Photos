/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import jwt from 'jwt-decode';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Photostream.css';

const Photostream = () => {
  axios.defaults.baseURL = 'https://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const { userId } = useParams();
  const [choice, setChoice] = useState('Date uploaded');
  const [photos, setRecPhotos] = useState([]);
  const [isloading, setLoading] = useState(true);
  const loggedUser = jwt(localStorage.getItem('token'));
  const currUser = (userId === loggedUser.userId);
  let userjwt = [];
  function loadPage() {
    if (localStorage.getItem('token')) {
      userjwt = jwt(localStorage.getItem('token'));
      $('.text-area').css('display', 'block');
    }
  }
  function ClickMe(e) {
    if (userjwt) {
      if (e.target.getAttribute('src') === 'https://img.icons8.com/android/24/ffffff/star.png') {
        e.target.setAttribute('src', 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png');
        // let FavesC = { faveCounts };
        // FavesC += 1;
        // axios.patch(`/photos?title=${search}`, FavesC)
        //   .then(() => {
        //     setFaveCounts(FavesC);
        //     history.push(`/search?title=${search}`);
        //   });
      } else if (e.target.getAttribute('src') === 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png') {
        e.target.setAttribute('src', 'https://img.icons8.com/android/24/ffffff/star.png');
      }
    }
  }
  useEffect(() => {
    if (userId) {
      axios.get(`/people/${userId}/photos/public`, {})
        .then((resp) => {
          setLoading(false);
          setRecPhotos(resp.data);
        // setFaveCounts(resp.data.favs);
        });
    }
  }, [userId]);
  const photoArr = Array.from(photos);
  const items = [
    'Date uploaded', 'Date taken',
  ];
  function onSelect(e) {
    setChoice(e.value);
  }
  return (
    <div className="photostream-container-uph">
      {!isloading && (
      <div>
        {!currUser && photoArr.length === 0 ? (
          <div className="empty-photostream-uph">
            <div className="flickr-empty-bg-uph">
              <div>
                <div className="actual-bg-uph" />
              </div>
            </div>
            <div className="wrap-disp-uph">
              <h3 className="empty-text-disp-uph">User has not made any photos public.</h3>
            </div>
          </div>
        ) : (
          <div>
            <div className="magic-tools-uph">
              <div className="magic-toolbar-uph">
                <div className="primary-tools-container-uph">
                  <div className="filter-tools-uph" id="dropdown-container-uph">
                    <Dropdown options={items} onChange={onSelect} value={choice} id="dropdown-btn-uph" />
                  </div>
                </div>
                <div className="secondary-tools-container-uph">
                  {currUser && (
                  <div className="edit-button-uph">
                    <Link to={`/profile/photostream/edit/${userId}`} className="edit-link-uph">
                      <span className="edit-icon-uph" />
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            </div>
            {currUser && photoArr.length === 0 && (
            <div className="empty-photostream-uph">
              <div className="flickr-empty-bg-uph-user">
                <div>
                  <div className="actual-bg-uph" />
                </div>
              </div>
              <div className="wrap-disp-uph">
                <h3 className="empty-text-disp-uph">
                  You have no public photos.
                </h3>
                <p className="limited-width-uph">Your photostream is your public-facing portfolio. Set your photos to public using the Camera Roll to populate your photostream.</p>
                <Link to="/Cameraroll" className="btn-cameraroll-uph">Go to Camera Roll</Link>
              </div>
            </div>
            )}
            <div className="photostream-area-uph">
              <div className="photo-grid-uph">
                {photoArr.map((photo) => (
                  <div className="photo-container-uph">
                    <LazyLoadImage
                      className="single-photo-uph"
                      src={photo.imageUrl}
                      alt=""
                      key={photo.secret}
                      onLoad={loadPage}
                    />
                    <span className="interaction-bar-uph" style={{ visibility: 'hidden' }}>
                      <span className="title-photo-uph">
                        <Link className="link-photoview-uph" to={`/../photoview/${photo._id}`}>
                          {photo.title}
                        </Link>
                      </span>
                      <span className="faves-view-uph">
                        <button className="fav-btn-uph" type="button" id="faveButton" key={photo.secret} onClick={ClickMe}>
                          <img
                            className="star"
                            src="https://img.icons8.com/android/24/ffffff/star.png"
                            alt="favIcon"
                          />
                        </button>
                        <span className="fav-count" id="favNum" key={photo.secret}>
                          {photo.favs}
                        </span>
                      </span>
                      <span className="comments-view-uph">
                        <img className="comment-icon" src="https://img.icons8.com/ios/50/ffffff/topic.png" alt="commentIcon" width="25px" height="25px" />
                      </span>
                    </span>

                  </div>
                ))}
                <div />
              </div>
            </div>
          </div>
        )}
      </div>
      )}
    </div>
  );
};
export default Photostream;
