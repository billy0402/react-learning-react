import React from 'react';

type Gnar = {
  gnar: string;
};

const createResource = <T,>(promise: Promise<T>) => {
  let response: T, error: Error;
  promise.then((r) => (response = r)).catch((e) => (error = e));

  return {
    read(): T {
      if (error) throw error;
      if (response) return response;
      throw promise;
    },
  };
};

const threeSecondsToGnar = new Promise<Gnar>((resolves) =>
  setTimeout(() => resolves({ gnar: 'gnarly!' }), 3000),
);

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

const resource = createResource<Gnar>(threeSecondsToGnar);

const Status = () => {
  const result = resource.read();
  return <h1>Gnar: {result.gnar}</h1>;
};

export default Status;
