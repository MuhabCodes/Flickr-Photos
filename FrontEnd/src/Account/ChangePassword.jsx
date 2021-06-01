/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import './ChangePassword.css';

const ChangePassword = () => {
  const history = useHistory();
  const userjwt = jwt(localStorage.getItem('token'));
  // the use of the use state and set state functions
  // to save the changes made in each of this inputs
  const [currentpassword, setcurrpassword] = useState(''); // Might not need it after integration
  const [newPassword, setnewpassword] = useState('');
  const handleSubmit = (e) => { // Submission of form to put request
    e.preventDefault();
    const ProfileInfo = {
      newPassword,
    };
    axios.put(`/users/${userjwt.sub}`, ProfileInfo)
      .then(() => {
        history.push('/account'); // if successful we redirect to account
      }).catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem('token');
          history.push('/login'); // If unauth error then redirect to login and clear token
        }
      });
  };
  return (
    <div className="main-change-password-after-loading">
      <form onSubmit={handleSubmit} className="change-password-form">
        <label htmlFor="curr-pw-text-box" className="edit-your-profile-labels">
          <div className="edit-your-profile-label-text">
            Current Password
          </div>
          <input
            id="curr-pw-text-box"
            className="edit-name-text-box"
            type="password"
            required
            value={currentpassword}
            onChange={(e) => setcurrpassword(e.target.value)}
          />
        </label>
        <label htmlFor="edit-last-name-text-box" className="edit-your-profile-labels">
          <div className="edit-your-profile-label-text">
            New Password
          </div>
          <input
            id="edit-last-name-text-box"
            className="edit-name-text-box"
            type="password"
            required
            value={newPassword}
            onChange={(e) => setnewpassword(e.target.value)}
          />
        </label>
        <button className="change-pw-btn" type="submit" id="change-password-btn">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
// Styles Added to The inputs
