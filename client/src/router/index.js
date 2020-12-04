import React, { Suspense } from 'react';
import {
  Switch,
  BrowserRouter
} from 'react-router-dom';

import RouterConfig from './config';
import Auth from './auth';

export default function Index() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/childhood' : '/'}>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Auth config={RouterConfig}></Auth>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}