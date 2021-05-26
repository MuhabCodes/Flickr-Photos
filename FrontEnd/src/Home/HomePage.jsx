import React from 'react';
import SideBar from './SideBar';
import useFetch from '../useFetch';
import CardsContainer from './CardsContainer';
import './homePage.css';

const HomePage = () => {
  const { data: Profiles, isPending, error } = useFetch('http://localhost:8000/Profiles');
  // console.log(Profiles);
  return (
    <div className="homePage">
      <div className="homePageContentMain">
        <div className="homePageFeed">
          <div className="homeFeedFilters">
            <div className="homeFeedDropDown">
              ad
            </div>
            <div className="homeFeedLayouts">
              ad
            </div>
          </div>
          <div className="homeFeedColumnContent">
            <div className="noFollowingErrorDiv">
              <div className="errorMessagediv">
                <h2 className="errorFollowingTitle">There are no posts from the people you follow right now.</h2>
                <p className="errorFollowingMessage">
                  Check out the recommended photographers below and start following people
                  to see their content here.
                </p>
              </div>
            </div>
            <div className="feed-people-to-follow">
              <p className="peopleToFollowP">People to follow</p>
              {/* Display Error in div and don't load Component */}
              { error && <div>{ error }</div>}
              {/* Shows a loading text until fetch fetches data */}
              { isPending && <div>Loading</div>}
              {/* Don't call component until data is fetched */}
              {Profiles && <CardsContainer Profiles={Profiles} />}
            </div>
          </div>
        </div>
        <div className="homePageSideBar">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
