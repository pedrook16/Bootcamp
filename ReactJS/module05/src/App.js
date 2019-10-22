import React from 'react';
import './App.css';

import Router from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
