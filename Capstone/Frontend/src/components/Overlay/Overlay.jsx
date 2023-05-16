import React, { useCallback } from "react";
import ReactDOM from "react-dom";

import classes from "./Overlay.module.css";

const Modal = (props) => (
  <div onClick={props.onClick} className={classes["overlay-layer"]}></div>
);

const Overlay = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Modal onClick={props.onClick} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <>{props.children}</>,
        document.getElementById("notification-layer")
      )}
    </React.Fragment>
  );
};

export default Overlay;
