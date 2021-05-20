import React from 'react';
import SubNavBarPersonalInformation from './SubNavBarPersonalInformation';
import './PersonalInformation.css';

const PersonalInformation = () => {
  const isPro = true;
  return (
    <div className="container-personal-information">
      <div className="container-sub-nav-bar-account-settings">
        <SubNavBarPersonalInformation />
      </div>
      <div className="main-personal-info-container">
        <div className="personal-info-left-column">
          <div className="membership-status-box">
            <div className="membership-status-title">
              Membership Status
            </div>
            <div className="membership-status-box-content">
              {isPro ? (
                <div className="membership-status-content-container">
                  <div className="logo-membership-status-div">
                    <p className="logo-membership-status-p">
                      5k
                    </p>
                  </div>
                  <div className="content-membership-status-div-p">
                    <div className="content-membership-subtitle">
                      You have a Flickr Pro account.
                    </div>
                    <p className="content-membership-paragraph">
                      You get 5,000 of your favorite full-resolution photos and HD videos, shown
                      without ads.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="personal-info-right-column">Hello I am Right</div>
      </div>
    </div>
  );
};

export default PersonalInformation;
