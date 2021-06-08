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

/**
 * component for previewing specific photo
 * @component
 * <PhotoView/>
 */
function PhotoView() {
  axios.defaults.baseURL = 'https://api.flick.photos';
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
  const [commentsNum, setcommentsNum] = useState(0);
  const [FavesNum, setFavesNum] = useState(0);

  useEffect(() => {
    axios.defaults.baseURL = 'https://api.flick.photos';
    if (routeId) {
      axios.get(`/photos/${routeId}`) // fetch photo info with specific photo id
        .then((resp) => {
          const pass = {};
          pass.userId = resp.data.authorId;
          pass.title = resp.data.title;
          pass.description = resp.data.description;
          const d = new Date(resp.data.uploadDate);
          const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          pass.date = `${d.getDay()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
          pass.views = resp.data.views;
          pass.camera = resp.data.cameraName;
          axios.get(`/people/${pass.userId}/info`) // fetch user avtar, ispro,name
            .then((response) => {
              pass.user = response.data.displayName;
              pass.userAvatar = response.data.userAvatar;
              pass.isPro = response.data.isPro;
              return response.data;
            }).catch(() => { history.push('*//'); });
          axios.get(`/search/photos?searchWord=${pass.title}`) // fetch photo imagepath
            .then((response) => {
              pass.src = response.data.photosSearch.find((x) => x.photoId == routeId).imagePath;
              return response.data;
            }).catch(() => { history.push('*//'); });
          setData(pass);
          setPhotoTags(resp.data.tags);
          axios.get(`/photos/${routeId}/favorites`) // fetch faves number
            .then((response) => {
              setFavesNum(response.data.photoLikers.length);
              return response.data;
            }).catch(() => { history.push('*//'); });
          // check if it is the user's photo to set enable to true to give rights
          if (pass.userId === userJwt.sub) { setEnabled(true); }
          axios.get(`/photos/${routeId}/comments`) // fetch comments
            .then((response) => {
              const whole = {};
              whole.total = response.data.total;
              setcommentsNum(whole.total);
              whole.temp = response.data.comments.map((row) => ({
                id: row.commentId,
                userName: row.author,
                comment: row.text,
                userId: row.authorId,
                time: row.dateCreate,
                commentAvatar: row.userAvatar,
              }));
              setPhotoComments(whole.temp);
              return whole;
            }).catch(() => { history.push('*//'); });
          return pass;
        }).catch(() => { history.push('*//'); });
    }
  }, []);

  // for material ui icons to work
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  /**
   * handle delete photos
   * @function handleDelete
   * @returns {void}
   */
  // handle delete
  const handleDelete = () => {
    axios.delete(`/photos/${routeId}`)
      .then(() => {
        // Delete
        setTimeout(() => history.go(-1), 100); // Redirect to last page visited
      }).catch(() => { history.push('*//'); });
  };
    /**
   * follow button handle
   * @function follow
   * @returns {void}
   */
  // follow button handle
  const follow = () => {
    axios.defaults.headers.authorization = localStorage.getItem('token');
    const { userId } = data;
    const send = {
      userId,
    };
    console.log(send);
    axios.post('/people/follow', send)
      .catch((error) => {
        if (error.response.status === 403) {
          axios.post('/people/unfollow', send).catch(() => { history.push('*//'); });
        }
      });
  };
  /**
   * unfollow button handle
   * @function unfollow
   * @returns {void}
   */
  const unfollow = () => {
    axios.defaults.headers.authorization = localStorage.getItem('token');
    const { userId } = data;
    const send = {
      userId,
    };
    axios.post('/people/unfollow', send)
      .catch((error) => {
        if (error.response.status === 403) {
          axios.post('/people/follow', send).catch(() => { history.push('*//'); });
        }
        history.push('*//');
      });
  };
  /**
 * handle tags removal
 * @function editTag
 * @param {number} i  index of tag to be removed
 * @returns {void}
 */
  // handle edit tag
  const editTag = (i) => {
    const toBeDeleted = {};
    // eslint-disable-next-line no-underscore-dangle
    toBeDeleted.tagId = tags[i]._id;
    axios.delete(`/tags/photo/${routeId}`, data).then(() => {
      setPhotoTags((currentItems) => currentItems.filter((item, index) => index !== i));
    }).catch((error) => {
      if (error.response.status === 404) {
        setTimeout(() => history.push('*//'), 100); // Redirect to Error page
      } else { setTimeout(() => history.push('*//'), 1000); } // Redirect to Error page
    });
  };
  // handle Fav icon
    /**
   * fav button handle
   * @function fav
   * @returns {void}
   */
  const fav = () => {
    axios.post(`/favorites/${routeId}`).catch(() => { history.push('*//'); });
  };
    /**
   * unfav button handle
   * @function unfav
   * @returns {void}
   */
  const unfav = () => {
    axios.delete(`/favorites/${routeId}`).catch(() => { history.push('*//'); });
  };

  /**
   * on click add new comment if not empty
   * @function handleComment
   * @param {object} e -event
   * @returns {void}
   */
  // handle comments
  const handleComment = (e) => {
    e.preventDefault();
    if (commentText !== '') {
      const newComment = {
        commentText,
      };
      axios.post(`/photos/${routeId}/comments`, newComment).then(() => {
        // update comments
        axios.get(`/photos/${routeId}/comments`) // fetch comments
          .then((response) => {
            const whole = {};
            whole.total = response.data.total;
            setcommentsNum(whole.total);
            whole.temp = response.data.comments.map((row) => ({
              id: row.commentId,
              userName: row.author,
              comment: row.text,
              userId: row.authorId,
              time: row.dateCreate,
              commentAvatar: row.userAvatar,
            }));
            setPhotoComments(whole.temp);
            return whole;
          }).catch(() => { history.push('*//'); });
      }).catch((error) => {
        if (error.statusCode === 404) {
          setTimeout(() => history.push('*//'), 100); // Redirect to Error page
        } else { setTimeout(() => history.push('*//'), 1000); } // Redirect to Error page
      });
    }
  };
  /**
 * handle delete comment
 * @function deleteComment
 * @param {number} i  index of comment to be deleted
 * @returns {void}
   */
  // handle delete comments
  const deleteComment = (i) => {
    axios.delete(`/photos/${routeId}/comments/${photoComments[i].id}`).then(() => {
      setPhotoComments((currentItems) => currentItems.filter((item, index) => index !== i));
      // update comments
    }).catch((error) => {
      if (error.response.status === 404) {
        history.push('*//'); // Redirect to Error page
      } else { setTimeout(() => history.push('*//'), 1000); } // Redirect to Error page
    });
  };
  /**
   * convert from milliseconds since 1970 to human readable time
   * @function msToTime
   * @param {number} ds - Time milliseconds since 1970
   * @returns {number} seconds -if less 60 seconds
   * @returns {number} minutes -if less 60 minutes
   * @returns {number} hours -if less 24 hours
   * @returns {number} days -if more than 24 hours
   */
  // calculate time from now for comments
  function msToTime(ds) {
    const d = new Date();
    const n = d.getTime();
    const ms = n - ds;
    const seconds = (ms / 1000).toFixed(1);
    const minutes = (ms / (1000 * 60)).toFixed(1);
    const hours = (ms / (1000 * 60 * 60)).toFixed(1);
    const days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return `${Math.ceil(seconds)} Sec ago`;
    if (minutes < 60) return `${Math.floor(minutes)} Min ago`;
    if (hours < 24) return `${Math.floor(hours)} Hrs ago`;
    return `${Math.floor(days)} Days ago`;
  }
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
        <IconButton id="starBorderOutlined" onClick={() => setActiveStar(!activeStar)}>
          {activeStar ? (
            <StarOutlined fontSize="large" onClick={() => unfav()} />
          ) : (
            <StarBorderOutlined fontSize="large" onClick={() => fav()} />
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
                      <p id="comment-date">{msToTime(photoComment.time)}</p>
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
                    <button id="comment-submit-button" className="btn btn-primary btn-sm ml-1 shadow-none" type="button" onClick={handleComment}>comment</button>
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
                    {FavesNum}
                  </span>
                  <span className="stats-label">faves</span>
                </div>

                <div className="stat-item">
                  <span className="count-label">
                    {commentsNum}
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
                    id="delete-tag-button"
                    className={classes.button}
                    endIcon={enabled && <ClearIcon fontSize="small" onClick={() => editTag(index)} />}
                  >
                    {tag.tagText}
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
