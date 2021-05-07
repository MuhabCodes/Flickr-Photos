import React from 'react';
import './GroupNavBar.css';

function GroupNavBar() {
  return (
    // Group navigation bar
    <div className="group-nav">
      <div className="group-nav-overflow" role="navigation" aria-label="Secondary">
        <div className="group-nav-content">

          <div className="group-nav-items">
            <ul className="group-links" role="menubar">
              <li id="overview" className="group-link" role="menuitem">
                <a href=".">
                  <span>Overview</span>
                </a>
              </li>
              <li id="discussions" className="group-link" role="menuitem">
                <a href=".">
                  <span>Discussions</span>
                </a>
              </li>
              <li id="pool" className="group-link" role="menuitem">
                <a href=".">
                  <span>Photos</span>
                </a>
              </li>
              <li id="members" className="group-link group-selected" role="menuitem">
                <a href="/members/">
                  <span>Members</span>

                </a>
              </li>
              <li id="map" className="group-link" role="menuitem">
                <a href=".">
                  <span>Map</span>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

  );
}
export default GroupNavBar;
