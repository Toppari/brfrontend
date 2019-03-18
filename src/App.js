import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import NotFound from './components/NotFound';
import MainMenu from './components/MainMenu';
import SearchPlayer from './components/SearchPlayer';

const App = () => {
  return (
    <Router>
      <Container>
        <MainMenu />
        <Switch>
          <Route exact path="/" component={SearchPlayer} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
