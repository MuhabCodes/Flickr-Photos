/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import './AddModalShowcase.css';

const AddModalShowcase = () => {
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const history = useHistory();
  const [photos, setRecPhotos] = useState([]);
  const [isloading, setLoading] = useState(true);
  const { userId } = useParams();
  let translateW = 20;
  let translateH = 10;
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
  function handleDelete(photoId) {
    const sendVal = { photoId };
    axios.defaults.headers.authorization = localStorage.getItem('token');
    axios.defaults.baseURL = 'http://api.flick.photos';
    axios.delete(`/people/${userId}/showcase`, sendVal)
      .then(() => {
        history.go(0);
      }).catch((errors) => {
        console.log(errors);
      });
  }
  function handleSubmit(photoId) {
    axios.defaults.headers.authorization = localStorage.getItem('token');
    axios.defaults.baseURL = 'http://api.flick.photos';
    const sendVal = { photoId };
    axios.post(`/people/${userId}/showcase`, sendVal)
      .then(() => {
        history.go(0);
      }).catch((error) => {
        if (error.response.status === 403) {
          handleDelete('60bf0da818b7441792295812');
        }
      });
  }
  const handleChange = (e) => {
    e.preventDefault();
    handleSubmit(e.target.value);
  };
  function calcTranslate() {
    if (translateW === 1025) {
      translateW = 20;
      translateH += 202;
    } else {
      translateW += 201;
    }
  }
  return (
    <div>
      {!isloading && (
      <div className="modal-view-scp">
        <div className="head-scp">
          <div className="nav-modal-scp">
            <div className="fluid-nav-modal-scp">
              <div className="fluid-modal-nav-bar-scp">
                <div className="fluid-nav-modal-content-scp">
                  <ul className="links-nav-modal-scp">
                    <li className="menu-item-scp">
                      <a className="link-item-scp" href="/">Photostream</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-lines-scp">
          <div className="content-subview-mscp">
            <div className="photo-view-selector-mscp">
              {photoArr.length === 0 ? (
                <div className="photoselector-title-bar-mscp">
                  <div className="title-mscp">No public photos</div>
                </div>
              ) : (
                <div className="photo-selector-wrapper-mscp">
                  <div className="photo-selecor-mscp">
                    <div className="photo-selector-container-mscp">
                      <div className="view-photo-list-view-mscp">
                        {photoArr.map((image) => (
                          <div className="photo-view-mscp" style={{ backgroundImage: `url(${image.imageUrl})`, minHeight: '182px', transform: `translate(${translateW}px, ${translateH}px)` }}>
                            {calcTranslate()}
                            <Checkbox className="checkbox-image-mscp" onChange={(e) => { handleChange(e); }} inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" value={image._id} />
                            <div className="interaction-view-mscp">
                              <div className="photolist-interaction-mscp">
                                <div className="square-mscp" />
                                <div className="interaction-bar-mscp">
                                  <div className="interaction-text-mscp">
                                    <Link className="photo-title-mscp" to="/photo">{image.title}</Link>
                                    {/* <Link className="photo-owner-mscp
                                  " to="/user">by bkah blah</Link> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer-mscp">
          <div className="buttons-mscp">
            <div className="footer-text-container-mscp">
              <div className="footer-text-mscp">
                Choose a photo
              </div>

            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
export default AddModalShowcase;
