import React from 'react';
import './PeopleCard.css';

const PeopleCard = (props) => {
  const prop = props;
  const { Profile } = prop;
  console.log(Profile);
  const name = Profile.displayName;
  const { avatar } = Profile;
  const { uName } = Profile;
  const bgImage = Profile.coverPhoto;
  const Pro = Profile.isPro;
  return (
    <div className="people-card">
      <div className="upper-container">
        <div className="card-img-container">
          <img className="card-img" src={bgImage} alt="" />
        </div>
      </div>
      {/* Done the image part */}
      <div className="lower-container">
        <div className="lower-container-left">
          <div className="avatar-img-container">
            <a href="https://www.flickr.com/photos/albionharrisonnaish/">
              <img src={avatar} alt="" className="avatar-img" />
            </a>
          </div>
          <div className="profile-names">
            <div className="display-name">
              { name }
            </div>
            <div className="user-name">
              { uName }
            </div>
            {Pro ? <div className="Pro-Status-div">Pro</div> : null}
          </div>
        </div>
        <div className="lower-container-right">
          <button className="btn btn-primary btn-sm" id="people-card-follow-btn" type="button">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
