import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartSliceAction } from "../Store/cart-slice";
import Card from "../UIElement/Card";
import Button from "../UIElement/Button";
import classes from "./ConsoleItem.module.css";

const ConsoleItem = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const showNotificationHandler = useCallback(() => {
    props.onClick();
  }, [props]);

  const addToCartHandler = useCallback(() => {
    dispatch(
      cartSliceAction.addToCart({
        id: props.id,
        title: props.productName,
        price: props.productPrice,
        imageUrl: props.imageUrl,
        category: props.category,
        productrating: props.productRating,
      })
    );
  }, [
    dispatch,
    props.id,
    props.productName,
    props.productPrice,
    props.category,
    props.imageUrl,
    props.productRating,
  ]);

  return (
    <React.Fragment>
      <Card className={classes["console-item-container"]}>
        <Card className={classes["console-item-fig-container"]}>
          <h3>{props.productName}</h3>
          <figure>
            <img src={props.imageUrl} alt={props.productName} />
            <figcaption>{props.description}</figcaption>
          </figure>
        </Card>
        <Card className={classes["console-actions-container"]}>
          <span className={classes["console-item-price"]}>
            ${props.productPrice}
          </span>
          <span className={classes["console-item-rating"]}>
            {props.productRating}/10
          </span>
          <Button
            onClick={!isLoggedIn ? showNotificationHandler : addToCartHandler}
            className={classes["console-item-btn"]}
          >
            Add To Cart
          </Button>
        </Card>
      </Card>
    </React.Fragment>
  );
};

export default React.memo(ConsoleItem);
