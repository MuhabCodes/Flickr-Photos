import React from 'react';
import jwt from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Nav, Navbar,
} from 'react-bootstrap';

// Component for dropdown items

function NavBarDropDown() {
  const userjwt = jwt(localStorage.getItem('token'));
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
            <a href={`/Profile/About/${userjwt.sub}`} className="droplink-main-nav">You</a>
            <div className="dropdown-content">
              <a href={`/Profile/About/${userjwt.sub}`}>About</a>
              <a href="/PhotoStream">Photostream</a>
              <a href="/Albums">Albums</a>
              <a href="/Profile/Faves">Faves</a>
              <a href="/Galleries">Galleries</a>
              <a href="/Groups">Groups</a>
              <a href="/CameraRoll">Camera Roll</a>
              <a href="/Notifications">Recent</a>
              <a href="/People">People</a>
              <a href="/Organize">Organize</a>

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
            <a href="/Explore" className="droplink-main-nav">Explore</a>
            <div className="dropdown-content">
              <a href="/Explore">Recent Photos</a>
              <a href="/Trending">Trending</a>
              <a href="/Events">Events</a>
              <a href="/TheCommons">The Commons</a>
              <a href="FlickrGalleries">Flicker Galleries</a>
              <a href="/WorldMap">World Map</a>
              <a href="/CameraFinder">Camera Finder</a>
              <a href="/FlickrBlog">Flickr Blog</a>

            </div>
          </div>

          {/* <NavDropdown title="Print">
            <NavDropdown.Item href="#action/3.19">Prints & Wall Art</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.20">Photo Books</NavDropdown.Item>
          </NavDropdown> */}

          <div className="dropdown-main-nav">
            <a href="/Prints" className="droplink-main-nav">Print</a>
            <div className="dropdown-content">
              <a href="/Prints">Prints & Wall Art</a>
              <a href="/PhotoBooks">Photo Books</a>
            </div>
          </div>

          <div className="dropdown-main-nav">
            <a href="/GetPro" className=" droplink-main-nav">Get Pro</a>
          </div>
          <div>
            <a href="/Search" className=" droplink-main-nav">
              Search
              <img src="https://img.icons8.com/ios/20/ffffff/search--v1.png" alt="" />
            </a>
          </div>
        </Nav>
        {/* <div className="icon-bar d-flex justify-content-end">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Photos, people, or group"
              className="form-control me-2 min-vw-50"
              aria-label="Search"
            />
          </Form> */}
        {/* </div> */}

      </Navbar.Collapse>

    </div>
  );
}

export default NavBarDropDown;
