import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  
  return (
    <Link
      to={`/gamestop/product/${props.ProductID}`}
      className={classes["product-li-item"]}
    >
      <div className={classes["product-container"]}>
        <div className={classes["product-image-container"]}>
          <img src={`${props.ImageUrl}`} alt={props.ProductName} />
        </div>
        <div className={classes["product-details-container"]}>
          <p>{props.ProductName}</p>
          <p>${props.ProductPrice}</p>
          <p>Rating: {props.ProductRating}/10</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
