import React, { useState } from 'react';
import ProductsTitle from '../ProductsTitle/ProductsHeader';
import ProductsList from '../ProductsList/ProductsList';

import products from '../../products.json';

import './app.css';

const App = () => {
  const [items] = useState(products || []);

  return (
    <main className="app-container">
      <ProductsTitle />
      <ProductsList items={items} />
    </main>
  );
};

export default App;
