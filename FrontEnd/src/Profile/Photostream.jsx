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
  // let prevWidth = 0;
  const { id } = useParams();
  const [choice, setChoice] = useState('Date uploaded');
  const [photos, setRecPhotos] = useState([]);
  const [isloading, setLoading] = useState(true);
  const loggedUser = jwt(localStorage.getItem('token'));
  const currUser = (id === loggedUser.sub);
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
    axios.get(`/userPhotostream/${id}`, {})
      .then((resp) => {
        setLoading(false);
        setRecPhotos(resp.data.photoArray);
        // setFaveCounts(resp.data.favs);
      });
  }, []);
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
                    <Link to={`/profile/photostream/edit/${id}`} className="edit-link-uph">
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
                        <button className="fav-btn" type="button" id="faveButton" key={photo.photoId} onClick={ClickMe}>
                          <img
                            className="star"
                            src="https://img.icons8.com/android/24/ffffff/star.png"
                            alt="favIcon"
                          />
                        </button>
                        <span className="fav-count" id="favNum" key={photo.photoId}>
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
          </div>
        )}
      </div>
      )}
    </div>
  );
};
export default Photostream;
