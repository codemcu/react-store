import React from 'react';

import Header from './components/Header';
import Filter from './components/Filter';
import Main from './components/Main';

import './App.scss';

function App() {
  return (
    <div className="app grid">
      <Header />
      <div className="container">
        <Filter />
        <Main />
      </div>
    </div>
  );
}

export default App;
