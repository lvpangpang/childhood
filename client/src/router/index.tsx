import React, {  Suspense } from 'react';
import {Router, Route, withRouter} from 'react-router-dom';

import {TransitionGroup, CSSTransition} from 'react-transition-group';

import history from '@/tools/createHistory';
import RoutesConfig from './config.tsx';
import './index.less';

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back'
};

const Routes = withRouter(({location}) => {
  return (
    <TransitionGroup 
      className={'router-wrapper'}
      childFactory={child => React.cloneElement(
        child,
        {classNames: ANIMATION_MAP[history.action]}
      )}
    >
      <CSSTransition
        timeout={300}
        key={location.pathname}
      >
        <div className='router'>
          <Suspense fallback={<></>}>
          {
            RoutesConfig.map((item) => {
              return <Route
                exact
                key={item.path}
                path={item.path}
                component={item.component}
              ></Route>
            })
          }
          </Suspense>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
})

const RoutesList = () => {
  return (
    <Router history={history}>
      <Routes></Routes>
    </Router>
  );
};


export default RoutesList;