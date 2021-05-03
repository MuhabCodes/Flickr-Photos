import React from 'react';
import './App.css';
import AppBar from '../Login/flickrbar';
// import Login from '../Login/logIn';
import ForgotPassword from '../Login/forgotPassword';

function App() {
  return (
    <div className="App">
      <AppBar />
      <ForgotPassword />
      {/* <Login /> */}
    </div>
  );
}

export default App;
