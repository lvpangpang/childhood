import React from 'react';

import Index from '@/pages/home';
import Detail from '@/pages/detail';

const RoutesConfig = [
  {
    path: '/', 
    component: Index
  },
  {
    path: '/detail', 
    component: Detail
  }
];

export default RoutesConfig;