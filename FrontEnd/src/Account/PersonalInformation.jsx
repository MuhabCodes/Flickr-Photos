import React from 'react';
import SubNavBarPersonalInformation from './SubNavBarPersonalInformation';

const PersonalInformation = () => (
  <div className="container-personal-information">
    <SubNavBarPersonalInformation />
    <div className="main-personal-info-container">
      <div className="personal-info-left-column" />
      <div className="personal-info-right-column" />
    </div>
  </div>
);

export default PersonalInformation;
