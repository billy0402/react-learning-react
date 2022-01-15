import React from 'react';

import { Navigate, useRoutes } from 'react-router';
import ColorDetail from './ColorDetail';
import ColorList from './ColorList';

import {
  About,
  Company,
  Contact,
  Event,
  History,
  Home,
  Location,
  Product,
  Services,
  Whoops404,
} from './Page';

const RouterApp = () => {
  const routes = useRoutes([
    { path: '', element: <Home /> },
    { path: 'color', element: <ColorList /> },
    { path: 'color/:id', element: <ColorDetail /> },
    {
      path: 'about',
      element: <About />,
      children: [
        { path: '', element: <Company /> },
        { path: 'services', element: <Services /> },
        { path: 'history', element: <History /> },
        { path: 'location', element: <Location /> },
      ],
    },
    { path: 'event', element: <Event /> },
    { path: 'product', element: <Product /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <Whoops404 /> },
    { path: 'services', element: <Navigate replace to='/about/services' /> },
  ]);
  return routes;
};

export default RouterApp;
