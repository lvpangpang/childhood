import React from 'react';
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter
} from 'react-router-dom';

import { 
  CSSTransition, 
  TransitionGroup
} from 'react-transition-group';

import './index.less';
import RouterConfig from './config';

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back'
}

const Routes = withRouter(({location, history}) => (
  <TransitionGroup
    className={'router-wrapper-box'}
    childFactory={child => React.cloneElement(
      child,
      {classNames: ANIMATION_MAP[history.action]}
    )}
  >
    <CSSTransition
      timeout={500}
      key={location.pathname}
    >
      <Switch location={location}>
        {
          RouterConfig.map((item) => {
            return (
              <Route key={item.path} exact path={item.path} component={item.component} />
            );
          })
        }
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

export default function Index() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}