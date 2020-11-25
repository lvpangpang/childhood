import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';

import RouterConfig from './config';

const Routes = () => (
  <Switch>
    {
      RouterConfig.map((item) => {
        return (
          <Route key={item.path} exact path={item.path} component={item.component} />
        );
      })
    }
  </Switch>
);

export default function Index() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}