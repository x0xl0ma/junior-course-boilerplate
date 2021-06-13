import React from "react";
import ProductItem from "csssr-school-product-card";
import LogRenderer from "../logRenderer/LogRenderer";
import Rating from "../rating/Rating";

import styles from "./productsList.module.css";

class ProductsList extends LogRenderer {
  render() {
    const { items } = this.props;
    return (
      <ul className={styles.products_list}>
        {items.length > 0 ? (
          items.map(item => (
            <li className={styles.product_wrapper} key={item.id}>
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
          <span className={styles.products_list_error}>
            Товары не загружены
          </span>
        )}
      </ul>
    );
  }
}

export default ProductsList;
