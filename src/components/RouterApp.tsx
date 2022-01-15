import React from 'react';

import { Navigate, Route, Routes } from 'react-router';

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
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />}>
        <Route path='' element={<Company />} />
        <Route path='services' element={<Services />} />
        <Route path='history' element={<History />} />
        <Route path='location' element={<Location />} />
      </Route>
      <Route path='event' element={<Event />} />
      <Route path='product' element={<Product />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<Whoops404 />} />
      <Route
        path='services'
        element={<Navigate replace to='/about/services' />}
      />
    </Routes>
  );
};

export default RouterApp;
