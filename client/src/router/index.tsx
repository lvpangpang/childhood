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
      <Suspense fallback={<></>}>
        <Switch>
          <Auth config={RouterConfig}></Auth>
        </Switch>
      </Suspense>
    </Router>
  );
}