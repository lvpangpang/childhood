import React from 'react';

const Index = React.lazy(() => import('@/pages/index/index.tsx'));
const Details = React.lazy(() => import('@/pages/details/index.tsx'));

const RoutesConfig = [
  {
    path: '/', 
    component: Index
  },
  {
    path: '/details', 
    component: Details
  },
];

export default RoutesConfig;