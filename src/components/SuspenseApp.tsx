import React, { Suspense, lazy, useState } from 'react';

import { ClimbingBoxLoader } from 'react-spinners';

import Agreement from './Agreement';
import ErrorBoundary from './ErrorBoundary';

const Main = lazy(() => import('./Main'));

const SuspenseApp = () => {
  const [agree, setAgree] = useState(false);

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<ClimbingBoxLoader css={{ position: 'absolute' }} />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseApp;
