import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import SignIn from 'pages/SignIn';
import Orders from 'pages/Orders';
import Order from 'pages/Order';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" isPrivate exact component={Dashboard} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/orders" isPrivate exact component={Orders} />
    <Route path="/orders/:id" isPrivate component={Order} />
  </Switch>
);

export default Routes;
