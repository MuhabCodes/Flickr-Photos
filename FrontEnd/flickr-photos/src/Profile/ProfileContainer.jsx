import React from 'react';
import AboutBio from './AboutBio';
import Stats from './GeneralStats';
import Showcase from './Showcase';
import UserInfo from './UserInfo';
import MostPop from './MostPop';

// const { data, isPending, Error } = useFetch('http://localhost:8000/aboutbio');

const ProfileContainer = () => (

  <div className="fluid-profile-container">
    <div className="profile-bio-page">
      <div className="bio-description-section">
        <AboutBio />
        <Showcase />
        <UserInfo />
        <Stats />
      </div>
    </div>
    <div className="most-pop">
      <MostPop />
    </div>
  </div>
);

export default ProfileContainer;
