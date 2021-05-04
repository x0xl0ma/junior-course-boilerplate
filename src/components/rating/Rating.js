import React from 'react';

import emptyStar from './icons/Shape.png';
import fullStar from './icons/Path.png';

const Rating = ({ isFilled }) => {
  return (
    <span>
      {isFilled ? (
        <img src={fullStar} alt="" />
      ) : (
        <img src={emptyStar} alt="" />
      )}
    </span>
  );
};

export default Rating;
