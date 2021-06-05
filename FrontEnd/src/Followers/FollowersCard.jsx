import React from 'react';
import './FollowersCard.css';

function FollowersCard(props) {
  const prop = props;
  const { followers } = prop;
  return (
    <div className="container">
      { followers.map((Follower) => (
        <div className="follower-card-container" key={Follower.id}>

          <img className="follower-avatar" src={Follower.useravatar} alt="avatar" />

          <div className="content">
            <h6 className="follower-name">{Follower.UserName}</h6>
            <h6 className="follower-name">
              {Follower.item}
              {' '}
              items |
              {' '}
              <a href="Profile/photostream/4">view profile</a>
              {' '}
            </h6>
          </div>

        </div>
      ))}

    </div>
  );
}

export default FollowersCard;
