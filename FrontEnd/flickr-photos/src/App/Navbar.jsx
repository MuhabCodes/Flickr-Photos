import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Navbar } from 'react-bootstrap';
import NavDropDown from './NavbarDropDown';
// import NavBarDropDown from './NavbarDropDown';

// component for the whole navigation bar
function NavBar() {
  return (
    <div className="App">
      <Navbar collapseOnSelect sticky="top" expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand href="#home">
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
        <div className="icon-bar">
          <a href="#home">
            <i className="fas fa-cloud-upload-alt" />
            {' '}
          </a>
          <a href="#home">
            <i className="fas fa-bell" />
            {' '}
          </a>

        </div>

      </Navbar>

    </div>
  );
}

export default NavBar;
