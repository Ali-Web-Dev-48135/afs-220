import React from "react";

import Card from "../UIElement/Card";
import classes from "./Avatar.module.css";

const Avatar = (props) => {
  return (
    <Card className={classes["avatar-container"]}>
      <Card className={classes["avatar-image-container"]}>
        <img src={props.url} alt={props.title} />
      </Card>
    </Card>
  );
};

export default React.memo(Avatar);
