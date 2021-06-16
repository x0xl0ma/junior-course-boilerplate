import React, { createContext } from "react";
import LogRenderer from "../logRenderer/LogRenderer";
import ProductsTitle from "../ProductsTitle/ProductsHeader";
import ProductsList from "../ProductsList/ProductsList";
import PriceForm from "../priceFilterForm/PriceFilterForm";
import { maxBy, minBy } from "csssr-school-utils";

import products from "../../products.json";

import styles from "./app.module.css";

export const Context = createContext({});

class App extends LogRenderer {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
      priceMin: minBy(product => product.price, products).price,
      priceMax: maxBy(product => product.price, products).price,
      discount: 0,
      selectedCategory: []
    };
  }

  componentDidMount() {
    const [, categoriesFromUrl] = window.location.search.split("=");
    const selectedCategory = categoriesFromUrl
      ? categoriesFromUrl.split(",")
      : [];
    this.setState({
      ...this.state,
      selectedCategory
    });

    window.addEventListener("popstate", this.setFromHistory);
  }

  componentWillUnmount = () => {
    window.removeEventListener("popstate", this.setFromHistory);
  };

  setFromHistory = e => {
    const categoryFromState = e.state ? e.state.categoryName : [];

    this.setState({ ...this.state, selectedCategory: categoryFromState });
  };

  priceInputHandler = e => {
    this.setState({ [e.target.name]: Number(e.target.value) });
  };

  categoryHandler = (e, categoryName) => {
    e.preventDefault();
    let newSelectedCategories;

    if (this.state.selectedCategory.includes(categoryName)) {
      newSelectedCategories = this.state.selectedCategory.filter(
        c => c !== categoryName
      );
    } else {
      newSelectedCategories = [...this.state.selectedCategory, categoryName];
    }

    const categoryForUrl = newSelectedCategories.length
      ? `?categories=${newSelectedCategories.join(",")}`
      : "/";

    this.setState(prev => ({
      ...prev,
      selectedCategory: newSelectedCategories
    }));
    window.history.pushState(
      { categoryName: newSelectedCategories },
      "category",
      categoryForUrl
    );
  };

  resetFiltersHandler = e => {
    e.preventDefault();
    this.setState({
      items: products,
      priceMin: minBy(product => product.price, products).price,
      priceMax: maxBy(product => product.price, products).price,
      discount: 0,
      selectedCategory: []
    });
    window.history.pushState(null, "best-shop", "/");
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
        (selectedCategory.length
          ? selectedCategory.includes(item.category)
          : true)
    );

    return (
      <Context.Provider value={this.state}>
        <main className={styles.app_container}>
          <ProductsTitle />
          <div className={styles.products_wrapper}>
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
