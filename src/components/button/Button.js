import React from 'react';

import './button.css';

const Button = ({ text }) => {
  return (
    <button className="simpleButton" type="submit">
      {text}
    </button>
  );
};

export default Button;
