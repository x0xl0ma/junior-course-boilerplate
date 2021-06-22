import React from 'react';
import DiscountInput from '../discountInput/DiscountInput';
import LogRenderer from '../logRenderer/LogRenderer';
import PriceInput from '../priceInput/PriceInput';
import Button from '../button/Button';

import { Context } from '../app/App';

import styles from './priceFilterForm.module.css';

class PriceForm extends LogRenderer {
  render() {
    const { inputHandler, categoryHandler, resetFiltersHandler } = this.props;

    return (
      <Context.Consumer>
        {filterData => {
          return (
            <form className={styles.priceForm}>
              <h3 className={styles.priceForm_title}>Цена</h3>

              <div className={styles.price_input_wrapper}>
                <PriceInput
                  label="от"
                  name="priceMin"
                  onChange={inputHandler}
                  value={filterData.priceMin}
                />

                <div className={styles.price_form_input}>
                  <PriceInput
                    label="до"
                    name="priceMax"
                    onChange={inputHandler}
                    value={filterData.priceMax}
                  />
                </div>
              </div>

              <DiscountInput
                title="Скидка"
                name="discount"
                value={filterData.discount}
                onChange={inputHandler}
              />

              <div className={styles.price_form_categories}>
                <h3 className={styles.price_form_title}>Категории</h3>

                <Button
                  isSelected={filterData.selectedCategory.includes('books')}
                  buttonHandler={e => categoryHandler(e, 'books')}
                  buttonType="category"
                >
                  books
                </Button>

                <div className={styles.price_form_input}>
                  <Button
                    isSelected={filterData.selectedCategory.includes('clothes')}
                    buttonHandler={e => categoryHandler(e, 'clothes')}
                    buttonType="category"
                  >
                    clothes
                  </Button>
                </div>
              </div>

              <Button buttonHandler={resetFiltersHandler} buttonType="simple">
                Сбросить фильтры
              </Button>
            </form>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default PriceForm;
