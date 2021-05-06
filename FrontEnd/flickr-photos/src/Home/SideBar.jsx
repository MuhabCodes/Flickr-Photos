import React from 'react';
import './SideBar.css';
import ExploreCard from './ExploreCard';
import GroupsForYou from './GroupsForYou';
import UpgradeToPro from './UpgradeToPro';
import useFetch from '../useFetch';

const SideBar = () => {
  const { data: ExplorePhotos, isPending, error } = useFetch('http://localhost:8000/photos');
  return (
    <div className="sideBarMain">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading</div>}
      {ExplorePhotos && <ExploreCard ExplorePhotos={ExplorePhotos} /> }
      <GroupsForYou />
      <UpgradeToPro />
    </div>
  );
};
export default SideBar;
