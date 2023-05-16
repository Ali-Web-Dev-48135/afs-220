import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiSliceAction } from "../Store/ui-slice";

import ConsoleItem from "../ConsoleItem/ConsoleItem";
import Overlay from "../Overlay/Overlay";
import classes from "./ConsoleList.module.css";
import Notification from "../Notification/Notification";

const ConsoleList = (props) => {
  const dispatch = useDispatch();
  const showNotification = useSelector((state) => state.ui.showNotification);

  const dispatchHideNotificationHandler = useCallback(() => {
    dispatch(uiSliceAction.hide());
  }, [dispatch]);

  const dispatchShowNotificationHandler = useCallback(() => {
    dispatch(uiSliceAction.show());
  }, [dispatch]);

  return (
    <React.Fragment>
      {showNotification && (
        <Overlay onClick={dispatchHideNotificationHandler}>
          <Notification
            onClick={dispatchHideNotificationHandler}
            prompt="Authentication Error"
            type="Error"
            message="Please Log In Before Adding To Cart."
            btn="Confirm"
          />
        </Overlay>
      )}

      {!showNotification && (
        <section className={classes["console-list-section"]}>
          <ul className={classes["console-list"]}>
            {props.items.map((console) => (
              <ConsoleItem
                key={console.id}
                id={console.id}
                productName={console.productName}
                imageUrl={console.imagePath}
                description={console.description}
                productPrice={console.productPrice}
                productRating={console.productRating}
                category={console.category}
                onClick={dispatchShowNotificationHandler}
              />
            ))}
          </ul>
        </section>
      )}
    </React.Fragment>
  );
};

export default ConsoleList;
