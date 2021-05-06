import React from 'react';

import NavBar from './Navbar';
import Footer from './Footer';
import CameraRoll from './CameraRoll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {
  return (

    <div className="App">
      <NavBar />
      <CameraRoll />
      <Footer />
    
    </div>
  );
}

export default App;
