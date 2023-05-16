import React from "react";

import classes from "./Message.module.css";

const Message = (props) => {
  

  return (
    <div className={classes['message-container']}>
      <p>{props.message}</p>
    </div>
  );
};

export default React.memo(Message);
