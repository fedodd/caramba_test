import React from "react";
import classes from "./button.pcss";

const button = (props) => {
  return (
    <button classNmae={classes.button} type={props.type}>
      {props.text}
    </button>
  );
};

export default button;
