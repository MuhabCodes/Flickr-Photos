import React from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import './SubNavBar.css';

const SubNavBar = () => {
  const currentPath = window.location.pathname;
  return (
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
                {MenuItems.map((item) => {
                  let idval = 'notactive';
                  if (currentPath.includes(item.url) === item.url) {
                    idval = 'activeurl';
                  } return (
                    <li key={item.key}>
                      <Link to={item.url} className={item.cName} id={idval}>{item.title}</Link>
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
