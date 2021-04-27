import React from 'react';
import {
  Navbar, NavDropdown, Nav,
} from 'react-bootstrap';

// The ExploreNavbar.jsx will include a function 'ExploreNavbar' that returns the html tags and
// properties to make up this navbar using bootstrap.

function ExploreNavBar() {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid">
          <Nav.Link href="#explore">Explore</Nav.Link>
          <Nav.Link href="#trending">Trending</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          <Nav.Item className="ml-auto">
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">The Commons</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Galleries</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">World Map</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">App Garden</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Camera Finder</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">The Weekly Flickr</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Flickr Blog</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ExploreNavBar;
