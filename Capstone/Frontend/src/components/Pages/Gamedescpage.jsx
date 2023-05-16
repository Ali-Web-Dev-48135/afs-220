import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import { fetchOneProduct } from "../Store/shopActionThunk";
import { GAMES } from "../Store/Games";
import { shopInventoryAction } from "../Store/shop-inventory-slice";

import { useSelector } from "react-redux";

import Button from "../UIElement/Button";
import classes from "./Gamedescpage.module.css";
import Card from "../UIElement/Card";

const Gamedesc = (props) => {
  const dispatch = useDispatch();
  const fetchedItem = useSelector((state) => state.shop.inventoryItem);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const { productId } = useParams();

  

  useEffect(() => {
    const gameFoundById = GAMES.find((item) => item.id === parseInt(productId));
    dispatch(shopInventoryAction.getOneItem(gameFoundById));
  }, [dispatch, productId]);

  return (
    <Card className={classes["game-desc-container"]}>
      <Card className={classes["game-desc-image-container"]}>
        <img src={fetchedItem.imagePath} alt={fetchedItem.ProductName} />
      </Card>
      <Card className={classes["game-desc-detail-container"]}>
        <span className={classes["game-desc-detail-title"]}>
          {fetchedItem.productName}
        </span>
        <span className={classes["game-desc-detail-price"]}>
          ${fetchedItem.productPrice}
        </span>
        <span className={classes["game-desc-detail-rating"]}>
          Rating: {fetchedItem.productRating}/10
        </span>
        <p className={classes["game-desc-detail-desc"]}>
          {fetchedItem.description}
        </p>
        {loggedIn && (
          <Card className={classes["game-desc-btn-container"]}>
            <Button className={classes["game-desc-btn"]}>Add To Cart</Button>
          </Card>
        )}
      </Card>
    </Card>
  );
};

export default Gamedesc;
