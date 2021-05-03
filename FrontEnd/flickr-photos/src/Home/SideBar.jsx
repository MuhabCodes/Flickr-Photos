import React from 'react';
import './SideBar.css';
import ExploreCard from './ExploreCard';
import GroupsForYou from './GroupsForYou';

const SideBar = () => (
  <div className="sideBarMain">
    <ExploreCard />
    <GroupsForYou />
    <div className="upgradeToProCard" />
  </div>
);

export default SideBar;
