import React from "react";
import classes from "./button.pcss";

const button = (props) => {
  return (
    <button className={classes.button} type={props.type}>
      {props.text}
      <span className={classes.icon}> </span>
    </button>
  );
};

export default button;
