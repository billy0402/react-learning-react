import React, { useState } from 'react';

import Agreement from './Agreement';
import Main from './Main';

const SuspenseApp = () => {
  const [agree, setAgree] = useState(false);

  if (!agree) {
    return <Agreement onAgree={() => setAgree(true)} />;
  }

  return <Main />;
};

export default SuspenseApp;
