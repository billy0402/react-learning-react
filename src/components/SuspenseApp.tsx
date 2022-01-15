import React from 'react';

import SiteLayout from './SiteLayout';

const SuspenseApp = () => {
  return (
    <SiteLayout menu={<p>Menu</p>}>
      <p>Callout</p>
      <h1>Content</h1>
      <p>This is the main part of the example layout.</p>
    </SiteLayout>
  );
};

export default SuspenseApp;
