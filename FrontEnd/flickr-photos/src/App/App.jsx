import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Explore from '../RecentPhotos/Explore';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Explore />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
