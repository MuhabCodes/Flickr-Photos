import $ from 'jquery';
import React from 'react';
import 'bootstrap';
import { Link } from 'react-router-dom';
// The ExploreNavbar.jsx will include a function 'ExploreNavbar' that returns the html tags and
// properties to make up this navbar.
// This explore nav bar is available to any kind of user (logged in or guest)
// The following 2 lines are jquery code to toggle the dropdown list 'More' on click
$(document).ready(() => {
  $('.dropdown-toggle').dropdown();
});
// This is the ExpNavBar function which returns the html tags to make up the navbar
function ExploreNavBar() {
  return (
    <nav className="expnav">
      <Link id="exp-menu-item" to="./" className="active">Explore</Link>
      <div className="animation start-home" />
      <div className="exp-dropdown">
        <button className="dropdown-toggle" type="button" id="expdropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
          More
        </button>
        <div className="dropdown-menu" aria-labelledby="expdropdownMenuButton1">
          <Link className="dropdown-item" to="./CameraFinder">Camera Finder</Link>
        </div>
      </div>
    </nav>
  );
}
export default ExploreNavBar;
