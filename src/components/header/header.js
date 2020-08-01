import React from "react";
import classes from "./header.pcss";
import logoImg from "./../../images/DUCK.png";

const header = () => {
  return (
    <div className={classes.header}>
      <img className={classes.logo} src={logoImg} alt="LOGO"></img>
    </div>
  );
};

export default header;
