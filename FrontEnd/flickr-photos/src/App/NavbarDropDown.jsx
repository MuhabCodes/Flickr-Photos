import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  Nav, Navbar, Form, FormControl,
} from 'react-bootstrap';

// Component for dropdown items

function NavBarDropDown() {
  return (
    <div>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ">
          {/* <NavDropdown title="You" id="collasible-nav-dropdown" data-bs-toggle="dropdown">
            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Photostream </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Albums</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Faves</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Galleries</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Groups</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">Camera Roll</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.8">Recent Activity</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.9">People</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.10">Organize</NavDropdown.Item>
          </NavDropdown> */}
          <div className="dropdown-main-nav">
            <a href="#action" className="droplink-main-nav">You</a>
            <div className="dropdown-content">
              <a href="#action1">About</a>
              <a href="#action2">Photostream</a>
              <a href="#action3">Albums</a>
              <a href="#action4">Faves</a>
              <a href="#action5">Galleries</a>
              <a href="#action6">Groups</a>
              <a href="#action7">Camera Roll</a>
              <a href="#action8">Recent</a>
              <a href="#action9">People</a>
              <a href="#action10">Organize</a>

            </div>
          </div>

          {/* <NavDropdown title="Explore">
            <NavDropdown.Item href="#action/3.11">Recent Photos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.12">Trending</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.13">Events</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.14">The Commons</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.15">Flicker Galleries</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.16">World Map</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.17">Camera Finder</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.18">Flickr Blog</NavDropdown.Item>
          </NavDropdown> */}
          <div className="dropdown-main-nav">
            <a href="#action" className="droplink-main-nav">Explore</a>
            <div className="dropdown-content">
              <a href="#action1">Recent Photos</a>
              <a href="#action2">Trending</a>
              <a href="#action1">Events</a>
              <a href="#action1">The Commons</a>
              <a href="#action1">Flicker Galleries</a>
              <a href="#action1">World Map</a>
              <a href="#action1">Camera Finder</a>
              <a href="#action1">Flickr Blog</a>

            </div>
          </div>

          {/* <NavDropdown title="Print">
            <NavDropdown.Item href="#action/3.19">Prints & Wall Art</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.20">Photo Books</NavDropdown.Item>
          </NavDropdown> */}

          <div className="dropdown-main-nav">
            <a href="#action" className="droplink-main-nav">Print</a>
            <div className="dropdown-content">
              <a href="#action1">Prints & Wall Art</a>
              <a href="#action2">Photo Books</a>
            </div>
          </div>

          <div className="dropdown-main-nav">
            <a href="#action1" className=" droplink-main-nav">Get Pro</a>
          </div>
        </Nav>
        <div className="icon-bar d-flex justify-content-end">
          <Form inline>
            <FormControl type="text" placeholder="Photos, people, or group" className="form-control me-2 min-vw-50" aria-label="Search" />

          </Form>

        </div>
      </Navbar.Collapse>

    </div>
  );
}

export default NavBarDropDown;
