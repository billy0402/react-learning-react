import React from 'react';
import ReactDOM from 'react-dom';

import 'regenerator-runtime/runtime';

import { ColorProvider } from './providers/ColorProvider';
import SuspenseApp from './components/SuspenseApp';

ReactDOM.render(
  <ColorProvider>
    <SuspenseApp />
  </ColorProvider>,
  document.getElementById('root'),
);
