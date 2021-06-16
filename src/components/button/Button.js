import React from "react";
import LogRenderer from "../logRenderer/LogRenderer";

class Button extends LogRenderer {
  render() {
    const { text, buttonHandler, classes } = this.props;

    return (
      <button className={classes} onClick={buttonHandler} type="button">
        {text}
      </button>
    );
  }
}

export default Button;
