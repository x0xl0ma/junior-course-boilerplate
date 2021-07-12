import React from "react";
import clsx from "classnames";
import LogRenderer from "../logRenderer/LogRenderer";

import styles from "./button.module.css";

const buttonTypes = {
  simple: styles.simple_button
};

class Button extends LogRenderer {
  render() {
    const { children, buttonHandler, buttonType } = this.props;

    return (
      <button
        className={clsx(styles.root_button, buttonTypes[buttonType])}
        onClick={buttonHandler}
        type="button"
      >
        {children}
      </button>
    );
  }
}

export default Button;
