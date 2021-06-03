import React from 'react';
import ExploreNavBar from './ExploreNavBar';
import RecentPhotos from './RecentPhotos';
import ShareBtn from './Share';
import NavBar from '../App/Navbar';

// The Explore.jsx will include the title of the webpage, nav bars as well as
// the components of Recent Photos
// Can be used by any user /guest

const Explore = () => (
  <div className="recent-photos">
    <NavBar />
    <ExploreNavBar />
    <div className="explore-page-content" id="explore">
      <br className="break-lines" />
      <br className="break-lines" />
      <h1 id="explore-title">
        Explore
      </h1>
      <ShareBtn />
      <RecentPhotos />
    </div>
  </div>
);
export default Explore;
