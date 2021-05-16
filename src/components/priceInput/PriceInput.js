import React from 'react';
import withInputHoc from '../../hoc/wihtInputsHoc';
import LogRenderer from '../logRenderer/LogRenderer';

import './priceInput.css';

class PriceInput extends LogRenderer {
  render() {
    const { label } = this.props;

    return (
      <label className="price-input-label">
        {label}
        <input type="text" {...this.props} className="price-input" />
      </label>
    );
  }
}

export default withInputHoc(PriceInput);
