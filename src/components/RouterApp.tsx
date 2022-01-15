import React from 'react';

import { Route, Routes } from 'react-router';

import { About, Contact, Event, Home, Product } from './Page';

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/event' element={<Event />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default RouterApp;
