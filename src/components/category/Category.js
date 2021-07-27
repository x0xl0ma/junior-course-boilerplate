import React from "react";
import LogRenderer from "../logRenderer/LogRenderer";

import styles from "./category.module.css";

class Category extends LogRenderer {
  render() {
    const { name, categoryHandler, checked } = this.props;

    return (
      <div className={`${styles.checkbox} ${checked ? styles.checked : ""}`}>
        <input
          type="checkbox"
          id={name}
          value={name}
          checked={checked}
          onChange={e => categoryHandler(e, name)}
        />
        <label htmlFor={name}>{name}</label>
      </div>
    );
  }
}

export default Category;
