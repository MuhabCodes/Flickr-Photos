import React from 'react';
import useFetch from './usefetch';
import AboutBio from './AboutBio';

const { data, isPending, Error } = useFetch('http://localhost:8000/aboutbio');

const ProfileContainer = () => (

  <div className="fluid-profile-container">
    <div className="profile-bio-page">
      <div className="bio-description-section">
        {Error && <div>{Error}</div>}
        {isPending && <div>Loading...</div>}
        {data && <AboutBio bios={data} />}
      </div>
    </div>
  </div>
);

export default ProfileContainer;
