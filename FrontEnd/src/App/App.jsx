/* eslint-disable import/no-extraneous-dependencies */
import { React, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import axios from 'axios';
import jwt from 'jwt-decode';
import firebase from 'firebase/app';
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
import CameraRoll from '../CameraRoll/CameraRoll';
import Footer from './Footer';
import CoverArea from '../Profile/Cover';
import SubNavBar from '../Profile/SubNavBar';
import ProfileContainer from '../Profile/ProfileContainer';
import Faves from '../Profile/Faves';
import GroupMembers from './GroupMembers';
import NavBar from './Navbar';
import Explore from '../RecentPhotos/Explore';
import About from '../AboutPage/About';
import SearchPage from '../Search/SearchPage';
import Photostream from '../Profile/Photostream';
import EditPhotostream from '../Profile/EditPhotostream';
import PersonalInformation from '../Account/PersonalInformation';
import EditPersonalInfo from '../Account/EditPersonalInfo';
import DeleteAccount from '../Account/DeleteAccount';
import ChangePassword from '../Account/ChangePassword';
import FollowersPage from '../Followers/FollowersPage';
import Notification from '../Notification/Notification';
import UpgradeToPro from '../UpgradeToPro/UpgradeToPro';
import GettingStarted from '../UpgradeToPro/GettingStarted';
import Upload from '../Upload/Upload';
import PhotoView from '../PhotoViewPage/PhotoView';
import EmailNotifications from '../Emails&Notifications/EmailNotifications';
import configData from '../config.json';
import Albums from '../Profile/Albums';
import PrivacyPermissions from '../Privacy&Permissions/PrivacyPermissions';
import FirebaseLogin from '../Login/firebaselogin';
import StartPage from '../StartPage/StartPage';
import NavBarSP from '../StartPage/NavBarSP';

import('firebase/messaging');
import('firebase/database');

const FBlogout = () => {
  const FIREBASE_MESSAGING = firebase.messaging();
  const FIREBASE_DATABASE = firebase.database();
  const userjwt = jwt(localStorage.getItem('token'));
  FIREBASE_MESSAGING.getToken()
    .then((token) => {
      console.log(token);
      FIREBASE_MESSAGING.deleteToken(token);// DELETING TOKEN FROM FIREBASE_MESSAGING
    })
    .then(() => FIREBASE_DATABASE.ref('/tokens').orderByChild('userId').equalTo(userjwt.sub)
      .once('value')) // DELETING TOKEN FROM DB
    .then((snapshot) => {
      localStorage.clear();
      window.location.href = 'http://localhost:3000/login';
      if (snapshot.val()) {
        const key = Object.keys(snapshot.val())[0]; // since i ordered them above
        return FIREBASE_DATABASE.ref('/tokens').child(key).remove(); // deleting obtained key
      }
      return null;
    })
    .catch((err) => {
      console.log(err);
    });
};

function App() {
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  useEffect(() => {
    const interval = setInterval(() => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        const decodedData = jwt(storedToken);
        const expirationDate = decodedData.exp;
        const currenttime = (Date.now() / 1000);
        // eslint-disable-next-line no-self-compare
        if (currenttime > expirationDate) {
          FBlogout();
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flickr-main">
      <FirebaseLogin />
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/UpgradeToPro">
              <NavBar />
              <UpgradeToPro />
              <Footer />
            </Route>
            <Route exact path="/GettingStarted">
              <NavBar />
              <GettingStarted />
              <Footer />
            </Route>
            <Route exact path="/account/privacy">
              <NavBar />
              <PrivacyPermissions />
              <Footer />
            </Route>
            <Route exact path="/account/email">
              <NavBar />
              <EmailNotifications />
              <Footer />
            </Route>
            <Route exact path="/CameraFinder">
              <CameraFinder />
            </Route>
            <Route exact path="/account">
              <NavBar />
              <PersonalInformation />
              <Footer />
            </Route>
            <Route exact path="/account/delete">
              <NavBar />
              <DeleteAccount />
              <Footer />
            </Route>
            <Route exact path="/account/edit-profile">
              <NavBar />
              <EditPersonalInfo />
              <Footer />
            </Route>
            <Route exact path="/change-password">
              <NavBar />
              <ChangePassword />
              <Footer />
            </Route>
            <Route exact path="/SignUp">
              <AppBar />
              <SignUp />
              <Footer />
            </Route>
            <Route exact path="/VerifySignup">
              <VerifySignup />
              <Footer />
            </Route>
            <Route exact path="/Login">
              <AppBar />
              <Login />
              <Footer />
            </Route>
            <Route exact path="/ForgotPassword">
              <AppBar />
              <ForgotPassword />
              <Footer />
            </Route>
            <Route exact path="/SendEmail">
              <AppBar />
              <SendEmail />
              <Footer />
            </Route>
            <Route exact path="/">
              <NavBar />
              <HomePage />
              <Footer />
            </Route>
            <Route exact path="/Profile/About/:id">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <ProfileContainer />
              <Footer />
            </Route>
            <Route exact path="/Profile/Faves/:id">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <Faves />
              <Footer />
            </Route>
            <Route exact path="/Profile/Photostream/:id">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <Photostream />
              <Footer />
            </Route>
            <Route exact path="/profile/photostream/edit/:id">
              <NavBar />
              <EditPhotostream />
              <Footer />
            </Route>
            <Route path="/CameraRoll/:id">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <CameraRoll />
              <Footer />
            </Route>
            <Route path="/groups/members/">
              <GroupMembers />
              <Footer />
            </Route>
            <Route exact path="/Explore">
              <Explore />
              <Footer />
            </Route>
            <Route exact path="/about">
              <About />
              <Footer />
            </Route>
            <Route exact path="/followers/:userid">
              <FollowersPage />
              <Footer />
            </Route>
            <Route exact path="/myNotification">
              <Notification />
              <Footer />
            </Route>
            <Route exact path="/photos/upload">
              <Upload />
              <Footer />
            </Route>
            <Route exact path="/photoview/:routeId">
              <NavBar />
              <PhotoView />
              <Footer />
            </Route>
            <Route path="/search">
              <SearchPage />
              <Footer />
            </Route>
            <Route path="/Profile/albums/:id">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <Albums />
              <Footer />
            </Route>
            <Route exact path="/ex">
              <NavBarSP />
              <StartPage />
            </Route>
            <Route path="*">
              { /* path for all pages that don't exist */}
              <NotFound />
              <Footer />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
