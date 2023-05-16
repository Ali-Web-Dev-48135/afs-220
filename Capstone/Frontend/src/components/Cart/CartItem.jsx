import React from "react";
import { useDispatch } from "react-redux";
import { cartSliceAction } from "../Store/cart-slice";

import classes from "./CartItem.module.css";
import Card from "../UIElement/Card";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      cartSliceAction.addToCart({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  };

  const removeItemFromCart = () => {
    dispatch(
      cartSliceAction.removeFromCart({
        id: props.id,
      })
    );
  };

  return (
    <React.Fragment>
      <li className={classes["cart-item"]}>
        <Card className={classes["cart-item-container"]}>
          <Card className={classes["cart-item-img-container"]}>
            <img src={props.imageUrl} alt={props.title} />
          </Card>
          <Card className={classes["cart-item-details-container"]}>
            <span>{props.title}</span>
            <span>${props.price}</span>
            <span>{props.qty}x</span>
            <span className={classes["cart-item-add"]} onClick={addItemToCart}>
              +
            </span>
            <span
              className={classes["cart-item-subtract"]}
              onClick={removeItemFromCart}
            >
              -
            </span>
          </Card>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default CartItem;
