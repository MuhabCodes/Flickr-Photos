import React from 'react';
import PeopleCard from './PeopleCard';

const HomePage = () => {
  //   const { data, isPending, error } = 1;
  const data = 1;
  console.log(data);
  return (
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
            <div className="view-more">
              View More
            </div>
          </div>
        </div>
      </div>
      <div className="homePageSideBar">
        This is SideBar
        <img
          src="https://static.toiimg.com/photo/72975551.cms"
          alt="Moon"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </div>
  );
};

export default HomePage;
