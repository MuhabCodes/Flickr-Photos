import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Footer from './Footer';
import CameraRoll from './CameraRoll';
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
        <NavBar />
        <CoverArea />
        <Switch>
          <Route path="/About">
            <SubNavBar />
            <ProfileContainer />
          </Route>
          <Route path="/Faves">
            <SubNavBar />
            <Faves />
          </Route>
          <Route path="/cameraroll">
               <CameraRoll /> 
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
