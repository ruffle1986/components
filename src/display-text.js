import React from 'react';
import classNames from 'classname';

const DisplayText = (props) => (
  <p className={
      classNames('display-text', {
        'display-text--small': props.size === 'small',
        'display-text--medium': props.size === 'medium',
        'display-text--large': props.size === 'large',
        'display-text--extra-large': props.size === 'extra-large',
      })
    }
  >
    { props.children }
  </p>
);

DisplayText.defaultProps = {
  size: 'medium'
};

export default DisplayText;
