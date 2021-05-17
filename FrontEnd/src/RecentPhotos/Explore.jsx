import React from 'react';
import ExploreNavBar from './ExploreNavBar';
import RecentPhotos from './RecentPhotos';

// The Explore.jsx will include the title of the webpage, nav bars as well as
// the components of Recent Photos
const Explore = () => (
  <div className="recent-photos">
    <ExploreNavBar />
    <div className="explore-page-content">
      <h1 id="exploreTitle">
        <br className="break-lines" />
        <br className="break-lines" />
        <br className="break-lines" />
        Explore
      </h1>
      <br className="break-lines" />
      <RecentPhotos />
    </div>
  </div>

);
export default Explore;
