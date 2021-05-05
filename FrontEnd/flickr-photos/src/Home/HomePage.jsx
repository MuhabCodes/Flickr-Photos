import React from 'react';
import PeopleCard from './PeopleCard';
import SideBar from './SideBar';

const HomePage = () => {
  //   const { data, isPending, error } = 1;
  const data = 1;
  console.log(data);
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
              <p>People to follow</p>
              <div className="cards-container">
                <div className="single-card">
                  <PeopleCard />
                </div>
                <div className="single-card">
                  <PeopleCard />
                </div>
                <div className="single-card">
                  <PeopleCard />
                </div>
                <div className="single-card">
                  <PeopleCard />
                </div>
              </div>
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
