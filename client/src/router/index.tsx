import * as React from 'react';
import {Router, Route} from 'react-router-dom';

import history from '@/tools/createHistory';

import Index from '@/pages/index/index.tsx';
import Details from '@/pages/details/index.tsx';


function RouterConfig() {
  return <Router history={history}>
    <Route
      exact
      path='/'
      component={Index}
    ></Route>
    <Route
      path='/details'
      component={Details}
    ></Route>
   
  </Router>;
}


export default RouterConfig;