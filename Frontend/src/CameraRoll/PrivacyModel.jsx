import React, { useState, useEffect } from 'react';
import './PrivacyModel.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// this function is to render the component that edit the photo privacy
/**
 * @module
 * @function PrivacyModel
 * @example </PrivacyModel>
 * @param {object} prop - have image id to be edited
 * @returns {null} - returns model of changing the privacy
 */
function PrivacyModel(prop) {
  const { imageid } = prop;
  console.log(imageid);
  // close the model when clicking close button or close sign
  function closeModel() {
    const modal = document.getElementById('privacyModel');
    modal.style.display = 'none';
  }

  const [privacy, setprivacy] = useState('');
  useEffect(() => {
    axios.get(`/cameraroll/${imageid}`)
      .then((resp) => {
        setprivacy(resp.data.privacy);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Privacy = {
      privacy,
    };
    axios.patch(`/cameraroll/${imageid}`, Privacy)
      .then((resp) => {
        console.log(resp);
      });
  };

  return (

    <>
      <div id="privacyModel" className="privacy-modal">
        {/*  eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span className="close" onClick={closeModel} onKeyDown={closeModel}>&times;</span>
        <div className="privacy-model-content">
          <h3>Change privacy?</h3>
          <form onSubmit={handleSubmit}>
            <br />
            <input
              type="radio"
              id="public"
              name="privacyRadio"
              className="privacy-checkbox"
              value="Public"
              onChange={(e) => {
                setprivacy(e.target.value);
              }}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="public">Public</label>

            <br />
            <input
              type="radio"
              id="private"
              name="privacyRadio"
              className="privacy-checkbox"
              value="Private"
              onChange={(e) => {
                setprivacy(e.target.value);
              }}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="private">Private</label>

            <br />
            <input
              type="radio"
              id="friends"
              name="privacyRadio"
              className="privacy-checkbox"
              value="Friends"
              onChange={(e) => {
                setprivacy(e.target.value);
              }}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="friends">Friends</label>

            <br />
            <input
              type="radio"
              id="family"
              name="privacyRadio"
              className="privacy-checkbox"
              value="Family"
              onChange={(e) => {
                setprivacy(e.target.value);
              }}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="family">Family</label>

            <br />
            <div className="privacy-model-buttons">
              <Button variant="secondary" onClick={closeModel}>Cancel</Button>
              {' '}
              <Button variant="primary" type="submit">Change</Button>
              {' '}
            </div>
          </form>
        </div>
      </div>
    </>

  );
}

export default PrivacyModel;
