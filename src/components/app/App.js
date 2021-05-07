import React from 'react';
import LogRenderer from '../logRenderer/LogRenderer';
import ProductsTitle from '../ProductsTitle/ProductsHeader';
import ProductsList from '../ProductsList/ProductsList';
import PriceForm from '../priceFilterForm/PriceFilterForm';

import products from '../../products.json';

import './app.css';

class App extends LogRenderer {
  state = { items: [], priceMin: 0, priceMax: 10000000 };

  componentDidMount() {
    this.setState({ items: products });
  }

  priceInputHandler = e => {
    this.setState({ [e.target.name]: Number(e.target.value) });
  };

  priceButtonHandler = e => {
    e.preventDefault();

    const { priceMin, priceMax } = this.state;

    if (priceMin < 0 || priceMax < 0) {
      return;
    }

    const filteredItems = this.state.items
      .filter(item => item.price >= priceMin)
      .filter(item => item.price <= priceMax);

    this.setState({ items: filteredItems });
  };

  render() {
    const { priceMin, priceMax, items } = this.state;

    return (
      <main className="app-container">
        <ProductsTitle />
        <div className="products-wrapper">
          <PriceForm
            inputHandler={this.priceInputHandler}
            priceMin={priceMin}
            priceMax={priceMax}
            buttonHandler={this.priceButtonHandler}
          />
          <ProductsList items={items} />
        </div>
      </main>
    );
  }
}

export default App;
