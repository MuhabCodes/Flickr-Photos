import React from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import './SubNavBar.css';

const SubNavBar = () => {
  const currentPath = window.location.pathname;
  return (
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
                  if (currentPath.includes(item.url) === item.url) {
                    idval = 'activeurl-up';
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
};

export default SubNavBar;
