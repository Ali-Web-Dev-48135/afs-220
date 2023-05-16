import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import Card from "../UIElement/Card";

const Gamepage = () => {
  const fullShoplist = useSelector((state) => state.shop.inventoryItems);
  const filteredGameList = useMemo(
    () => fullShoplist.filter((item) => item.category == 1),
    [fullShoplist]
  );

  return <Card>Game Page</Card>;
};

export default Gamepage;
