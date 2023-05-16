import React from "react";

import { BiMessageAltError } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import Card from "./Card";
import classes from "./ReactIcon.module.css";

const ReactIcon = (props) => {
  return (
    <Card className={classes["react-icon-container"]}>
      {props.type === "Error" ? (
        <BiMessageAltError className={classes["react-icon"]} />
      ) : (
        <AiFillCheckCircle className={classes["react-icon"]} />
      )}
    </Card>
  );
};

export default ReactIcon;
