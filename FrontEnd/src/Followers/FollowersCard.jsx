import React from 'react';
import './FollowersCard.css';

function FollowersCard() {
  return (
    <div>
      <div className="follower-card-container">

        <img className="follower-avatar" src="https://images.pexels.com/photos/5326990/pexels-photo-5326990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" />

        <div className="content">
          <h5>sandy samir</h5>
          <h6>5 items | view profile </h6>
        </div>

      </div>
      <div className="follower-card-container">

        <img className="follower-avatar" src="https://images.pexels.com/photos/5326990/pexels-photo-5326990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" />

        <div className="content">
          <h5>sandy samir</h5>
          <h6>5 items | view profile </h6>
        </div>

      </div>
    </div>
  );
}

export default FollowersCard;
