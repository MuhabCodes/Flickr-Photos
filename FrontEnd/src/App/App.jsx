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
import Footer from './Footer';
import CameraRoll from '../CameraRoll/CameraRoll';
import CoverArea from '../Profile/Cover';
import SubNavBar from '../Profile/SubNavBar';
import ProfileContainer from '../Profile/ProfileContainer';
import Faves from '../Profile/faves';
import GroupMembers from './GroupMembers';
import NavBar from './Navbar';
import Explore from '../RecentPhotos/Explore';
import About from '../AboutPage/About';
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
import configData from '../config.json';

function App() {
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common.Authorization = localStorage.getItem('token');
  return (
    <div className="flickr-main">
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/UpgradeToPro">
              <UpgradeToPro />
            </Route>
            <Route exact path="/GettingStarted">
              <GettingStarted />
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
            <Route path="/Profile/About/:id">
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
