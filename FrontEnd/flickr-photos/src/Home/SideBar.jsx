import React from 'react';
import './SideBar.css';
import ExploreCard from './ExploreCard';
import GroupsForYou from './GroupsForYou';
import useFetch from '../useFetch';

const SideBar = () => {
  const { data: ExplorePhotos, isPending, error } = useFetch('http://localhost:8000/photos');
  const { data: Groups, isPendingGroups, errorGroups } = useFetch('http://localhost:8000/Groups');
  return (
    <div className="sideBarMain">
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
