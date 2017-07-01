import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

const Button = (props) => (
  <button className={ classNames('button', {
    'button--danger': props.danger,
    'button--neutral': props.neutral
  }) }>
    <span>{ props.children }</span>
  </button>
);

Button.propTypes = {
  danger: PropTypes.bool,
  neutral: PropTypes.bool
};

export default Button;
