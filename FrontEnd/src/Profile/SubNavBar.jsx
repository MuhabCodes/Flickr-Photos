import React from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import './SubNavBar.css';

const SubNavBar = () => {
  const currentPath = window.location.pathname;
  return (
    <div className="navbar-uP">
      <div className="fluid-sub-nav-uP">
        <div className="sub-nav-menu-uP" role="navigation">
          <div className="sub-nav-content-uP">
            <div className="sub-nav-container-uP">
              <ul
                className="sub-nav-links-uP"
                role="menubar"
                id="sub_nav_user_const"
              >
                {MenuItems.map((item) => {
                  let idval = 'notactive';
                  if (currentPath.includes(item.url) === item.url) {
                    idval = 'activeurl-uP';
                  } return (
                    <li key={item.key} className="subnav-list-uP">
                      <Link to={item.url} className="subnav-title-uP" id={idval}>{item.title}</Link>
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
};

export default SubNavBar;
