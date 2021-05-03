import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from '../Signup/Signup';
import './App.css';
import AppBar from '../Signup/flickrbar';
import VerifySignup from '../Signup/VerifySignup';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/verifysignup">
            <VerifySignup />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
