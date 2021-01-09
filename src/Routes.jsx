import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './Components/Login/LoginPage';
import Counter from './Components/Counter';

export default () => (
  <Switch>
    <Route exact path="/" component={() => <div>Home page</div>} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/counter" component={Counter} />
  </Switch>
);
