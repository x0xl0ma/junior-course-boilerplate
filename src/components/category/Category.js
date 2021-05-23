import React from "react";
import LogRenderer from "../logRenderer/LogRenderer";
import clsx from "classnames";

import "./category.css";

class Category extends LogRenderer {
  render() {
    const { name, selectedCategory, categoryHandler } = this.props;

    return (
      <button
        onClick={e => categoryHandler(e, name)}
        className={
          selectedCategory === name ? clsx("category", "selected") : "category"
        }
      >
        {name}
      </button>
    );
  }
}

export default Category;
