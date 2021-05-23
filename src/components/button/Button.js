import React from "react";

import "./button.css";

const Button = ({ text, buttonHandler }) => {
  return (
    <button className="simpleButton" onClick={buttonHandler}>
      {text}
    </button>
  );
};

export default Button;
