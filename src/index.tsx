import React from 'react';
import ReactDOM from 'react-dom';

import 'regenerator-runtime/runtime';

import App from './components/App';
import { ColorProvider } from './providers/ColorProvider';

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root'),
);
