import React from 'react';

const loadStatus = () => {
  console.log('load status');
  // throw new Promise((resolves) => setTimeout(resolves, 3000));
  return 'success - ready';
};

// const safe = (fn: () => void) => {
//   try {
//     fn();
//   } catch (error) {
//     if (error instanceof Promise) {
//       error.then(() => safe(fn));
//     } else {
//       throw error;
//     }
//   }
// };

const Status = () => {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
};

export default Status;
