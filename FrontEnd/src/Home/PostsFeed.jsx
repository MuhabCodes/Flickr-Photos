/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import Post from './Post';
import configData from '../config.json';

const PostsFeed = () => {
  const [posts, setPosts] = useState('');
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Authorization = localStorage.getItem('token'); // Applying global default settings from axios
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const userjwt = jwt(localStorage.getItem('token'));
  useEffect(() => {
    axios.get('/posts', {
    }).then((resp) => {
      setLoading(false);
      setPosts(resp.data);
      return resp.data;
    }).catch((err) => {
      setError(err.response.data.message);
    });
  }, []);
  return (
    <div className="posts-main-container">
      { isLoading && <div className="">Loading....</div> }
      { error && <div>{ error }</div> }
      { posts && posts.map((post) => (
        <div className="single-post" key={post.photoId}>
          <Post post={post} />
        </div>
      )) }
    </div>
  );
};
export default PostsFeed;
