import React from 'react';

import StarRating from './StarRating';

const App = () => {
  return (
    <StarRating
      style={{ backgroundColor: 'lightblue' }}
      onDoubleClick={() => alert('double click')}
    />
  );
};

export default App;
