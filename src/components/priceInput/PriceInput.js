import React from "react";
import withInputHoc from "../../hoc/wihtInputsHoc";
import LogRenderer from "../logRenderer/LogRenderer";

import styles from "./priceInput.module.css";

class PriceInput extends LogRenderer {
  render() {
    const { label } = this.props;

    return (
      <label className={styles.price_input_label}>
        {label}
        <input type="text" {...this.props} className={styles.price_input} />
      </label>
    );
  }
}

export default withInputHoc(PriceInput);
