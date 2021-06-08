import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link to={`../Profile/Photostream/${Follower.userId}`} replace>view profile</Link>
              {' '}
            </h6>
          </div>

        </div>
      ))}

    </div>
  );
}

export default FollowersCard;
