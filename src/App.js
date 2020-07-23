import React from 'react';

import Header from './components/Header';
import Filter from './components/Filter';
import SneakersList from './components/SneakersList';
import ProductContext from './context/ProductContext';

import './App.scss';

function App() {
  return (
    <ProductContext>
      <div className="app grid">
        <Header />
        <div className="container">
          <Filter />
          <main>
            <SneakersList />
          </main>
        </div>
      </div>
    </ProductContext>
  );
}

export default App;
