import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarFooter.css';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';
import firebase from 'firebase/app';
import jwt from 'jwt-decode';
import NavBarDropDown from './NavbarDropDown';

import('firebase/messaging');
import('firebase/database');

const FBlogout = () => {
  const FIREBASE_MESSAGING = firebase.messaging();
  const FIREBASE_DATABASE = firebase.database();
  const userjwt = jwt(localStorage.getItem('token'));
  FIREBASE_MESSAGING.getToken()
    .then((token) => {
      console.log(token);
      FIREBASE_MESSAGING.deleteToken(token);// DELETING TOKEN FROM FIREBASE_MESSAGING
    })
    .then(() => FIREBASE_DATABASE.ref('/tokens').orderByChild('userId').equalTo(userjwt.sub)
      .once('value')) // DELETING TOKEN FROM DB
    .then((snapshot) => {
      if (snapshot.val()) {
        const key = Object.keys(snapshot.val())[0]; // since i ordered them above
        return FIREBASE_DATABASE.ref('/tokens').child(key).remove(); // deleting obtained key
      }
      return null;
    })
    .catch((err) => {
      console.log(err);
    });
};
// component for the whole navigation bar
function NavBar() {
  const history = useHistory();
  const logout = () => {
    FBlogout();
    // localStorage.clear();
    history.push('/login');
  };
  const account = () => {
    history.push('/account');
  };
  return (
    <Navbar collapseOnSelect sticky="top" expand="md">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Brand href="/">
        <img
          alt=""
          src="flickr.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
        flickr
      </Navbar.Brand>
      <NavBarDropDown />
      <div className="icons">
        <a href="#home">
          <i className="fas fa-cloud-upload-alt" />
          {' '}
        </a>
        <a href="/Notification">
          <i className="fas fa-bell" />
          {' '}
        </a>
      </div>
      <Button className="button1" onClick={logout}>Logout</Button>
      <Button className="button1" onClick={account}>Account</Button>
    </Navbar>
  );
}

export default NavBar;
