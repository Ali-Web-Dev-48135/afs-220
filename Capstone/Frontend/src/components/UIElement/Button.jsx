import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const buttonSytles = `${
    props.className
      ? `${props.className} ${classes["btn"]}`
      : `${classes["btn"]}`
  }`;
  
  return (
    <button
      disabled={props.disabled}
      className={buttonSytles}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
