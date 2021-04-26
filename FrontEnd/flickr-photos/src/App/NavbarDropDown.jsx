import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NavDropdown, Nav, Navbar } from 'react-bootstrap';

// Component for dropdown items

function NavBarDropDown() {
  return (
    <div>
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <NavDropdown title="You">
            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Photostream </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Albums</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Faves</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Galleries</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Groups</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Camera Roll</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Recent Activity</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">People</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Organize</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Explore">
            <NavDropdown.Item href="#action/3.1">Recent Photos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Trending</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">The Commons</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Flicker Galleries</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">World Map</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Camera Finder</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Flickr Blog</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Print">
            <NavDropdown.Item href="#action/3.1">Prints & Wall Art</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Photo Books</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Get Pro</Nav.Link>
        </div>
      </Navbar.Collapse>
    </div>
  );
}

export default NavBarDropDown;
