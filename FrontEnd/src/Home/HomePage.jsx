import React from 'react';
import SideBar from './SideBar';
import useFetch from '../useFetch';
import CardsContainer from './CardsContainer';
import './homePage.css';
import configData from '../config.json';

const HomePage = () => {
  const { data: Profiles, isPending, error } = useFetch(`${configData.SERVER_URL}/Profiles`);
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
              { isPending && <div>Loading</div>}
              {/* Don't call component until data is fetched */}
              {Profiles && <CardsContainer Profiles={Profiles} />}
            </div>
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
