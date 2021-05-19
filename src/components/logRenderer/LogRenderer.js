import { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { logger } from 'csssr-school-utils';

class LogRenderer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const isSmthChanged = shallowCompare(this, nextProps, nextState);

    if (!isSmthChanged) {
      return false;
    }

    logger.call(this, this.constructor.name, nextProps, nextState);
    return true;
  }
}

export default LogRenderer;
