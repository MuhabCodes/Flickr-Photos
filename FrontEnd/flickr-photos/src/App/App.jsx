import React from 'react';
import CameraFinder from '../CameraFinder/CameraFinder';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../ErrorPages/NotFound';
import SignUp from '../Signup/Signup';
import AppBar from '../Signup/flickrbar';
import VerifySignup from '../Signup/VerifySignup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '../Login/flickrbar';
import Login from '../Login/logIn';
import ForgotPassword from '../Login/forgotPassword';
import SendEmail from '../Login/SendEmail';
import HomePage from '../Home/HomePage';
import NavBar from './Navbar';
import Footer from './Footer';
import CameraRoll from './CameraRoll';
import CoverArea from '../Profile/Cover';
import SubNavBar from '../Profile/SubNavBar';
import ProfileContainer from '../Profile/ProfileContainer';
import Faves from '../Profile/faves';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="*">
            { /* path for all pages that don't exist */ }
            <NotFound />
         <div className="content">
        <CameraFinder />
      </div>
          </Route>
        </Switch>
        <AppBar />
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/verifysignup">
            <VerifySignup />
          </Route>
        </Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/sendemail">
            <SendEmail />
          </Route>
        </Switch>
         <NavBar />
        <CoverArea />

        <div className="pageContent">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
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
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
