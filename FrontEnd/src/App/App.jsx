import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CameraFinder from '../CameraFinder/CameraFinder';
import NotFound from '../ErrorPages/NotFound';
import SignUp from '../Signup/Signup';
import AppBar from '../Signup/flickrbar';
import VerifySignup from '../Signup/VerifySignup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login/logIn';
import ForgotPassword from '../Login/forgotPassword';
import SendEmail from '../Login/SendEmail';
import HomePage from '../Home/HomePage';
import Footer from './Footer';
import CameraRoll from './CameraRoll';
import CoverArea from '../Profile/Cover';
import SubNavBar from '../Profile/SubNavBar';
import ProfileContainer from '../Profile/ProfileContainer';
import Faves from '../Profile/faves';
import GroupMembers from './GroupMembers';
import NavBar from './Navbar';
import Explore from '../RecentPhotos/Explore';
import About from '../AboutPage/About';

function App() {
  return (
    <div className="flickr-main">
      <NavBar />
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/CameraFinder">
              <CameraFinder />
            </Route>
            <Route exact path="/SignUp">
              <AppBar />
              <SignUp />
            </Route>
            <Route exact path="/VerifySignup">
              <VerifySignup />
            </Route>
            <Route exact path="/Login">
              <AppBar />
              <Login />
            </Route>
            <Route exact path="/ForgotPassword">
              <AppBar />
              <ForgotPassword />
            </Route>
            <Route exact path="/SendEmail">
              <AppBar />
              <SendEmail />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/Profile/About">
              <CoverArea />
              <SubNavBar />
              <ProfileContainer />
            </Route>
            <Route path="/Profile/Faves">
              <CoverArea />
              <SubNavBar />
              <Faves />
            </Route>
            <Route path="/CameraRoll">
              <CameraRoll />
            </Route>
            <Route path="/groups/members/">
              <GroupMembers />
            </Route>
            <Route exact path="/Explore">
              <Explore />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route path="*">
              { /* path for all pages that don't exist */ }
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
