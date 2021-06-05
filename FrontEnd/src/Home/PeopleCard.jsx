/* eslint-disable no-unused-vars */

import { React, useState } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import './PeopleCard.css';
import { Link, useHistory } from 'react-router-dom';
import configData from '../config.json';

const PeopleCard = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const history = useHistory();
  const prop = props;
  const { Profile } = prop;
  const name = Profile.displayName;
  const { avatar } = Profile;
  const { uName } = Profile;
  const bgImage = Profile.coverPhoto;
  const Pro = Profile.isPro;
  const { userId } = Profile;
  const { id } = Profile;
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Authorization = localStorage.getItem('token'); // Applying global default settings from axios
  // For not rendering of text boxes until user info gets fetched
  const userjwt = jwt(localStorage.getItem('token'));
  const handleClick = ((e) => {
    const idToFollow = id;
    console.log(id);
    e.preventDefault();
    if (!isFollowed) {
      axios.post('/follow', id) // No doc so we assume that we send id to follow in body
        .then(() => {
          setIsFollowed(true);
        }).catch((error) => {
          if (error.response.status === 401) {
            localStorage.removeItem('token'); // remove token and redirect to login if not authorized
            setTimeout(() => history.push('/login'), 100); // Redirect to Error page
          } else if (error.response.status === 404) {
            setTimeout(() => history.push('*'), 100); // Redirect to Error page
          }
        });
    } else if (isFollowed) {
      axios.post('/unfollow', id) // No doc so we assume that we send id to unfollow in body
        .then(() => {
          setIsFollowed(false);
        }).catch((error) => {
          if (error.response.status === 401) {
            localStorage.removeItem('token'); // remove token and redirect to login if not authorized
            setTimeout(() => history.push('/login'), 100); // Redirect to Error page
          } else if (error.response.status === 404) {
            setTimeout(() => history.push('*'), 100); // Redirect to Error page
          }
        });
    }
  });
  return (
    <div className="people-card">
      <div className="upper-container">
        {/* Container for image of profiles */}
        <Link to={`/Profile/PhotoStream/${userId}`}>
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
            <Link to={`/Profile/PhotoStream/${userId}`}>
              <img src={avatar} alt="" className="avatar-img" />
            </Link>
          </div>
          <div className="profile-names">
            <Link to={`/Profile/PhotoStream/${userId}`}>
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
            { isFollowed ? 'Followed' : 'Follow' }
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
