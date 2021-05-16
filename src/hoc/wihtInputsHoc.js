import React, { Component } from 'react';

const regForValue = new RegExp('^[0-9]*$');

const withInputHoc = WrappedComponent => {
  return class extends Component {
    hocInputHandler = e => {
      const { value } = e.target;

      const valueAfterCheck = regForValue.test(value);

      this.props.onChange(e, valueAfterCheck);
    };

    render() {
      return (
        <WrappedComponent {...this.props} onChange={this.hocInputHandler} />
      );
    }
  };
};

export default withInputHoc;
