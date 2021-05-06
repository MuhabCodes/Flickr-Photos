import React, {/* { useState } */} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GroupMembers.css';
import GroupCover from './GroupMembers/GroupCover';

function GroupMembers() {
  // const { data: members } = useFetch('http://localhost:5001/members');

  return (
    <div id="page">
      <GroupCover />
    </div>
  );
}

export default GroupMembers;
