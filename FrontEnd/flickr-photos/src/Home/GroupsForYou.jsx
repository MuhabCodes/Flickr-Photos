import React from 'react';
import './SideBar.css';
import SingleGroupCard from './SingleGroupCard';

const GroupsForYou = () => (
  <div className="groupsForYouContainer">
    <h6 className="sideBarCardTitle">
      Groups for you
    </h6>
    <div className="groupsRecommendationsContainer">
      <div className="groupRow">
        <div className="singleGroupCard">
          <SingleGroupCard />
        </div>
      </div>
      <div className="groupRow">
        <div className="singleGroupCard">
          <SingleGroupCard />
        </div>
      </div>
    </div>
  </div>
);

export default GroupsForYou;
