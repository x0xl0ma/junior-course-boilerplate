import React from "react";
import Category from "../category/Category";
import DiscountInput from "../discountInput/DiscountInput";
import LogRenderer from "../logRenderer/LogRenderer";
import PriceInput from "../priceInput/PriceInput";
import Button from "../button/Button";

import { Context } from "../app/App";

import "./priceFilterForm.css";

class PriceForm extends LogRenderer {
  render() {
    const { inputHandler, categoryHandler, resetFiltersHandler } = this.props;

    return (
      <Context.Consumer>
        {value => {
          return (
            <form className="price-form">
              <h3 className="price-form-title">Цена</h3>

              <div className="price-input-wrapper">
                <PriceInput
                  label="от"
                  name="priceMin"
                  onChange={inputHandler}
                  value={value.priceMin}
                />

                <div className="price-form-input">
                  <PriceInput
                    label="до"
                    name="priceMax"
                    onChange={inputHandler}
                    value={value.priceMax}
                  />
                </div>
              </div>

              <DiscountInput
                title="Скидка"
                name="discount"
                value={value.discount}
                onChange={inputHandler}
              />

              <div className="price-form-categories">
                <h3 className="price-form-title">Категории</h3>

                <Category
                  name="books"
                  selectedCategory={value.selectedCategory}
                  categoryHandler={categoryHandler}
                />

                <div className="price-form-input">
                  <Category
                    name="clothes"
                    selectedCategory={value.selectedCategory}
                    categoryHandler={categoryHandler}
                  />
                </div>
              </div>

              <Button
                text="Сбросить фильтры"
                buttonHandler={resetFiltersHandler}
              />
            </form>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default PriceForm;
