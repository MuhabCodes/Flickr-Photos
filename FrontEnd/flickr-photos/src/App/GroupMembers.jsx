import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GroupMembers.css';
import GroupCover from './GroupMembers/GroupCover';
import GroupNavBar from './GroupMembers/GroupNavBar';
import Members from './GroupMembers/Members';

function GroupMembers() {
  return (
    <div id="page">
      <GroupCover />
      <GroupNavBar />
      <Members />
    </div>
  );
}

export default GroupMembers;
