import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './Components/Auth/LoginPage';

export default () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
  </Switch>
);
