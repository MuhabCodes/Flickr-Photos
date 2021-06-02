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

// import configData from '../config.json';

function PhotoView() {
  const history = useHistory(); // useHitory to redirect the user
  const userjwt = jwt(localStorage.getItem('token'));
  const { routeId } = useParams(); // grab the id of the photo to fetch
  const [enabled, setEnabled] = useState(false); // check if user
  const [data, setData] = useState(null);
  const [tags, setPhotoTags] = useState(null);

  useEffect(() => {
    if (routeId) {
      axios.get(`/photos/${routeId}`) // fetch data with specific photo id
        .then((resp) => {
          setData(resp.data);
          setPhotoTags(resp.data.tags);
          // check if it is the user's photo to set enable to true to give rights
          if (resp.data.userId === userjwt.sub) { setEnabled(true); }
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
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`/photos/${routeId}`)
      .then(() => {
        // Delete
        setTimeout(() => history.go(-1), 100); // Redirect to last page visited
      }).catch(() => { history.push('*'); });
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

  // handle comments
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
                {!enabled && <button type="button" id="author-follow-button" className="btn btn-primary">+ Follow</button>}
              </div>
            </div>
            {/* photo name */}
            <div id="title-conatiner">
              <h1 id="selected-photo-title">{data.title}</h1>
            </div>
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
