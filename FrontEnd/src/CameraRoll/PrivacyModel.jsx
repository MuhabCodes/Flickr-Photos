import React from 'react';
import './PrivacyModel.css';
import Button from 'react-bootstrap/Button';

function PrivacyModel() {
  function closeModel() {
    const modal = document.getElementById('privacyModel');
    modal.style.display = 'none';
  }
  return (

    <>
      <div id="privacyModel" className="privacy-modal">
        {/*  eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span className="close" onClick={closeModel} onKeyDown={closeModel}>&times;</span>
        <div className="privacy-model-content">
          <h3>Change privacy?</h3>

          <br />
          <input type="radio" id="public" name="privacyRadio" className="privacy-checkbox" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="public">Public</label>

          <br />
          <input type="radio" id="private" name="privacyRadio" className="privacy-checkbox" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="private">Private</label>

          <br />
          <input type="radio" id="friends" name="privacyRadio" className="privacy-checkbox" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="friends">Friends</label>

          <br />
          <input type="radio" id="family" name="privacyRadio" className="privacy-checkbox" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="family">Public</label>

          <br />
          <input type="radio" id="friendfamily" name="privacyRadio" className="privacy-checkbox" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="friendfamily">Friends & Family</label>
          <br />
          <div className="privacy-model-buttons">
            <Button variant="secondary" onClick={closeModel}>Cancel</Button>
            {' '}
            <Button variant="primary">Change</Button>
            {' '}
          </div>
        </div>
      </div>
    </>

  );
}

export default PrivacyModel;
