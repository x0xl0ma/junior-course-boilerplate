import React from 'react';
import clsx from 'classnames';

import './priceInput.css';
import LogRenderer from '../logRenderer/LogRenderer';

class PriceInput extends LogRenderer {
  render() {
    const {
      label,
      inputName,
      inputHandler,
      inputValue,
      additionalClasses = ''
    } = this.props;

    return (
      <label className={clsx('price-input-label', additionalClasses)}>
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
