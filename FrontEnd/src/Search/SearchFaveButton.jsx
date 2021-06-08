import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const FaveButtonSearch = (props) => {
  // const cl = props;
  // const { ClickMe } = cl;
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json'; // Applying global default settings from axios
  axios.defaults.headers.authorization = localStorage.getItem('token');
  const history = useHistory();
  const [isFaved, setIsFaved] = useState(false);
  const prop = props;
  const { stateImages } = prop;
  const { photoId } = stateImages;
  // const { favs } = stateImages;
  // eslint-disable-next-line no-unused-vars
  // const [faveCount, setFaveCount] = useState(favs);
  const handleFave = (e) => {
    if (!isFaved && e.target.getAttribute('src') === 'https://img.icons8.com/android/24/ffffff/star.png') {
      e.target.setAttribute('src', 'https://img.icons8.com/ios-filled/25/ffffff/star--v1.png');
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
      e.target.setAttribute('src', 'https://img.icons8.com/android/24/ffffff/star.png');
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
    <button className="fav-btn-exp" type="button" data-testid="fave-test-search" id="fave-button-exp" onClick={handleFave}>
      <img
        className="star"
        src="https://img.icons8.com/android/24/ffffff/star.png"
        alt="favIcon"
      />
    </button>
  );
};
export default FaveButtonSearch;
