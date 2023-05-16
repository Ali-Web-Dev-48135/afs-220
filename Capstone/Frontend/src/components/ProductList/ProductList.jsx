import React from "react";

import classes from "./ProductList.module.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = (props) => {
  return (
    <React.Fragment>
      <ul className={classes["product-list"]}>
        {props.items.map((product) => {
          return (
            <ProductItem
              key={product.id}
              ProductID={product.id}
              ProductName={product.productName}
              ProductPrice={product.productPrice}
              ProductRating={product.productRating}
              ImageUrl={product.imagePath}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default React.memo(ProductList);
