import React from 'react';
import './SideBar.css';
import SingleGroupCard from './SingleGroupCard';

/**
 * Group Recommendations in sidebar
 * @namespace HomePage.GroupsForYou
 * @example <GroupsForYou />
 * @function GroupsForYou
 * @returns GroupsForYou of home page sidebar
 */

const GroupsForYou = (props) => {
  const prop = props;
  let { Groups } = prop;
  Groups = Groups.slice(0, 2);
  return (
    <div className="groups-for-you-container">
      <h6 className="side-bar-card-title">
        Groups for you
      </h6>
      <div className="groups-recommendations-container">
        { Groups.map((Group) => (
          <div className="group-row" key={Group.id}>
            <div className="single-group-card">
              <SingleGroupCard Group={Group} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GroupsForYou;
