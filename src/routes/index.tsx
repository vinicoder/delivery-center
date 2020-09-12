import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Orders from '../pages/Orders';
import Order from '../pages/Order';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Orders} />
    <Route path="/orders/:id" component={Order} />
  </Switch>
);

export default Routes;
