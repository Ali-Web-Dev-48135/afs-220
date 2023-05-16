import React, { useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { shopInventoryAction } from "../Store/shop-inventory-slice";

import ConsoleList from "../ConsoleList/ConsoleList";
import { GAMES } from "../Store/Games";

const Consolepage = () => {
  const filteredProducts = useSelector(
    (state) => state.shop.inventoryFilteredItems
  );
  const dispatch = useDispatch();
  const { category } = useParams();

  const paramsToNumber = useCallback((category) => {
    const GAME = "games";
    const CONSOLE = "consoles";
    const ACCESSORIES = "accessories";

    switch (category) {
      case GAME:
        return 0;
      case ACCESSORIES:
        return 1;
      case CONSOLE:
        return 2;
      default:
        return;
    }
  }, []);

  useEffect(() => {
    const filteredCategoryValue = paramsToNumber(category);
    const filteredShopList = GAMES.filter(
      (item) => item.category === filteredCategoryValue
    );
    dispatch(shopInventoryAction.getFilteredItemsByCategory(filteredShopList));
  }, [category, dispatch, paramsToNumber]);

  return <ConsoleList items={filteredProducts} />;
};

export default Consolepage;
