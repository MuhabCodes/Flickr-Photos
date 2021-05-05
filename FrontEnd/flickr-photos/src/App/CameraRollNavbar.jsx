import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './CameraRollNavbar.css';

function CameraRollNavbar() {
  return (
    <div>
      <Navbar expand="lg" sticky="top">
        <Nav className="mr-auto">
          <NavDropdown title="Dropdown">
            <NavDropdown.Item href="#action/3.1">Date taken</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Date uploaded</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar>
    </div>

  );
}

export default CameraRollNavbar;
