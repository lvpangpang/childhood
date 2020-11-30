import React from 'react';

import Index from '@/pages/home';
import Detail from '@/pages/detail';
import Login from '@/pages/login';

const RoutesConfig = [
  {
    path: '/', 
    auth: true,
    component: Index
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