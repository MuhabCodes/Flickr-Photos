import React from 'react';
import './SideBar.css';
import ExploreCard from './ExploreCard';
import GroupsForYou from './GroupsForYou';
import UpgradeToPro from './UpgradeToPro';

const SideBar = () => (
  <div className="sideBarMain">
    <ExploreCard />
    <GroupsForYou />
    <UpgradeToPro />
  </div>
);

export default SideBar;
