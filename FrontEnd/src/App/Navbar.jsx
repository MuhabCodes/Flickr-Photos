import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarFooter.css';

import { Navbar } from 'react-bootstrap';
import NavDropDown from './NavbarDropDown';
// import NavBarDropDown from './NavbarDropDown';

// component for the whole navigation bar
function NavBar() {
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

      <NavDropDown />

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

    </Navbar>
  );
}

export default NavBar;
