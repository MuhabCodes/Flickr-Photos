import $ from 'jquery';
import React from 'react';
import 'bootstrap';
import { Link } from 'react-router-dom';
import MoreButton from './MoreButton';
// The ExploreNavbar.jsx will include a function 'ExploreNavbar' that returns the html tags and
// properties to make up this navbar.
// This explore nav bar is available to any kind of user (logged in or guest)
// The following 2 lines are jquery code to toggle the dropdown list 'More' on click
$(document).ready(() => {
  $('.dropdown-toggle').dropdown();
});
// This is the ExpNavBar function which returns the html tags to make up the navbar
/**
 * This component renders the explore nav bar, including Explore link, as well as More button
 * which is a dropdown list that contains links to CameraFinder and The Commons.
 * @function ExploreNavBar
 * @returns {null} -returns links in the explore nav bar.
 */
function ExploreNavBar() {
  return (
    <nav className="expnav">
      <Link id="exp-menu-item" to="./" className="active">Explore</Link>
      <div className="animation start-home" />
      <div className="exp-dropdown">
        <MoreButton />
        <div className="dropdown-menu" aria-labelledby="exp-dropdown-menu-button1">
          <Link className="dropdown-item" to="./CameraFinder">Camera Finder</Link>
          <Link className="dropdown-item" to="./TheCommons">The Commons</Link>
        </div>
      </div>
    </nav>
  );
}
export default ExploreNavBar;
