import React from 'react';
import LogRenderer from '../logRenderer/LogRenderer';
import InputDiscount from 'csssr-school-input-discount';
import withInputHoc from '../../hoc/wihtInputsHoc';

class DiscountInput extends LogRenderer {
  render() {
    return <InputDiscount {...this.props} />;
  }
}

export default withInputHoc(DiscountInput);
