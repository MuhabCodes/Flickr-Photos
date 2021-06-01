import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import './DeleteAccount.css';

const DeleteAccount = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  // For not rendering of text boxes until user info gets fetched
  const userjwt = jwt(localStorage.getItem('token')); // get token from local storage to get curr user id
  const [displayname, setDisplayName] = useState('');
  useEffect(() => {
    axios.get(`/users/${userjwt.sub}`, {
    }).then((resp) => {
      setLoading(false); // set loading to false as it is dont and fetched data
      setDisplayName(resp.data.displayname);
      return resp.data;
    }).catch((error) => {
      if (error.response.status === 401) {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        history.push('/login');
      } else {
        localStorage.removeItem('token'); // remove token and redirect to login if not authorized
        setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
      }
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
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        } else if (error.response.status === 404) {
          setTimeout(() => history.push('*'), 2000); // Redirect to Error page
        } else {
          localStorage.removeItem('token'); // remove token and redirect to login if not authorized
          setTimeout(() => history.push('/login'), 2000); // Redirect to Error page
        }
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
