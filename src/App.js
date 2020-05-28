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
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </Router>
      </Layout>
    </div >
  );
}

export default App;
