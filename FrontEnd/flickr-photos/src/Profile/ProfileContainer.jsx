import React from 'react';
// import SubNavBar from './SubNavBar';
import AboutBio from './AboutBio';
import Stats from './GeneralStats';
import Showcase from './Showcase';
import UserInfo from './UserInfo';
import MostPop from './MostPop';
import TestimonialsArea from './Testimonials';

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
    <MostPop />
    <TestimonialsArea />
  </div>
);

export default ProfileContainer;
