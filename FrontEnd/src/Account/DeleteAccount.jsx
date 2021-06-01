import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import './DeleteAccount.css';

const DeleteAccount = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  // For not rendering of text boxes until user info gets fetched
  // Headers for storing the token (Will be taken from local storage)
  const userjwt = jwt(localStorage.getItem('token'));
  const [displayname, setDisplayName] = useState('');
  useEffect(() => {
    axios.get(`/users/${userjwt.sub}`, {
    }).then((resp) => {
      setLoading(false);
      setDisplayName(resp.data.displayname);
      return resp.data;
    });
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`/users/${userjwt.sub}`)
      .then(() => {
        // Invoke Logout
        localStorage.removeItem('token'); // remove Current logged in user token from local storage
        // Delete
        setTimeout(() => history.push('/login'), 1000); // Redirect to login if Account Deleted
      })
      .catch((err) => {
        console.log(err.message);
        setTimeout(() => history.push('*'), 2000); // Redirect to Error page
      });
  };
  return (
    <div className="delete-account-main">
      {isLoading ? <div>Loading...</div>
        : (
          <div className="main-edit-profile-after-loading">
            <h1 className="delete-account-header">
              <Link to="/account">Your Account</Link>
              {' '}
              /
              {' '}
              Delete it??
            </h1>
            <div className="delete-account-info-div">
              <h2 className="delete-account-warning">
                Warning!
              </h2>
              <p className="delete-account-name-p">
                You are about to delete account
                {' '}
                <span className="display-name-delete">{displayname}</span>
              </p>
              <ul className="delete-all-photos-ul">
                <b>All</b>
                {' '}
                the photos and videos and associated metadata in the account
                {' '}
                <span className="display-name-delete">{displayname}</span>
                {' '}
                will be
                {' '}
                <b>deleted</b>
                .
              </ul>
              <ul className="delete-all-photos-ul">
                Deleting your account will
                {' '}
                <b>not</b>
                {' '}
                free up your
                <b> screen name or personalized URL</b>
                for use on another account.
              </ul>
            </div>
            <button type="button" onClick={handleDelete} className="delete-account-button">Delete Account</button>
          </div>
        )}
    </div>
  );
};

export default DeleteAccount;
