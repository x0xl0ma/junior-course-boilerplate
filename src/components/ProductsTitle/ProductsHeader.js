import React from "react";
import LogRenderer from "../logRenderer/LogRenderer";

import styles from "./productsTitle.module.css";

class ProductsTitle extends LogRenderer {
  render() {
    return <h1 className={styles.product_title}>Список товаров</h1>;
  }
}

export default ProductsTitle;
