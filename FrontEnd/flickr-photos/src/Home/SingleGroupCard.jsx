import React from 'react';
import './SideBar.css';

const SingleGroupCard = () => (
  <div className="groupRecCard">
    <div className="groupCardUpperContainer">
      <div className="groupAvatarContainer">
        <img src="https://png.pngtree.com/png-vector/20190827/ourlarge/pngtree-group-avatar-icon-design-vector-png-image_1702778.jpg" alt="" />
      </div>
      <div className="groupName">
        DOGGOSSS
      </div>
      <div className="joinButton">
        <button className="joinBtn" type="button">Join</button>
      </div>
    </div>
    <div className="groupCardLowerContainer">
      <div className="exploreCardRow">
        <img className="groupPoolImg" src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1" alt="LOL" />
        <img className="groupPoolImg" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="LOL" />
        <img className="groupPoolImg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="LOL" />
        <img className="groupPoolImg" src="https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1" alt="LOL" />
      </div>
    </div>
  </div>
);

export default SingleGroupCard;
