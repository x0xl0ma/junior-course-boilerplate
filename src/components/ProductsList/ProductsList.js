import React from 'react';
import ProductItem from 'csssr-school-product-card';
import Rating from '../rating/Rating';

import './productsList.css';

const ProductsList = ({ items }) => {
  return (
    <div className="products-list">
      {items.length > 0 ? (
        items.map(item => (
          <div className="product-wrapper">
            <ProductItem
              isInStock={item.isInStock}
              img={item.img}
              title={item.name}
              price={item.price}
              subPriceContent={item.subPriceContent}
              maxRating={item.maxRating}
              rating={item.rating}
              ratingComponent={Rating}
              key={item.id}
            />
          </div>
        ))
      ) : (
        <span>Товары не загружены</span>
      )}
    </div>
  );
};

export default ProductsList;
