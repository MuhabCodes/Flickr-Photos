import React from 'react';
import ExploreNavBar from './ExploreNavBar';
import RecentPhotos from './RecentPhotos';

// The Explore.jsx will include the title of the webpage, nav bars as well as
// the components of Recent Photos
const Explore = () => (
  <div className="recentPhotos">
    <ExploreNavBar />
    <div className="pageContent">
      <h1 id="title">
        <br />
        <br />
        <br />
        <br />
        Explore
      </h1>
      <br />
      <RecentPhotos />
    </div>
  </div>

);
export default Explore;