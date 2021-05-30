import React from 'react';
import './FollowersCard.css';

function FollowersCard(props) {
  const prop = props;
  const { Followers } = prop;
  return (
    <div className="container">
      { Followers.map((Follower) => (
        <div className="follower-card-container" key={Follower.id}>

          <img className="follower-avatar" src="https://images.pexels.com/photos/5326990/pexels-photo-5326990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="avatar" />

          <div className="content">
            <h5>{Follower.UserName}</h5>
            <h6>5 items | view profile </h6>
          </div>

        </div>
      ))}

    </div>
  );
}

export default FollowersCard;
