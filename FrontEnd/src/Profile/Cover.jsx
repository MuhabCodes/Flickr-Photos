import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import configData from '../config.json';
import defaultC from './assets/whitebg.jpg';
import defaultA from './assets/av.jpg';
import './Cover.css';

const CoverArea = () => {
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Authorization = localStorage.getItem('token');
  const { id } = useParams();
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const userjwt = jwt(localStorage.getItem('token')); // getting token from local storage
  const [cover, setCover] = useState('');
  const [avatar, setAvatar] = useState('');
  const [firstN, setFirstN] = useState('');
  const [lastN, setLastN] = useState('');
  const [joined, setJoined] = useState('');
  const [photos, setPhotos] = useState('');
  const [dispN, setDispN] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [followingArr, setFollowingArr] = useState('');
  const currUser = (id === userjwt.sub);

  useEffect(() => {
    axios.get(`/Userinfo/${id}`, {
    }).then((resp) => {
      setLoading(false); // set loading to false as it is dont and fetched data
      setCover(resp.data.coverUrl);
      setAvatar(resp.data.avatarUrl);
      setFirstN(resp.data.firstName);
      setLastN(resp.data.lastName);
      setJoined(resp.data.Joined);
      setPhotos(resp.data.Photos);
      setDispN(resp.data.displayName);
      setFollowers(resp.data.Followers);
      setFollowing(resp.data.Following);
      setFollowingArr(resp.data.followingList);
      if (resp.data.coverUrl === '0') {
        setCover(defaultC); // setting default cover in case user hasn't set a cover
      }
      if (resp.data.avatarUrl === '0') {
        setAvatar(defaultA); // setting default avatar in case user hasn't set an avatar
      }
      if (resp.data.isPro === '0') { // checking whether user isPro to display or hide pro badge
        document.getElementById('pro-badge-cover').style.display = 'none';
      } else {
        document.getElementById('pro-badge-cover').style.display = 'flex';
      }
      return resp.data;
    }).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        history.push('/login');
      } else {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (followingArr.indexOf(id) > -1) {
      const ind = followingArr.indexOf(id);
      followingArr.splice(ind);
    } else {
      followingArr.push(id);
    }
    axios.patch(`/Userinfo/${userjwt.sub}`, { followingList: followingArr })
      .then(() => {
        history.push(0);
      }).catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        } else if (error.response.status === 404) {
          setTimeout(() => history.push('*'), 2000); // Redirect to Error page
        } else {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        }
      });
  };
  return (
    <div className="container-fluid">
      <div className="cover-cvup">
        {!isLoading && (
        <div
          className="changing-cover-photo-bg-cvup"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div className="cover-photo-gradient-cvup" />
          <div className="cover-content-cvup">
            <button type="button" className="cover-photo-editbutton-cvup">
              <img src="./assets/edit_icon.png" alt="" />
              edit
            </button>
            <div
              className="user-cover-avatar-cvup"
              style={{ backgroundImage: `url(${avatar})` }}
            />
            <div className="title-content-cvup">
              <div className="user-cover-title-cvup">
                <h1 className="user-cover-name-cvup">
                  {firstN}
                  {' '}
                  {lastN}
                </h1>
                {!currUser
                && (
                <div className="view-follow-view-cvup" id="follow-btn-cvup">
                  {followingArr.indexOf(id) > -1 ? (
                    <button type="submit" className="follow-btn-fluid-cvup" id="follow-btn-true-cvup" onClick={handleSubmit}>
                      <p id="following-btn-cvup">Following</p>
                    </button>
                  )
                    : (
                      <button type="submit" className="follow-btn-fluid-cvup" id="follow-btn-false-cvup" onClick={handleSubmit}>
                        <p id="plus-follow-btn-cvup">+ Follow</p>
                      </button>
                    )}
                </div>
                )}
              </div>
              <div className="follow-view-cvup">
                <a href="/account/upgrade/po" id="pro-badge-cover">
                  <p className="pro-badge-style-cvup">Pro</p>
                </a>
                <p className="user-cover-display-name-cvup">
                  {dispN}
                </p>
                <p className="following-followers-cover-list-cvup">
                  <Link className="following-user-cuvp" to={`/followers/${id}`}>
                    {followers}
                    {' '}
                    Followers
                  </Link>
                  {' '}
                  <em>•</em>
                  {' '}
                  {following}
                  {' '}
                  Following
                </p>
                <p className="cover-spacer-cvup" />
                <p className="user-cover-photo-count-cvup">
                  {photos}
                  {' '}
                  photos
                </p>
                <p className="user-cover-join-date-cvup">
                  joined
                  {' '}
                  {joined}
                </p>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
export default CoverArea;
