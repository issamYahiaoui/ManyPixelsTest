import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { toIdValue } from 'apollo-utilities';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const ApiURI = "https://metaphysics-staging.artsy.net";

const cache = new InMemoryCache({

});

const client = new ApolloClient({
  cache,
  uri: ApiURI
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
