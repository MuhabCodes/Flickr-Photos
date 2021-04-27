import React from 'react';
import ExploreNavBar from './ExploreNavBar';
import RecentPhotos from './RecentPhotos';

// The Explore.jsx will include the title of the webpage, nav bars as well as
// the components of Recent Photos
const Explore = () => (
  <div className="recentPhotos">
    <ExploreNavBar />
    <h1 id="title">
      <br />
      Explore
    </h1>
    <RecentPhotos />
  </div>

);
export default Explore;
