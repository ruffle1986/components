import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

const ButtonGroup = (props) => (
  <div className={ classNames('button-group', {
    'button-group--align-left': props.align === 'left',
    'button-group--align-center': props.align === 'center',
    'button-group--align-right': props.align === 'right',
  }) }>
    { props.children }
  </div>
);

ButtonGroup.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right'])
};

ButtonGroup.defaultProps = {
  align: 'left'
};

export default ButtonGroup;
