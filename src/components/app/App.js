import React, { createContext } from "react";
import LogRenderer from "../logRenderer/LogRenderer";
import ProductsTitle from "../ProductsTitle/ProductsHeader";
import ProductsList from "../ProductsList/ProductsList";
import PriceForm from "../priceFilterForm/PriceFilterForm";
import { maxBy, minBy } from "csssr-school-utils";

import products from "../../products.json";

import "./app.css";

export const Context = createContext({});

class App extends LogRenderer {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
      priceMin: minBy(product => product.price, products).price,
      priceMax: maxBy(product => product.price, products).price,
      discount: 0,
      selectedCategory: null
    };
  }

  priceInputHandler = e => {
    this.setState({ [e.target.name]: Number(e.target.value) });
  };

  categoryHandler = (e, categoryName) => {
    e.preventDefault();
    this.setState({ ...this.state, selectedCategory: categoryName });
  };

  resetFiltersHandler = e => {
    e.preventDefault();
    this.setState({
      items: products,
      priceMin: minBy(product => product.price, products).price,
      priceMax: maxBy(product => product.price, products).price,
      discount: 0,
      selectedCategory: null
    });
  };

  render() {
    const {
      priceMin,
      priceMax,
      discount,
      items,
      selectedCategory
    } = this.state;

    const filteredItems = items.filter(
      item =>
        item.price >= priceMin &&
        item.price <= priceMax &&
        (discount ? item.discount === discount : true) &&
        (selectedCategory ? item.category === selectedCategory : true)
    );

    return (
      <Context.Provider value={this.state}>
        <main className="app-container">
          <ProductsTitle />
          <div className="products-wrapper">
            <PriceForm
              inputHandler={this.priceInputHandler}
              categoryHandler={this.categoryHandler}
              resetFiltersHandler={this.resetFiltersHandler}
            />
            <ProductsList items={filteredItems} />
          </div>
        </main>
      </Context.Provider>
    );
  }
}

export default App;
