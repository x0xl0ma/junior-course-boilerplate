import React from 'react';

import './button.css';

const Button = ({ text, onClickHandler }) => {
  return (
    <button className="simpleButton" type="submit">
      {
        //тут с переиспользованием кнопки из-за сабмита было бы так себе
        //но всеравно решила оставить
      }
      {text}
    </button>
  );
};

export default Button;
