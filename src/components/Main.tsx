import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import SiteLayout from './SiteLayout';

const Menu = () => (
  <ErrorBoundary>
    <p style={{ color: 'white' }}>TODO: Build Menu</p>
  </ErrorBoundary>
);

const Callout = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
    <p>{children}</p>
  </ErrorBoundary>
);

const Main = () => {
  return (
    <SiteLayout menu={<Menu />}>
      <Callout>Welcome to the site</Callout>
      <ErrorBoundary>
        <h1>TODO: Home Page</h1>
        <p>Complete the main contents for this home page.</p>
      </ErrorBoundary>
    </SiteLayout>
  );
};

export default Main;
