import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
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
// import Footer from './Footer';
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
// import FBlogin from '../Login/firebaselogin2';

function App() {
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikhvc255QGdtYWlsLmNvbSIsImlhdCI6MTYyMjQ3MTMzOSwiZXhwIjoxNjIyNDc0OTM5LCJzdWIiOiI0In0.zZmIFi2i7ZYp9OuW96b48H59a-dTqdJNa_F4gZP3QSI';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  localStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikhvc255QGdtYWlsLmNvbSIsImlhdCI6MTYyMjQ3MTMzOSwiZXhwIjoxNjIyNDc0OTM5LCJzdWIiOiI0In0.zZmIFi2i7ZYp9OuW96b48H59a-dTqdJNa_F4gZP3QSI');
  return (
    <div className="flickr-main">
      <FirebaseLogin />
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/UpgradeToPro">
              <UpgradeToPro />
            </Route>
            <Route exact path="/GettingStarted">
              <GettingStarted />
            </Route>
            <Route exact path="/account/privacy">
              <NavBar />
              <PrivacyPermissions />
            </Route>
            <Route exact path="/emailnotif">
              <EmailNotifications />
            </Route>
            <Route exact path="/CameraFinder">
              <CameraFinder />
            </Route>
            <Route exact path="/account">
              <PersonalInformation />
            </Route>
            <Route exact path="/account/delete">
              <DeleteAccount />
            </Route>
            <Route exact path="/account/edit-profile">
              <EditPersonalInfo />
            </Route>
            <Route exact path="/change-password">
              <ChangePassword />
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
              <NavBar />
              <HomePage />
            </Route>
            <Route exact path="/Profile/About/:id">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <ProfileContainer />
            </Route>
            <Route exact path="/Profile/Faves/:id">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <Faves />
            </Route>
            <Route exact path="/Profile/Photostream/:id">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <Photostream />
            </Route>
            <Route exact path="/profile/photostream/edit/:id">
              <NavBar />
              <EditPhotostream />
            </Route>
            <Route path="/CameraRoll">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <CameraRoll />
            </Route>
            <Route path="/groups/members/">
              <GroupMembers />
            </Route>
            <Route exact path="/Explore">
              <Explore />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/followers/:userid">
              <FollowersPage />
            </Route>
            <Route exact path="/Notification">
              <Notification />
            </Route>
            <Route exact path="/photos/upload">
              <Upload />
            </Route>
            <Route exact path="/photoview/:routeId">
              <PhotoView />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/Profile/albums/:id">
              <NavBar />
              <CoverArea />
              <SubNavBar />
              <Albums />
            </Route>
            <Route path="*">
              { /* path for all pages that don't exist */ }
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
