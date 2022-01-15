import React, { Suspense, lazy, useState } from 'react';

import { ClimbingBoxLoader, GridLoader } from 'react-spinners';

import Agreement from './Agreement';
import ErrorBoundary from './ErrorBoundary';
import Status from './Status';

const Main = lazy(() => import('./Main'));

const SuspenseApp = () => {
  const [agree, setAgree] = useState(false);

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />;
  }

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<GridLoader />}>
          <Status />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense
          fallback={<ClimbingBoxLoader css={{ position: 'absolute' }} />}
        >
          <Main />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default SuspenseApp;
