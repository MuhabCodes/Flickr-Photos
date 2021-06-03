/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import configData from '../config.json';

const PostsFeed = () => {
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Authorization = localStorage.getItem('token'); // Applying global default settings from axios
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  const userjwt = jwt(localStorage.getItem('token'));
  useEffect(() => {
    axios.get(`/users/${userjwt.sub}`, {
    }).then((resp) => {
      setLoading(false);
      return resp.data;
    }).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        history.push('/login');
      } else {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        setTimeout(() => history.push('/login'), 100); // Redirect to Error page
      }
    });
  }, []);
  return (
    <div className="posts-main-container">
      Main Page Feed
    </div>
  );
};
export default PostsFeed;
