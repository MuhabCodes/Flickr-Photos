/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import './PeopleCard.css';
import { Link } from 'react-router-dom';

const PeopleCard = (props) => {
  const prop = props;
  const { Profile } = prop;
  const name = Profile.displayName;
  const { avatar } = Profile;
  const { uName } = Profile;
  const bgImage = Profile.coverPhoto;
  const Pro = Profile.isPro;
  const handleClick = ((e) => {
    e.preventDefault();
  });
  return (
    <div className="people-card">
      <div className="upper-container">
        {/* Container for image of profiles */}
        <Link to="/ProfileURLHERE">
          {/* Redirects to profile */}
          <div className="card-img-container">
            <img className="card-img" src={bgImage} alt="" />
          </div>
        </Link>
      </div>
      <div className="lower-container">
        <div className="lower-container-left">
          {/* Contaianer for avatar and names of profiles */}
          <div className="avatar-img-container">
            <Link to="/ProfileURLHERE">
              <img src={avatar} alt="" className="avatar-img" />
            </Link>
          </div>
          <div className="profile-names">
            <Link to="/ProfileURLHERE">
              <div className="display-name">
                { name }
              </div>
            </Link>
            <div className="user-name">
              { uName }
            </div>
            {Pro ? <div className="pro-status-div">Pro</div> : null}
          </div>
        </div>
        <div className="lower-container-right">
          <button className="btn btn-primary btn-sm" id="people-card-follow-btn" type="button" onClick={handleClick}>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
