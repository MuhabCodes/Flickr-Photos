import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProPage from '../Profile/Pro';
import CoverArea from '../Profile/Cover';
import SubNavBar from '../Profile/SubNavBar';
import ProfileContainer from '../Profile/ProfileContainer';
import Faves from '../Profile/faves';

function App() {
  return (
    <Router>
      <div className="App">
        <CoverArea />
        <SubNavBar />
        <Switch>
          <Route path="/About">
            <ProfileContainer />
          </Route>
          <Route path="/Faves">
            <Faves />
          </Route>
          <Route path="/account/upgrade/pro">
            <ProPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
