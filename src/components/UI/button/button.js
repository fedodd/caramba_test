import React from 'react';
import classes from './button.pcss';

const button = (props) => {
  return (
    <button
      type={props.type}
      className={classes.button + ' ' + classes[props.styleClass]}>
      {props.text}
      {props.withIcon && <span className={classes.icon}> </span>}
    </button>
  );
};

export default button;
