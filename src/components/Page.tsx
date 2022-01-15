import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>[Company Website]</h1>
      <nav>
        <Link to='about'>About</Link>
        <Link to='event'>Event</Link>
        <Link to='product'>Product</Link>
        <Link to='contact'>Contact</Link>
      </nav>
    </>
  );
};

const About = () => {
  return <h1>[About]</h1>;
};

const Event = () => {
  return <h1>[Event]</h1>;
};

const Product = () => {
  return <h1>[Product]</h1>;
};

const Contact = () => {
  return <h1>[Contact]</h1>;
};

export { Home, About, Event, Product, Contact };