import React from 'react';
import './SideBar.css';
import ExploreCard from './ExploreCard';

const SideBar = () => (
  <div className="sideBarMain">
    <div className="explorePhotosCard" />
    <ExploreCard />
    <div className="groupsForYouCard" />
    <div className="upgradeToProCard" />
  </div>
);

export default SideBar;
