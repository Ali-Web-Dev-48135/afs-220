import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "../ProductList/ProductList";
import Message from "../Message/Message";
import { uiSliceAction } from "../Store/ui-slice";

import { GAMES } from "../Store/Games";

let runMessage = true;
const Homepage = () => {
  // const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const shopInventoryItems = useSelector((state) => state.shop.inventoryItems);
  const authMessage = useSelector((state) => state.auth.message);
  const isUserLoggedIn = useSelector((state) => state.auth.loggedIn);
  const showMessageSlice = useSelector((state) => state.ui.showMessage);

  useEffect(() => {
    let setTimeoutFunction =
      isUserLoggedIn === false
        ? null
        : runMessage === true
        ? setTimeout(() => {
            dispatch(uiSliceAction.hideMessage());
            runMessage = false;
          }, 3000)
        : null;

    if (isUserLoggedIn && runMessage === true) {
      dispatch(uiSliceAction.showMessage());
    }

    return () => {
      clearTimeout(setTimeoutFunction);
    };
  }, [isUserLoggedIn, dispatch]);

  return (
    <React.Fragment>
      {showMessageSlice === true && <Message message={authMessage} />}
      <ProductList items={GAMES} />
    </React.Fragment>
  );
};

export default Homepage;
