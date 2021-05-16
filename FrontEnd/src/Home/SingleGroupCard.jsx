import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SingleGroupCard = (props) => {
  const prop = props;
  const { Group } = prop;
  let photos = Group.pool;
  photos = photos.slice(0, 4);
  return (
    <div className="group-rec-card">
      <div className="group-card-upper-container">
        <div className="group-avatar-container">
          <img src={Group.avatar} alt="" />
        </div>
        <div className="group-name">
          {Group.groupName}
        </div>
        <div className="join-button">
          <button className="join-btn" id="join-group-button" type="button">Join</button>
        </div>
      </div>
      <div className="group-card-lower-container">
        {photos.map((photo) => (
          <Link to="POOLPHOTOURLHERE" key={photo.id}>
            <img src={photo.imageURL} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SingleGroupCard;
