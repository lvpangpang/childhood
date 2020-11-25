import React from 'react';

import Index from '@/pages/home';
import Detail from '@/pages/detail';
import Login from '@/pages/login';

const RoutesConfig = [
  {
    path: '/', 
    component: Index
  },
  {
    path: '/detail', 
    component: Detail
  },
  {
    path: '/login', 
    component: Login
  }
];

export default RoutesConfig;