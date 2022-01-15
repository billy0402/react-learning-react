import React from 'react';

import BreakThings from './BreakThings';
import ErrorBoundary from './ErrorBoundary';
import SiteLayout from './SiteLayout';

const SuspenseApp = () => {
  return (
    <SiteLayout
      menu={
        <ErrorBoundary>
          <p>&lt;Site Layout Menu/&gt;</p>
        </ErrorBoundary>
      }
    >
      <ErrorBoundary>
        <p>&lt;Callout/&gt;</p>
      </ErrorBoundary>
      <ErrorBoundary>
        <h1>&lt;Content/&gt;</h1>
        <p>This is the main part of the example layout.</p>
        <BreakThings />
      </ErrorBoundary>
    </SiteLayout>
  );
};

export default SuspenseApp;
