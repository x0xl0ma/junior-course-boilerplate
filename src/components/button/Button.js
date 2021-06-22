import React from 'react';
import clsx from 'classnames';
import LogRenderer from '../logRenderer/LogRenderer';

import styles from './button.module.css';

const buttonTypes = {
  category: styles.category_button,
  simple: styles.simple_button
};

class Button extends LogRenderer {
  render() {
    const { children, buttonHandler, buttonType, isSelected } = this.props;

    return (
      <button
        className={clsx(styles.root_button, buttonTypes[buttonType], {
          [styles.selected]: isSelected
        })}
        onClick={buttonHandler}
        type="button"
      >
        {children}
      </button>
    );
  }
}

export default Button;
