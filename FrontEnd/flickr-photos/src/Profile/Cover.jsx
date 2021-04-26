import React from 'react';
import background from './assets/shapes_heart.png';
import avatar from './assets/logo192.png';

const CoverArea = () => (
  <div className="cover">
    <div
      className="changing-cover-photo-bg"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="cover-photo-gradient" />
      <div className="cover-content">
        <button type="button" className="cover-photo-editbutton">
          <img src="./assets/edit_icon.png" alt="" />
          edit
        </button>
        <div
          className="user-cover-avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        />
        <div className="title-content">
          <div className="user-cover-title">
            <h1 className="user-cover-name">Manar Nassef</h1>
          </div>
          <div className="follow-view">
            <p className="user-cover-display-name">manarr__</p>
            <p className="following-followers-cover-list">
              989 following
              {' '}
              <em>•</em>
              {' '}
              1000 following
            </p>
            <p className="cover-spacer" />
            <p className="user-cover-photo-count">50 photos</p>
            <p className="user-cover-join-date">joined 2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CoverArea;
