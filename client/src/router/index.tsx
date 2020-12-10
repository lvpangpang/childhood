import React, { Suspense } from 'react';
import {
  Router,
  Switch
} from 'react-router-dom';

import history from './history';
import RouterConfig from './config';
import Auth from './auth';

export default function Index() {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Auth config={RouterConfig}></Auth>
        </Switch>
      </Suspense>
    </Router>
  );
}