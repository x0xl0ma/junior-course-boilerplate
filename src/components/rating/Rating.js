import React from 'react';

import emptyStar from './icons/Shape.png';
import fullStar from './icons/Path.png';
import LogRenderer from '../logRenderer/LogRenderer';

class Rating extends LogRenderer {
  render() {
    const { isFilled } = this.props;
    return (
      <span>
        {isFilled ? (
          <img src={fullStar} alt="" />
        ) : (
          <img src={emptyStar} alt="" />
        )}
      </span>
    );
  }
}

export default Rating;
