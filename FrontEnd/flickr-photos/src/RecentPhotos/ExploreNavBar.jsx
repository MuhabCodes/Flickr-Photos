import $ from 'jquery';
import React from 'react';
import 'bootstrap';

// The ExploreNavbar.jsx will include a function 'ExploreNavbar' that returns the html tags and
// properties to make up this navbar.
// The following 2 lines are jquery code to toggle the dropdown list 'More' on click
$(document).ready(() => {
  $('.dropdown-toggle').dropdown();
});
// This is the ExpNavBar function which returns the html tags to make up the navbar
function ExploreNavBar() {
  return (
    <nav className="expnav">
      <a id="menu-item" href="./Explore" className="active">Explore</a>
      <a id="menu-item" href="./Trending">Trending</a>
      <a id="menu-item" href="./Events">Events</a>
      <div className="animation start-home" />
      <div className="dropdown">
        <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
          More
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <a className="dropdown-item" href="./TheCommons">The Commons</a>
          <a className="dropdown-item" href="./Galleries">Galleries</a>
          <a className="dropdown-item" href="./WorldMap">World Map</a>
          <a className="dropdown-item" href="./CameraFinder">Camera Finder</a>
          <a className="dropdown-item" href="./FlickrBlog">Flickr Blog</a>
        </div>
      </div>
    </nav>
  );
}
export default ExploreNavBar;
