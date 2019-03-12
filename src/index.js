import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import App from './App';
import NotFound from './components/NotFound';
import Header from './components/Header';
import SearchPlayer from './components/SearchPlayer';

ReactDOM.render(
  <Router>
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/search/player" component={SearchPlayer} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
