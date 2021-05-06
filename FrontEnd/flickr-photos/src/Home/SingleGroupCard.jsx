import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SingleGroupCard = (props) => {
  const prop = props;
  const { Group } = prop;
  let photos = Group.pool;
  photos = photos.slice(0, 4);
  return (
    <div className="groupRecCard">
      <div className="groupCardUpperContainer">
        <div className="groupAvatarContainer">
          <img src={Group.avatar} alt="" />
        </div>
        <div className="groupName">
          {Group.groupName}
        </div>
        <div className="joinButton">
          <button className="joinBtn" type="button">Join</button>
        </div>
      </div>
      <div className="groupCardLowerContainer">
        <div className="exploreCardRow">
          {photos.map((photo) => (
            <Link to="POOLPHOTOURLHERE" key={photo.id}>
              <img src={photo.imageURL} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleGroupCard;
