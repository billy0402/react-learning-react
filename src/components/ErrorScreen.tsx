import React from 'react';

import { FallbackProps } from './ErrorBoundary';

const ErrorScreen = ({ error }: FallbackProps) => {
  return (
    <div
      style={{
        backgroundColor: '#efacac',
        border: 'double 4px red',
        color: 'red',
        padding: '1em',
      }}
    >
      <h3>We are sorry... something went wrong</h3>
      <p>We cannot process your request at this moment.</p>
      <p>ERROR: {error?.message}</p>
    </div>
  );
};

export default ErrorScreen;
