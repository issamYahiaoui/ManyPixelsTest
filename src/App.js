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
          <Route exact path="/" component={Home} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
