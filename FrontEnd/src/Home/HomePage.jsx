import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import SideBar from './SideBar';
import useFetch from '../useFetch';
import CardsContainer from './CardsContainer';
import PostsFeed from './PostsFeed';
import './Homepage.css';
import configData from '../config.json';

const HomePage = () => {
  const { data: Profiles, isPending, error } = useFetch(`${configData.SERVER_URL}/getpeopletofollow`);
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [currLoggedInFollowing, setCurrLoggedInFollowing] = useState('');
  // For not rendering of text boxes until user info gets fetched
  if (localStorage.getItem('token') === null) {
    history.push('/login');
  } else {
    const userjwt = jwt(localStorage.getItem('token')); // get token from local storage to get curr user id
    useEffect(() => {
      axios.get(`/users/${userjwt.sub}`, {
      }).then((resp) => {
        setLoading(false); // set loading to false as it is dont and fetched data
        setCurrLoggedInFollowing(resp.data.following);
      }).catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          history.push('/login');
        } else {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
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
                  {/* Display Error in div and don't load Component */}
                  { error && <div>{ error }</div>}
                  {/* Shows a loading text until fetch fetches data */}
                  { (isPending || isLoading) && <div>Loading</div>}
                  {/* Don't call component until data is fetched */}
                  {Profiles && <CardsContainer Profiles={Profiles} />}
                </div>
              </div>
            ) : (
              <div className="following-homepage-main-container">
                <PostsFeed />
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
