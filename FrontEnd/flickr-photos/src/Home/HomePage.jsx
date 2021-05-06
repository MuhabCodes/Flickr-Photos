import React from 'react';
import SideBar from './SideBar';
import useFetch from '../useFetch';
import CardsContainer from './CardsContainer';

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
              <p>People to follow</p>
              { error && <div>{ error }</div>}
              { isPending && <div>Loading</div>}
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
