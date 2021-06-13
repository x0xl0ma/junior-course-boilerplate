import React from "react";
import LogRenderer from "../logRenderer/LogRenderer";
import clsx from "classnames";

import styles from "./button.module.css";

class Button extends LogRenderer {
  render() {
    const { text, buttonHandler, classes } = this.props;
    console.log(classes);

    return (
      <button
        className={clsx(classes, styles.simpleButton)}
        onClick={buttonHandler}
        type="button"
      >
        {text}
      </button>
    );
  }
}

export default Button;
