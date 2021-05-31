import React from 'react';
import './EditModel.css';
import Button from 'react-bootstrap/Button';

function EditModel() {
  function closeModel() {
    const modal = document.getElementById('editmodel');
    modal.style.display = 'none';
  }
  return (
    <div>
      <div id="editmodel" className="edit-modal">
        {/*  eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <span className="close" onClick={closeModel} onKeyDown={closeModel}>&times;</span>

        <div className="edit-model-content">
          <h4>Editting 1 photo</h4>
          <br />
          <form action="">
            <input type="text" id="fname" name="firstname" placeholder="Change title" />
            <input type="text" id="fname" name="firstname" placeholder="Change discription" />
            <br />
            <br />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="privacy">Who can see this photo</label>
            <select name="privacy" id="privacy" className="edit-select">
              <option value="public">public</option>
              <option value="private">Private</option>
              <option value="friends">Friends</option>
              <option value="family">Family</option>
            </select>
            <br />

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="comment">Who can comment on this photo</label>
            <select name="comment" id="comment" className="edit-select">
              <option value="you">Only you</option>
              <option value="friendsfamily">Friends & Family</option>
              <option value="followers">People you follow</option>
              <option value="members">Any flickr member</option>
            </select>
            <br />

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="tags">Who can add tags and people to this photo</label>
            <select name="tags" id="tags" className="edit-select">
              <option value="you">Only you</option>
              <option value="friendsfamily">Friends & Family</option>
              <option value="followers">People you follow</option>
              <option value="members">Any flickr member</option>
            </select>
            <br />

            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="datetaken">
              <i className="fas fa-camera" />
              {' '}
              Date Taken
            </label>
            <input id="datetaken" type="datetime-local" name="datetaken" className="edit-select" />
            <br />
            <br />
            <br />
            <div className="edit-model-buttons">
              <Button variant="secondary" onClick={closeModel}>Cancel</Button>
              {' '}
              <Button variant="primary">Change</Button>
              {' '}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModel;
