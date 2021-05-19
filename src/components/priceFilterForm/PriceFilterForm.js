import React from 'react';
import DiscountInput from '../discountInput/DiscountInput';
import LogRenderer from '../logRenderer/LogRenderer';
import PriceInput from '../priceInput/PriceInput';

import './priceFilterForm.css';

class PriceForm extends LogRenderer {
  render() {
    const { inputHandler, priceMin, priceMax, discount } = this.props;
    return (
      <form className="price-form">
        <h3 className="price-form-title">Цена</h3>

        <div className="price-input-wrapper">
          <PriceInput
            label="от"
            name="priceMin"
            onChange={inputHandler}
            value={priceMin}
          />

          <div className="price-form-input">
            <PriceInput
              label="до"
              name="priceMax"
              onChange={inputHandler}
              value={priceMax}
            />
          </div>
        </div>

        <DiscountInput
          title="Скидка"
          name="discount"
          value={discount}
          onChange={inputHandler}
        />

        {/* <Button text="Применить" /> */}
      </form>
    );
  }
}

export default PriceForm;
