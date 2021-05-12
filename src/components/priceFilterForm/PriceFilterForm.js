import React from 'react';
import Button from '../button/Button';
import LogRenderer from '../logRenderer/LogRenderer';
import PriceInput from '../priceInput/PriceInput';

import './priceFilterForm.css';

class PriceForm extends LogRenderer {
  render() {
    const { inputHandler, priceMin, priceMax, buttonHandler } = this.props;
    return (
      <form className="price-form" onSubmit={buttonHandler}>
        <h3 className="price-form-title">Цена</h3>

        <div className="price-input-wrapper">
          <PriceInput
            label="от"
            inputName="priceMin"
            inputHandler={inputHandler}
            inputValue={priceMin}
          />

          <div className="price-form-input">
            <PriceInput
              label="до"
              inputName="priceMax"
              inputHandler={inputHandler}
              inputValue={priceMax}
            />
          </div>
        </div>

        <Button text="Применить" />
      </form>
    );
  }
}

export default PriceForm;
