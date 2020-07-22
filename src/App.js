import React from 'react';

import Header from './components/Header';
import Filter from './components/Filter';
import Main from './components/Main';

import './App.scss';

function App() {
  return (
    <div className="app grid">
      <Header />
      <Filter />
      <Main />
    </div>
  );
}

export default App;
