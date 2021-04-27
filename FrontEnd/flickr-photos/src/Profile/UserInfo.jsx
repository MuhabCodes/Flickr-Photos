import React from 'react';

const UserInfo = () => (
  <div className="user-info">
    <div className="user-info-container">
      <div className="actions-container" />
      <div className="info-view-container">
        <ul>
          <li>
            <span className="title">Joined</span>
            <span className="user-data"> April 2021</span>
          </li>
          <li>
            <span className="title">Email</span>
            <span className="user-data">manarzakaria@gmail.com</span>
          </li>
        </ul>
        <ul className="spacer" />
      </div>
    </div>
  </div>
);

export default UserInfo;
