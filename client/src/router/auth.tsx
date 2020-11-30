import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

function Auth(props) {
  const { location, config } = props;
  const { pathname } = location;
  const isLogin = localStorage.getItem('xToken');
  const target = config.find((item) => item.path === pathname);
  const { auth } = target;
  const check = () => {
    if(auth && !isLogin) {
      return <Redirect to='/login'></Redirect>;
    }
    return <Route exact path={target['path']} component={target['component']} />
  };
  return check();
}

export default Auth;