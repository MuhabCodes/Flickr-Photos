import React, { useState, useEffect } from 'react';
import { EditText /* EditTextarea */ } from 'react-edit-text';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './EditPhotostream.css';
import back from './assets/back.png';
import unlock from './assets/unlock.png';
import lock from './assets/lock.png';
import dcaret from './assets/downcaret.png';
import view from './assets/view.png';
import fave from './assets/fav.png';
import comm from './assets/comment.png';

const EditPhotostream = () => {
  let translateW = 0;
  let translateH = 0;
  axios.defaults.baseURL = 'https://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState('');
  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      axios.get(`/people/${userId}/photos/public`, {})
        .then((resp) => {
          setIsLoading(false);
          setPhotos(resp.data);
        // setFaveCounts(resp.data.favs);
        });
    }
  }, [userId]);
  const photoArr = Array.from(photos);
  function handleChangeVal() {
    if (translateW === 1216) {
      translateW = 0;
      translateH += 405;
    } else {
      translateW += 304;
    }
  }
  return (
    <div className="edit-photolist-container-euph">
      {!isLoading && (
      <div>
        <div className="edit-toolbar-euph">
          <Link to={`/Profile/Photostream/${userId}`} className="back-edit-euph">
            <img src={back} alt="" className="back-arrow-euph" />
            <span className="back-edit-text-euph">Back to photostream</span>
          </Link>
          <span className="edit-in-organizer-euph">
            Edit in
            <Link to="/CameraRoll" className="edit-linktext-euph"> Camera Roll </Link>
            or
            <Link to="/photos/organize" className="edit-linktext-euph"> Organizr</Link>
          </span>
        </div>
        <div className="photolist-view-edit-euph">
          {photoArr.map((image) => (
            <div className="grid-item-euph" style={{ backgroundImage: `url(${image.imageUrl})`, minHeight: '402px', transform: `translate(${translateW}, ${translateH})` }}>
              {handleChangeVal}
              <div className="interactions-bar-placeholder-euph" />
              <div className="interaction-view-euph">
                <div className="photo-interaction-edit-euph">
                  <Link className="overlay-direct-photo-euph" to={image.imageUrl} />
                  <button className="remove-photo-euph" type="button" aria-label="delete photo" />
                  <div className="interaction-bar-euph" id="editable-area-euph">
                    <div className="image-bar-euph">
                      <div className="title-desc-block-euph">
                        <EditText name="title-textbox-euph" style={{ outlineColor: '#209be3' }} defaultValue="Add title" value={image.title} className="editable-photo-title-euph" />
                        {/* <EditTextarea name="desc-textarea-euph" style={{
                          borderColor: '#209be3' }} defaultValue="Add description"
                        value={image.description} className="desc-text-euph" /> */}
                      </div>
                    </div>
                    <div className="interaction-tools-euph" id="tools-disp-euph">
                      <div className="tools-privacy-euph">
                        {image.isPublic ? (<img className="privacy-icon-euph" id="public-euph" src={unlock} alt="" />) : (
                          <img className="privacy-icon-euph" id="private-euph" src={lock} alt="" />)}
                        <img className="down-caret-euph" src={dcaret} alt="" />
                      </div>
                      <div className="stats-tools-euph">
                        <div className="views-num-euph">
                          <img className="view-icon-euph" src={view} alt="" />
                          <span className="view-text-euph">{image.views}</span>
                        </div>
                        <div className="faves-num-euph">
                          <img className="fave-icon-euph" src={fave} alt="" />
                          <span className="fave-text-euph">{image.favs}</span>
                        </div>
                        <div className="comments-num-euph">
                          <img src={comm} alt="" className="comment-icon-euph" />
                          <span className="comment-text-euph">{image.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};
export default EditPhotostream;
