import React from 'react';

import './App.css';
import CoverArea from '../Profile/Cover';
import SubNavBar from '../Profile/SubNavBar';
import ProfileContainer from '../Profile/ProfileContainer';

function App() {
  return (
    <div className="App">
      <CoverArea />
      <SubNavBar />
      <ProfileContainer />
    </div>
  );
}

export default App;
