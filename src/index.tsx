import React from 'react';
import ReactDOM from 'react-dom';

import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';

import { ColorProvider } from './providers/ColorProvider';
import RouterApp from './components/RouterApp';

ReactDOM.render(
  <BrowserRouter>
    <ColorProvider>
      <RouterApp />
    </ColorProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
