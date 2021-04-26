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
      </Navbar>
    </div>
  );
}

export default NavBar;
