import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Albums.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import configData from '../config.json';

function Albums() {
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Authorization = localStorage.getItem('token'); // Applying global default settings from axios
  const history = useHistory(); // useHitory to redirect the user
  const userjwt = jwt(localStorage.getItem('token'));
  // eslint-disable-next-line no-unused-vars
  const [enabled, setEnabled] = useState(false); // check if user
  const { userId } = useParams(); // grab the id of the photo to fetch
  const [data, setData] = useState(null);
  const [albumsData, setAlbumsData] = useState(null);
  useEffect(() => {
    if (userId) {
      axios.get(`/albums/${userId}`) // fetch data with specific album
        .then((resp) => {
          setData(resp.data);
          setAlbumsData(resp.data.userAlbums);
          // check if it is the user's album to set enable to true to give rights
          // eslint-disable-next-line eqeqeq
          if (resp.data.userId == userjwt.sub) { setEnabled(true); }
          return resp.data;
        }).catch(() => { history.push('*'); });
    }
  }, []);

  // handle delete
  const deleteAlbum = (i) => {
    const toBeDeleted = {};
    toBeDeleted.albumId = albumsData[i].albumId;
    axios.delete(`/albums/${userId}`, toBeDeleted).then(() => {
      setAlbumsData((currentItems) => currentItems.filter((item, index) => index !== i));
    }).catch((error) => {
      if (error.response.status === 404) {
        history.push('*'); // Redirect to Error page
      }
    });
  };
  // Render albums for preview
  const renderPhotos = (source) => source.map((photo, index) => (
    <div key={photo.albumCover}>

      <div id="album-container">
        <img
          id="album-added-photos"
          src={photo.albumCover}
          alt=""
        />
        <Link id="album-title" to="*">{photo.albumTitle}</Link>
        <span id="photo-number">
          {photo.albumphotos.length}
          {' '}
          photos
        </span>
        {(userId === userjwt.sub) && (
        <IconButton id="delete-albums-button" onClick={() => deleteAlbum(index)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
        )}
      </div>
    </div>
  ));

  return (data ? (
    <div id="result-albums">{albumsData && renderPhotos(albumsData)}</div>) : <div>loading...</div>
  );
}

export default Albums;
