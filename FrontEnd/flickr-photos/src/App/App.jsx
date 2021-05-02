import React from 'react';
import SignUp from '../Signup/Signup';
import './App.css';
import AppBar from '../Signup/flickrbar';
// import VerifySignup from '../Signup/VerifySignup';

function App() {
  return (
    <div className="App">
      <AppBar />
      <SignUp />
      {/* <VerifySignup /> */}
    </div>
  );
}

export default App;
