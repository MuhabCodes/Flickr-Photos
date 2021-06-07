import React from 'react';
import './FollowersCard.css';

function FollowersCard(props) {
  const prop = props;
  const { followers } = prop;
  return (
    <div className="container">
      { followers.map((Follower) => (
        <div className="follower-card-container">

          <img className="follower-avatar" src={Follower.userAvatar} alt="avatar" />

          <div className="content">
            <h6 className="follower-name">{Follower.userName}</h6>
            <h6 className="follower-name">
              {' '}
              <a href={`Profile/Photostream/${Follower.userId}`}>view profile</a>
              {' '}
            </h6>
          </div>

        </div>
      ))}

    </div>
  );
}

export default FollowersCard;
