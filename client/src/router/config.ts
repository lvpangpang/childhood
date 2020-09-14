import React from 'react';

import HomePage from '@/pages/HomePage.tsx';
import AboutPage from '@/pages/AboutPage.tsx';
import DetailPage from '@/pages/DetailPage.tsx';

/* const HomePage = React.lazy(() => import('@/pages/HomePage.tsx'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage.tsx'));
const DetailPage = React.lazy(() => import('@/pages/DetailPage.tsx')); */


const RoutesConfig = [
  {
    path: '/', 
    component: HomePage
  },
  {
    path: '/about', 
    component: AboutPage
  },
  {
    path: '/detail', 
    component: DetailPage
  },
];

export default RoutesConfig;