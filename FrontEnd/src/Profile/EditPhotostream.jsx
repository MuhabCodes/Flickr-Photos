import React from 'react';
import { EditText, EditTextarea } from 'react-edit-text';
import { Link } from 'react-router-dom';
import './EditPhotostream.css';
import back from './assets/back.png';
import trial from './assets/try.jpg';
import unlock from './assets/unlock.png';
import lock from './assets/lock.png';
import dcaret from './assets/downcaret.png';
import view from './assets/view.png';
import fave from './assets/fav.png';
import comm from './assets/comment.png';

const EditPhotostream = () => {
  function handleEditClick() {
    document.getElementById('tools-disp-euph').style.display = 'none';
    document.getElementById('editable-area-euph').style.height = '182px';
  }
  return (
    <div className="edit-photolist-container-euph">
      <div className="edit-toolbar-euph">
        <Link to="/Profile/Photostream" className="back-edit-euph">
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
        <div className="grid-item-euph" style={{ backgroundImage: `url(${trial})` }}>
          <div className="interactions-bar-placeholder-euph" />
          <div className="interaction-view-euph">
            <div className="photo-interaction-edit-euph">
              <Link className="overlay-direct-photo-euph" to={trial} />
              <button className="remove-photo-euph" type="button" aria-label="delete photo" />
              <div className="interaction-bar-euph" id="editable-area-euph">
                <div className="image-bar-euph">
                  <div className="title-desc-block-euph">
                    <EditText name="title-textbox-euph" style={{ outlineColor: '#209be3' }} defaultValue="Add title" value="meee" className="editable-photo-title-euph" onChange={handleEditClick} />
                    <EditTextarea name="desc-textarea-euph" style={{ borderColor: '#209be3' }} defaultValue="Add description" value="when" className="desc-text-euph" onChange={handleEditClick} />
                  </div>
                </div>
                <div className="interaction-tools-euph" id="tools-disp-euph">
                  <div className="tools-privacy-euph">
                    <img className="privacy-icon-euph" id="public-euph" src={unlock} alt="" />
                    <img className="privacy-icon-euph" id="private-euph" src={lock} alt="" style={{ display: 'none' }} />
                    <img className="down-caret-euph" src={dcaret} alt="" />
                  </div>
                  <div className="stats-tools-euph">
                    <div className="views-num-euph">
                      <img className="view-icon-euph" src={view} alt="" />
                      <span className="view-text-euph">8</span>
                    </div>
                    <div className="faves-num-euph">
                      <img className="fave-icon-euph" src={fave} alt="" />
                      <span className="fave-text-euph">20</span>
                    </div>
                    <div className="comments-num-euph">
                      <img src={comm} alt="" className="comment-icon-euph" />
                      <span className="comment-text-euph">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditPhotostream;
