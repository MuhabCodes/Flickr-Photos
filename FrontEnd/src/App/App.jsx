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
import FollowersPage from '../Followers/FollowersPage';
import configData from '../config.json';

function App() {
  axios.defaults.baseURL = `${configData.SERVER_URL}`;
  axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikhvc255QGdtYWlsLmNvbSIsImlhdCI6MTYyMjQ3MTMzOSwiZXhwIjoxNjIyNDc0OTM5LCJzdWIiOiI0In0.zZmIFi2i7ZYp9OuW96b48H59a-dTqdJNa_F4gZP3QSI';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  localStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikhvc255QGdtYWlsLmNvbSIsImlhdCI6MTYyMjQ3MTMzOSwiZXhwIjoxNjIyNDc0OTM5LCJzdWIiOiI0In0.zZmIFi2i7ZYp9OuW96b48H59a-dTqdJNa_F4gZP3QSI');
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
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/followers?:userid">
              <FollowersPage />
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
