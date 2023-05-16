import React from "react";

import Card from "../UIElement/Card";
import classes from "./Notification.module.css";
import Button from "../UIElement/Button";
import ReactIcon from "../UIElement/ReactIcon";

const Notification = (props) => {
  return (
    <Card className={classes["notification-container"]}>
      <header className={classes["notification-header"]}>{props.prompt}</header>
      <Card className={classes["notification-icon-container"]}>
        <ReactIcon type={props.type} />
        <p className={classes["notification-message"]}>{props.message}</p>
      </Card>
      <footer>
        <Button className={classes["confirm-btn"]} onClick={props.onClick}>
          {props.btn}
        </Button>
      </footer>
    </Card>
  );
};

export default React.memo(Notification);
