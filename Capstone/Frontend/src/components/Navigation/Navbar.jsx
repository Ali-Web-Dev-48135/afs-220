import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { authSliceAction } from "../Store/auth-slice";

import classes from "./Navbar.module.css";
import Header from "./Header";
import DiscountHeader from "./DiscountHeader";
import Button from "../UIElement/Button";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);

  const logoutHandler = useCallback(() => {

    dispatch(authSliceAction.logout());
    history.push("/");
  }, [dispatch, history]);
  return (
    <React.Fragment>
      <Header>
        <div className={classes["logo-container"]}>
          <NavLink exact activeClassName={classes["active"]} to="/">
            GameStop
          </NavLink>
        </div>
        <nav className={classes["navbar"]}>
          <ul>
            {isLoggedIn && (
              <NavLink
                activeClassName={classes["active"]}
                to="/gamestop/mycart"
              >
                Cart
              </NavLink>
            )}
            <NavLink
              to="/gamestop/category/consoles"
              activeClassName={classes["active"]}
            >
              Consoles
            </NavLink>
            <NavLink
              to="/gamestop/category/games"
              activeClassName={classes["active"]}
            >
              Games
            </NavLink>
            <NavLink
              to="/gamestop/category/accessories"
              activeClassName={classes["active"]}
            >
              Accessories
            </NavLink>
            {!isLoggedIn && (
              <NavLink
                activeClassName={classes["active"]}
                to="/gamestop/auth/login"
              >
                login
              </NavLink>
            )}
            {isLoggedIn && (
              <Button
                className={classes["navbar-logout-btn"]}
                onClick={logoutHandler}
              >
                logout
              </Button>
            )}
          </ul>
        </nav>
      </Header>
      <DiscountHeader />
    </React.Fragment>
  );
};

export default Navbar;
