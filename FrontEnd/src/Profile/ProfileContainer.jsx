import React from 'react';
// import SubNavBar from './SubNavBar';
import AboutBio from './AboutBio';
import Stats from './GeneralStats';
import Showcase from './Showcase';
import UserInfo from './UserInfo';
import MostPop from './MostPop';
import TestimonialsArea from './Testimonials';
import './ProfileContainer.css';

// const { data, isPending, Error } = useFetch('http://localhost:8000/aboutbio');

const ProfileContainer = () => (
  <div className="fluid-profile-container-pp">
    <div className="profile-bio-page-pp">
      <div className="bio-description-section-pp">
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
