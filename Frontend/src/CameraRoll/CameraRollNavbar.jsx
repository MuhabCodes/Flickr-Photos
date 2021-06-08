import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './CameraRollNavbar.css';

function CameraRollNavbar() {
  return (
    <div>
      <Navbar expand="lg" sticky="top" id="navbar-CR">
        <Nav className="mr-auto nav-start">
          <NavDropdown title="Dropdown">
            <NavDropdown.Item href="#action/3.1">Date taken</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Date uploaded</NavDropdown.Item>
          </NavDropdown>
          <div className="navbar-icons">
            <input type="checkbox" id="info" name="info" />
            <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
            <label htmlFor="info">Show info</label>
            <div className="icons">
              <a href="action">
                <i className="fas fa-th-large" />
                {' '}
              </a>
              <a href="action">
                <i className="fas fa-th" />
                {' '}
              </a>
            </div>
          </div>
        </Nav>

      </Navbar>
    </div>

  );
}

export default CameraRollNavbar;
