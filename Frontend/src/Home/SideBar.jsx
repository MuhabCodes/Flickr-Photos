import React from 'react';
import './SideBar.css';
import ExploreCard from './ExploreCard';
import GroupsForYou from './GroupsForYou';
import useFetch from '../useFetch';
import configData from '../config.json';

/**
 * HomePage sidebar that has explore photos and different groups recommended
 * @namespace HomePage.SideBar
 * @example <SideBar />
 * @function SideBar
 * @returns SideBar of home page
 */

const SideBar = () => {
  const { data: ExplorePhotos, isPending, error } = useFetch(`${configData.SERVER_URL}/photosExplore`);
  const { data: Groups, isPendingGroups, errorGroups } = useFetch(`${configData.SERVER_URL}/Groups`);
  return (
    <div className="side-bar-main">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading</div>}
      {ExplorePhotos && <ExploreCard ExplorePhotos={ExplorePhotos} />}
      { errorGroups && <div>{ error }</div>}
      { isPendingGroups && <div>Loading</div>}
      {Groups && <GroupsForYou Groups={Groups} /> }
    </div>
  );
};
export default SideBar;
