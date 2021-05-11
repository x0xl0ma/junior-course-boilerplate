import React from 'react';
import ProductItem from 'csssr-school-product-card';
import LogRenderer from '../logRenderer/LogRenderer';
import Rating from '../rating/Rating';

import './productsList.css';

class ProductsList extends LogRenderer {
  render() {
    const { items } = this.props;
    return (
      <ul className="products-list">
        {items.length > 0 ? (
          items.map(item => (
            <li className="product-wrapper" key={item.id}>
              <ProductItem
                isInStock={item.isInStock}
                img={item.img}
                title={item.name}
                price={item.price}
                subPriceContent={item.subPriceContent}
                maxRating={item.maxRating}
                rating={item.rating}
                ratingComponent={Rating}
              />
            </li>
          ))
        ) : (
          <span>Товары не загружены</span>
        )}
      </ul>
    );
  }
}

export default ProductsList;
