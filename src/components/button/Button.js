import React from "react";
import LogRenderer from "../logRenderer/LogRenderer";

import "./button.css";

class Button extends LogRenderer {
  render() {
    const { text, buttonHandler } = this.props;

    return (
      <button className="simpleButton" onClick={buttonHandler}>
        {text}
      </button>
    );
  }
}

export default Button;
