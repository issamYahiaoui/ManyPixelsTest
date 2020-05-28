import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './containers/Home'
import Profile from './containers/Profile'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
