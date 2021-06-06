/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PhotoView.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import StarBorderOutlined from '@material-ui/icons/StarBorderOutlined';
import StarOutlined from '@material-ui/icons/StarOutlined';
import MenuListComposition from './AddToAlbums';

// import configData from '../config.json';

function PhotoView() {
  const history = useHistory(); // useHitory to redirect the user
  const userJwt = jwt(localStorage.getItem('token'));
  const { routeId } = useParams(); // grab the id of the photo to fetch
  const [enabled, setEnabled] = useState(false); // check if user
  const [data, setData] = useState(null);
  const [tags, setPhotoTags] = useState(null);
  const [photoComments, setPhotoComments] = useState(null);
  const [commentText, setcommentText] = useState(''); // set photo album on input change
  const [activeStar, setActiveStar] = useState(false);
  const [followButton, setFollowButton] = useState(false);

  useEffect(() => {
    if (routeId) {
      axios.get(`/photos/${routeId}`) // fetch data with specific photo id
        .then((resp) => {
          setData(resp.data);
          setPhotoTags(resp.data.tags);
          // check if it is the user's photo to set enable to true to give rights
          if (resp.data.userId === userJwt.sub) { setEnabled(true); }
          axios.get('/Comments') // fetch comments
            .then((response) => {
              setPhotoComments(response.data);
              return response.data;
            });
          return resp.data;
        }).catch(() => { history.push('*'); });
    }
  }, []);

  // for material ui icons to work
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  // hanlde delete
  const handleDelete = () => {
    axios.delete(`/photos/${routeId}`)
      .then(() => {
        // Delete
        setTimeout(() => history.go(-1), 100); // Redirect to last page visited
      }).catch(() => { history.push('*'); });
  };
  // follow button handle
  const follow = () => {
    const send = {};
    send.userFollowed = data.userId;
    axios.post('follow', send).catch(() => { history.push('*'); });
  };
  const unfollow = () => {
    const send = {};
    send.userUnfollowed = data.userId;
    axios.post('unfollow', send).catch(() => { history.push('*'); });
  };

  // handle edit tag
  const editTag = (i) => {
    setPhotoTags((currentItems) => currentItems.filter((item, index) => index !== i));
    data.tags = tags;
    setData(data);
    axios.put(`/photos/${routeId}`, data).catch((error) => {
      if (error.response.status === 404) {
        setTimeout(() => history.push('*'), 100); // Redirect to Error page
      }
    });
  };
  // handle Fav icon
  const fav = () => {
    const send = {};
    send.userFav = data.userId;
    axios.post('fav', send).catch(() => { history.push('*'); });
  };
  const unfav = () => {
    const send = {};
    send.userUnfav = data.userId;
    axios.post('unfav', send).catch(() => { history.push('*'); });
  };

  // handle comments
  const handleComment = (e) => {
    e.preventDefault();
    if (commentText !== '') {
      const newComment = {};
      newComment.comment = commentText;
      newComment.commentAvatar = data.userAvatar;
      newComment.userName = data.user;
      newComment.userId = userJwt.sub;
      axios.post('/Comments', newComment).then(() => {
        // update comments
        axios.get('/Comments') // fetch comments
          .then((response) => {
            setPhotoComments(response.data);
            return response.data;
          });
      }).catch((error) => {
        if (error.response.status === 404) {
          setTimeout(() => history.push('*'), 100); // Redirect to Error page
        }
      });
    }
  };
  // handle delete comments
  const deleteComment = (i) => {
    const toBeDeleted = photoComments[i];
    setPhotoComments((currentItems) => currentItems.filter((item, index) => index !== i));
    axios.delete('/Comments', toBeDeleted).then(() => {
      // update comments
      axios.get('/Comments') // fetch comments
        .then((response) => {
          setPhotoComments(response.data);

          return response.data;
        });
    }).catch((error) => {
      if (error.response.status === 404) {
        history.push('*'); // Redirect to Error page
      }
    });
  };
  return (data ? (
    <div>
      {/* photo container */}
      <div id="photo-large-container">
        <img id="photo" src={data.src} alt={data.title} />
        {enabled && (
        <IconButton id="delete-button" onClick={handleDelete}>
          <DeleteIcon fontSize="large" />
        </IconButton>
        )}
        {enabled && <MenuListComposition />}
        {!enabled && (
        <IconButton onClick={() => setActiveStar(!activeStar)}>
          {activeStar ? (
            <StarOutlined fontSize="large" id="starBorderOutlined" onClick={() => unfav()} />
          ) : (
            <StarBorderOutlined fontSize="large" id="starBorderOutlined" onClick={() => fav()} />
          )}
        </IconButton>
        )}
        <IconButton id="back-button" onClick={() => history.go(-1)}>
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div id="below-photo">
        <div id="below-photo-container">
          <div id="left-container">
            {/* profile info container */}
            <div id="profile-details">
              <div id="person-avatar" style={{ backgroundImage: `url(${data.userAvatar})` }} />
              <div id="person-info">
                <Link to={`/profile/photostream/${data.userId}`} id="person-name">{data.user}</Link>
                {/* Checking if the member is pro to display the logo */}
                {data.isPro && (
                <Link to="/account/upgrade/pro" id="member-pro">
                  <img src="https://i.imgur.com/c0Kf8Rt.jpg" alt="pro" width="17" height="10" />
                </Link>
                )}
                {/* Checking if the member is owner of the photo to hide the follow button */}
                {!enabled && !followButton && <button type="button" id="author-follow-button" className="btn btn-primary" onClick={() => { setFollowButton(!followButton); follow(); }}>+ Follow</button>}
                {!enabled && followButton && <button type="button" id="author-follow-button" className="btn btn-primary" onClick={() => { setFollowButton(!followButton); unfollow(); }}>Following</button>}
              </div>
            </div>
            {/* photo name */}
            <div id="title-conatiner">
              <h1 id="selected-photo-title">{data.title}</h1>
              {(data.description !== '') && <h2 id="selected-photo-description">{data.description}</h2>}
            </div>
            {/* comments section */}
            {photoComments && (photoComments.map((photoComment, index) => (
              <div key={photoComment.id} id="comments-section">
                <ul className="list-unstyled">
                  <li className="media">
                    <span className="round pt-2">
                      <img id="comment-avatar" src={photoComment.commentAvatar} className="align-self-start mr-3" alt="" />
                    </span>
                    <div className="media-body">
                      <div className="row d-flex">
                        <Link to={`/profile/photostream/${userJwt.sub}`} id="username-text" className="user pt-2">{photoComment.userName}</Link>
                      </div>
                      <p className="text">{photoComment.comment}</p>
                      {(photoComment.userId == userJwt.sub) && (
                      <IconButton id="delete-comments-button" onClick={() => deleteComment(index)}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            )))}
            {/* comments box */}
            {(userJwt !== '') && (
            <div>
              <ul className="list-unstyled">
                <li className="media">
                  <span className="round pt-2">
                    <img id="comment-avatar" src={data.userAvatar} className="align-self-start mr-3" alt="" />
                  </span>
                  <div className="d-flex flex-row align-items-start">
                    <textarea className="form-control ml-1 shadow-none textarea" onChange={(event) => setcommentText(event.target.value)} />
                  </div>
                  <br />
                  <div className="mt-2 text-right">
                    <button className="btn btn-primary btn-sm ml-1 shadow-none" type="button" onClick={handleComment}>comment</button>
                  </div>
                </li>
              </ul>
            </div>
            )}
          </div>
          <div id="right-container">
            <div id="right-container-content">
              {/* photo stats */}
              <div id="stats">
                <div className="stat-item">
                  <span className="count-label">
                    {data.views}
                  </span>
                  <span className="stats-label">views</span>
                </div>

                <div className="stat-item">
                  <span className="count-label">
                    {data.faves}
                  </span>
                  <span className="stats-label">faves</span>
                </div>

                <div className="stat-item">
                  <span className="count-label">
                    {data.comments}
                  </span>
                  <span className="stats-label">comments</span>
                </div>
                <div id="date-camera-container">
                  <div id="selected-photo-date">
                    <span id="date">
                      Taken on
                      {' '}
                      {data.date}
                    </span>
                  </div>
                  <div id="selected-photo-camera">
                    <PhotoCameraIcon fontSize="large" />
                    <span>{data.camera}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* photo tags */}
            <div id="photo-tags">
              <div id="tags-container">
                <h5 id="tags-title">
                  Tags
                </h5>
                {tags && tags.map((tag, index) => (
                  <Button
                    key={tags[index]}
                    size="small"
                    variant="contained"
                    color="default"
                    className={classes.button}
                    endIcon={enabled && <ClearIcon fontSize="small" onClick={() => editTag(index)} />}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <div>Loading...</div>);
}
export default PhotoView;
