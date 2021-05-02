import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProPage from '../Profile/Pro';
import CoverArea from '../Profile/Cover';
import SubNavBar from '../Profile/SubNavBar';
import ProfileContainer from '../Profile/ProfileContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <CoverArea />
            <SubNavBar />
            <ProfileContainer />
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
