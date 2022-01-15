import React from 'react';

const loadStatus = () => {
  throw new Promise((resolves) => null);
};

const Status = () => {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
};

export default Status;
