import React from 'react';
import { Link } from 'react-router-dom';
import MenuItemsAccountSettings from './MenuItemsAccountSettings';
import './SubNavBarPersonalInformation.css';

const AccountSettings = () => {
  const currentPath = window.location.pathname;
  return (
    <div className="container-account-settings">
      <div className="header-account-settings-container">
        <div className="header-account-settings">
          Account settings
        </div>
      </div>
      <div className="navbar-account-settings">
        <div className="fluid-sub-nav-account-settings">
          <div className="sub-nav-menu-account-settings" role="navigation">
            <div className="sub-nav-content-account-settings">
              <div className="sub-nav-container-account-settings">
                <ul
                  className="sub-nav-links-account-settings"
                  role="menubar"
                  id="sub_nav_account_settings_const"
                >
                  {MenuItemsAccountSettings.map((item) => {
                    let idval = 'notactive';
                    if (currentPath.includes(item.url) === item.url) {
                      idval = 'activeurl-account-settings';
                    } return (
                      <li key={item.key} className="subnav-list-account-settings">
                        <Link to={item.url} className="subnav-title-account-settings" id={idval}>{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
