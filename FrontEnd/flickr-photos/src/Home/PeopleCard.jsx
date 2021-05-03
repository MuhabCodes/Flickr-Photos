import React, { useState } from 'react';
import './PeopleCard.css';

const PeopleCard = () => {
  const [name] = useState('Ahmed Mostafa');
  const [avatar] = useState('https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg');
  const [uName] = useState('AhmedMAyoub');
  const [bgImage] = useState('https://images.unsplash.com/photo-1619314367523-bc28b916dd9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
  const [Pro] = useState('Pro');
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
            <div className="Pro-Status-div">{ Pro }</div>
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
