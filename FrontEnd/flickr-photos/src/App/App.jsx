import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <nav className="collapse navbar-collapse  " id="basic-navbar-nav">
            <Nav.Link href="#home">You</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <Nav.Link href="#link">Print</Nav.Link>
            <Nav.Link href="#link">Get Pro</Nav.Link>
          </nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
