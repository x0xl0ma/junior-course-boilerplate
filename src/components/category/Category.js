import React from "react";
import LogRenderer from "../logRenderer/LogRenderer";
import clsx from "classnames";

import styles from "./category.module.css";
import Button from "../button/Button";

class Category extends LogRenderer {
  render() {
    const { name, selectedCategory, categoryHandler } = this.props;

    return (
      // <button
      //   onClick={e => categoryHandler(e, name)}
      //   className={clsx(styles.category, {
      //     [styles.selected]: selectedCategory.includes(name)
      //   })}
      // >
      //   {name}
      // </button>
      <Button
        text={name}
        buttonHandler={e => categoryHandler(e, name)}
        classes={clsx(styles.category, {
          [styles.selected]: selectedCategory.includes(name)
        })}
      />
    );
  }
}

export default Category;
