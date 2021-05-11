import React from 'react';
import './SideBar.css';
import SingleGroupCard from './SingleGroupCard';

const GroupsForYou = (props) => {
  const prop = props;
  let { Groups } = prop;
  Groups = Groups.slice(0, 2);
  return (
    <div className="groupsForYouContainer">
      <h6 className="sideBarCardTitle">
        Groups for you
      </h6>
      <div className="groupsRecommendationsContainer">
        { Groups.map((Group) => (
          <div className="groupRow" key={Group.id}>
            <div className="singleGroupCard">
              <SingleGroupCard Group={Group} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GroupsForYou;
