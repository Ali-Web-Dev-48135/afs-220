import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartSliceAction } from "../Store/cart-slice";
import Card from "../UIElement/Card";
import classes from "./Cartpage.module.css";
import CartList from "../Cart/CartList";
import Button from "../UIElement/Button";

const Cartpage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.cart.cart);
  const totalValueInCart = useSelector((state) => state.cart.totalPrice);
  const userLoggedInUserName = useSelector((state) => state.auth.username);

  let renderConditionally =
    totalValueInCart > 0 ? (
      <CartList items={userCart} />
    ) : (
      <p className={classes["cart-empty-p"]}>Cart Is Empty</p>
    );

  const cartArray = userCart.map((item) => {
    return {
      productname: item.title,
      quantity: item.qty,
      category: item.category,
      productrating: item.productrating,
      productprice: item.price,
    };
  });

  const sendCartToBackendHandler = () => {
    const customerShoppingObject = {
      emailaddress: localStorage.getItem("email"),
    };

    alert(`We've Simulated Your Order ${customerShoppingObject.emailaddress}`);

    dispatch(cartSliceAction.resetCart());
    history.push("/");
  };

  return (
    <React.Fragment>
      <Card className={classes["username-container"]}>
        <span className={classes["cart-page-totalprice"]}>
          ${totalValueInCart}
        </span>
        <p>
          Welcome To Your Cart{" "}
          <span className={classes["username-span"]}>
            @{userLoggedInUserName}
          </span>
        </p>
      </Card>
      <Card className={classes["cart-items-container"]}>
        <div className={classes["submit-cart-container"]}>
          <span>Your Cart</span>
          {totalValueInCart > 0 && (
            <Button
              className={classes["submit-cart-btn"]}
              onClick={sendCartToBackendHandler}
            >
              Checkout
            </Button>
          )}
        </div>
        {renderConditionally}
      </Card>
    </React.Fragment>
  );
};

export default Cartpage;
