import React from 'react';
import LogRenderer from '../logRenderer/LogRenderer';

import './productsTitle.css';

class ProductsTitle extends LogRenderer {
  render() {
    return <h1 className="product-title">Список товаров</h1>;
  }
}

export default ProductsTitle;
