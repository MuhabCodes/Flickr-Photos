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
                <a href="/groups/" className="group-nav-items-a">
                  <span>Overview</span>
                </a>
              </li>
              <li id="discussions" className="group-link" role="menuitem">
                <a href="/groups/discussions/" className="group-nav-items-a">
                  <span>Discussions</span>
                </a>
              </li>
              <li id="pool" className="group-link" role="menuitem">
                <a href="/groups/pool/" className="group-nav-items-a">
                  <span>Photos</span>
                </a>
              </li>
              <li id="members" className="group-link group-selected" role="menuitem">
                <a href="/groups/members/" className="group-nav-items-a">
                  <span>Members</span>

                </a>
              </li>
              <li id="map" className="group-link" role="menuitem">
                <a href="/groups/map/" className="group-nav-items-a">
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
