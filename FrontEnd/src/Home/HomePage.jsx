import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import SideBar from './SideBar';
import PostsFeed from './PostsFeed';
import './HomePage.css';

const HomePage = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [currLoggedInFollowing, setCurrLoggedInFollowing] = useState('');
  axios.defaults.baseURL = 'http://api.flick.photos';
  axios.defaults.headers.common['Content-Type'] = 'application/json'; // Applying global default settings from axios
  axios.defaults.headers.authorization = localStorage.getItem('token');
  // For not rendering of text boxes until user info gets fetched
  if (localStorage.getItem('token') === null) {
    history.push('/start');
  } else {
    const userjwt = jwt(localStorage.getItem('token')); // get token from local storage to get curr user id
    useEffect(() => {
      axios.get(`people/${userjwt.userId}/info`, {
      }).then((resp) => {
        setLoading(false); // set loading to false as it is dont and fetched data
        setCurrLoggedInFollowing(resp.data.following);
      }).catch((err) => {
        if (err.response.status === 401) {
          // localStorage.removeItem('token'); // remove token and redirect login if not authorized
          // history.push('/login');
        } else {
          // localStorage.removeItem('token'); // remove token and redirect login if not authorized
          // setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        }
      });
    }, []);
  }
  // console.log(Profiles);
  return (
    <div className="home-page">
      <div className="home-page-content-main">
        <div className="home-page-feed">
          <div className="home-feed-filters">
            <div className="home-feed-drop-down">
              ad
            </div>
            <div className="home-feed-layouts">
              ad
            </div>
          </div>
          <div className="home-feed-column-content">
            { (currLoggedInFollowing.length === 0) ? (
              <div className="no-following-main-container">
                <div className="no-following-error-div">
                  <div className="error-message-div">
                    <h2 className="error-following-title">There are no posts from the people you follow right now.</h2>
                    <p className="error-following-message">
                      Check out the recommended photographers below and start following people
                      to see their content here.
                    </p>
                  </div>
                </div>
                <div className="feed-people-to-follow">
                  <p className="people-to-follow-p">People to follow</p>
                  <h3>Follow People to get posts</h3>
                </div>
              </div>
            ) : (
              <div className="following-homepage-main-container">
                { isLoading ? <div>Loading...</div> : <PostsFeed />}
              </div>
            ) }
          </div>
        </div>
        <div className="home-page-side-bar">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
