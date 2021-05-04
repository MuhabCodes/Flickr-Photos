import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppBar from '../Login/flickrbar';
import Login from '../Login/logIn';
import ForgotPassword from '../Login/forgotPassword';
import SendEmail from '../Login/SendEmail';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
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
      </div>
    </Router>
  );
}

export default App;
