import React from 'react';
import LogRenderer from '../logRenderer/LogRenderer';

import './priceInput.css';

class PriceInput extends LogRenderer {
  render() {
    const { label, inputName, inputHandler, inputValue } = this.props;

    return (
      <label className="price-input-label">
        {label}
        <input
          type="text"
          name={inputName}
          value={inputValue}
          onChange={inputHandler}
          className="price-input"
        />
      </label>
    );
  }
}

export default PriceInput;
