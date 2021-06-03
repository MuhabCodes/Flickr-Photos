import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Albums.css';
import configData from '../config.json';

function Albums() {
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Authorization = localStorage.getItem('token'); // Applying global default settings from axios
  const history = useHistory(); // useHitory to redirect the user
  const userjwt = jwt(localStorage.getItem('token'));
  // eslint-disable-next-line no-unused-vars
  const [enabled, setEnabled] = useState(false); // check if user
  const { routeId } = useParams(); // grab the id of the photo to fetch
  const [data, setData] = useState(null);
  const [albumsData, setAlbumsData] = useState(null);
  useEffect(() => {
    if (routeId) {
      axios.get(`/albums/${routeId}`) // fetch data with specific album
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

  // Render albums for preview
  const renderPhotos = (source) => source.map((photo) => (
    <div key={photo.albumCover}>

      <div id="album-container">
        <img
          id="added-photos"
          src={photo.albumCover}
          alt=""
        />
        <Link id="album-title" to="*">{photo.albumTitle}</Link>
        <span id="photo-number">
          {photo.albumphotos.length}
          {' '}
          photos
        </span>
      </div>
    </div>
  ));

  return (data ? (
    <div id="result">{albumsData && renderPhotos(albumsData)}</div>) : <div>loading...</div>
  );
}

export default Albums;
