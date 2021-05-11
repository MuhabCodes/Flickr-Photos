import React from 'react';
import ExploreNavBar from './ExploreNavBar';
import RecentPhotos from './RecentPhotos';

// The Explore.jsx will include the title of the webpage, nav bars as well as
// the components of Recent Photos
const Explore = () => (
  <div className="recentPhotos">
    <ExploreNavBar />
    <div className="explorePageContent">
      <h1 id="exploreTitle">
        <br className="breakLines" />
        <br className="breakLines" />
        <br className="breakLines" />
        Explore
      </h1>
      <br className="breakLines" />
      <RecentPhotos />
    </div>
  </div>

);
export default Explore;
