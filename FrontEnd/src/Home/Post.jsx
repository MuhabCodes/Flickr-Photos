/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import Moment from 'react-moment';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import './Post.css';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { grey } from '@material-ui/core/colors';
import configData from '../config.json';

const Post = (props) => {
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json'; // Applying global default settings from axios
  axios.defaults.headers.authorization = localStorage.getItem('token');
  const history = useHistory();
  const [isFaved, setIsFaved] = useState(false);
  const prop = props;
  const { post } = prop;
  const { userName } = post;
  const { userAvatar } = post;
  const { title } = post;
  const { photoId } = post;
  const { ownerId } = post;
  const { photoUrl } = post;
  const { description } = post;
  const { faves } = post;
  const { comments } = post;
  const { isPro } = post;
  const { uploadDate } = post;
  const [favCount, setFavCount] = useState(faves);
  const handleFave = (e) => {
    if (!isFaved) {
      axios.post(`/favorites/${photoId}`)
        .then(() => {
          setIsFaved(true);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            localStorage.removeItem('token');
            history.push('/login'); // If unauth error then redirect to login and clear token
          }
        });
    } else {
      axios.delete(`/favorites/${photoId}`)
        .then(() => {
          setIsFaved(false);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            localStorage.removeItem('token');
            history.push('/login'); // If unauth error then redirect to login and clear token
          }
        });
    }
  };
  return (
    <div className="post-main-container">
      <div className="post-upper-container">
        <div className="post-upper-container-left">
          {/* Contaianer for avatar and names of profiles */}
          <div className="avatar-img-container">
            <Link to={`/Profile/PhotoStream/${ownerId}`}>
              <img src={userAvatar} alt="" className="post-avatar-img" />
            </Link>
          </div>
          <div className="post-pro-name-div">
            <div className="post-profile-name">
              <Link to={`/Profile/PhotoStream/${ownerId}`}>
                <div className="post-user-name">
                  { userName }
                </div>
              </Link>
              {isPro ? <div className="post-pro-status-div">Pro</div> : null}
            </div>
            <div className="post-time-div">
              <Moment fromNow>{uploadDate}</Moment>
            </div>
          </div>
        </div>
      </div>
      <div className="post-photo-container">
        <Link to={`/photoview/${photoId}`}>
          <img src={photoUrl} alt="" className="post-photo-class" />
        </Link>
      </div>
      <div className="post-middle-container">
        <div className="post-photo-title">
          { title }
        </div>
        <div className="post-photo-description">
          { description }
        </div>
      </div>
      <div className="posts-bottom-container">
        <div className="posts-comment-button">
          <Link to={`/photoview/${photoId}`}>
            <button type="button" id="post-comment-button">
              <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 18, color: grey }} />
            </button>
          </Link>
          <div className="post-comment-count">
            { comments }
          </div>
        </div>
        <div className="posts-fav-button">
          <button type="button" id="post-fave-button" onClick={handleFave}>
            <div className="post-comment-count">
              { isFaved ? <AiTwotoneStar style={{ fontSize: 20 }} />
                : <AiOutlineStar style={{ fontSize: 20 }} /> }
            </div>
          </button>
          <div className="post-comment-count">
            { favCount }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
