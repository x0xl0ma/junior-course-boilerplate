import React from 'react';
import LogRenderer from '../logRenderer/LogRenderer';
import ProductsTitle from '../ProductsTitle/ProductsHeader';
import ProductsList from '../ProductsList/ProductsList';
import PriceForm from '../priceFilterForm/PriceFilterForm';

import products from '../../products.json';

import './app.css';

class App extends LogRenderer {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
      priceMin: 0,
      priceMax: 10000000,
      discount: 0
    };
  }

  priceInputHandler = e => {
    this.setState({ [e.target.name]: Number(e.target.value) });
  };

  render() {
    const { priceMin, priceMax, discount } = this.state;

    const filteredItems = this.state.items
      .filter(item => item.price >= priceMin && item.price <= priceMax)
      .filter(item => (discount ? item.discount === discount : true));

    return (
      <main className="app-container">
        <ProductsTitle />
        <div className="products-wrapper">
          <PriceForm
            inputHandler={this.priceInputHandler}
            priceMin={priceMin}
            priceMax={priceMax}
            discount={discount}
          />
          <ProductsList items={filteredItems} />
        </div>
      </main>
    );
  }
}

export default App;
