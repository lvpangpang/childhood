import React from 'react';

const Home = React.lazy(() => import('@/pages/home'));
const Detail = React.lazy(() => import('@/pages/detail'));
const Login = React.lazy(() => import('@/pages/login'));

const RoutesConfig = [
  {
    path: '/', 
    auth: true,
    component: Home
  },
  {
    path: '/detail',
    auth: true,
    component: Detail
  },
  {
    path: '/login', 
    component: Login
  }
];

export default RoutesConfig;