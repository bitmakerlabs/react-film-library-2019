import React from 'react';

const FaveContext = React.createContext({
  faves: [],
  toggleFave: () => {},
});

export default FaveContext;