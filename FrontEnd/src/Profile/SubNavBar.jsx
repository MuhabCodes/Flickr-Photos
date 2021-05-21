import React from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import './SubNavBar.css';
// The SubNavBar component helps in displaying the navigation bar in the profile area
// This nav exists in all subpages of 'You'. It includes all pages in the 'You'
// Has a mapping function which gets name of items in the subnavbar from a pre-defined array
// this array also includes the url to which we route to when a user clicks it
const SubNavBar = () => (
  <div className="navbar-up">
    <div className="fluid-sub-nav-up">
      <div className="sub-nav-menu-up" role="navigation">
        <div className="sub-nav-content-up">
          <div className="sub-nav-container-up">
            <ul
              className="sub-nav-links-up"
              role="menubar"
              id="sub_nav_user_const"
            >
              {MenuItems.map((item) => {
                let idval = 'notactive';
                if (window.location.href.indexOf(item.url) > -1) {
                  idval = 'activeurl-up'; // has constant blue border under the page we're in
                } return (
                  <li key={item.key} className="subnav-list-up">
                    <Link to={item.url} className="subnav-title-up" id={idval}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SubNavBar;
