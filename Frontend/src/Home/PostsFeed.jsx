/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import Post from './Post';
import configData from '../config.json';

/**
 * Posts Feed Container for individual posts
 * @namespace HomePage.PostsFeed
 * @example <PostsFeed />
 * @function PostsFeed
 * @returns The Feed of the user with each photo mapped in a post container
 */

const PostsFeed = () => {
  axios.defaults.baseURL = 'https://api.flick.photos';
  const [posts, setPosts] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const userjwt = jwt(localStorage.getItem('token'));
  useEffect(() => {
    axios.defaults.baseURL = 'https://api.flick.photos';
    axios.defaults.headers.authorization = localStorage.getItem('token');
    axios({
      method: 'get',
      url: '/photos',
    }).then((resp) => {
      setLoading(false);
      setPosts(resp.data.photos);
    }).catch((err) => {
      setError(err.error);
      console.log(err.error);
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
