import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './containers/Home'
import Profile from './containers/Profile'
import Layout from './components/Layout'

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </Layout>
      </Router>
    </div >
  );
}

export default App;
