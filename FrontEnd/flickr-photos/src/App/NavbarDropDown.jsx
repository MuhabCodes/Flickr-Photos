import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  NavDropdown, Nav, Navbar, Form, FormControl,
} from 'react-bootstrap';

// Component for dropdown items

function NavBarDropDown() {
  return (
    <div>
      <div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">
            <NavDropdown title="You" id="collasible-nav-dropdown">
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

          </Nav>
          <div className="icon-bar d-flex justify-content-end">
            <Form inline>
              <FormControl type="text" placeholder="Photos, people, or group" className="form-control me-2 min-vw-50" aria-label="Search" />

            </Form>

          </div>
        </Navbar.Collapse>

      </div>

    </div>
  );
}

export default NavBarDropDown;
