/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import Post from './Post';
import configData from '../config.json';

const PostsFeed = () => {
  const [posts, setPosts] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const userjwt = jwt(localStorage.getItem('token'));
  useEffect(() => {
    axios.defaults.headers.authorization = localStorage.getItem('token');
    axios({
      baseURL: 'https://api.flick.photos',
      method: 'get',
      url: '/photos',
    }).then((resp) => {
      setLoading(false);
      setPosts(resp.data.photos);
    }).catch((err) => {
      setError(err.error);
      console.log(err);
    });
  }, []);
  return (
    <div className="posts-main-container">
      { error && <div>{ error }</div> }
      { isLoading ? <div>Loading...</div> : posts && posts.map((post) => (
        <div className="single-post" key={post.photoId}>
          <Post post={post} />
        </div>
      )) }
    </div>
  );
};
export default PostsFeed;
