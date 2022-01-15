import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { ColorProvider } from './providers/ColorProvider';

ReactDOM.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById('root'),
);
