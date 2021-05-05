import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../ErrorPages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
