import React from 'react';

const SubNavBar = () => (
  <div className="navbar">
    <div className="fluid-sub-nav">
      <div className="sub-nav-menu" role="navigation">
        <div className="sub-nav-content">
          <div className="sub-nav-container">
            <ul
              className="sub-nav-links"
              role="menubar"
              id="sub_nav_user_const"
            >
              <li id="about" role="menuitem">
                <a href="/About">
                  <span>About</span>
                </a>
              </li>
              <li id="photostream" role="menuitem">
                <a href="/Photostream">
                  <span>Photostream</span>
                </a>
              </li>
              <li id="albums" role="menuitem">
                <a href="/Albums">
                  <span>Albums</span>
                </a>
              </li>
              <li id="favorites" role="menuitem">
                <a href="/Faves">
                  <span>Faves</span>
                </a>
              </li>
              <li id="galleries" role="menuitem">
                <a href="/Galleries">
                  <span>Galleries</span>
                </a>
              </li>
              <li id="groups" role="menuitem">
                <a href="/Groups">
                  <span>Groups</span>
                </a>
              </li>
              <li id="stats" role="menuitem">
                <a href="/Stats">
                  <span>Stats</span>
                </a>
              </li>
              <li id="cameraroll" role="menuitem">
                <a href="/CameraRoll">
                  <span>Camera Roll</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SubNavBar;
