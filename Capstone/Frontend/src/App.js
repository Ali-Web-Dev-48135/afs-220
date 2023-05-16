import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Homepage from "./components/Pages/Homepage";
import NotFound from "./components/Pages/NotFound";
import Navbar from "./components/Navigation/Navbar";
import Layout from "./components/UIElement/Layout";
import Cartpage from "./components/Pages/Cartpage";
import Gamedesc from "./components/Pages/Gamedescpage";
import Consolepage from "./components/Pages/Consolepage";
import Authpage from "./components/Pages/Authpage";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <React.Fragment>
      <Navbar />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          {isLoggedIn && (
            <Route path="/gamestop/mycart">
              <Cartpage />
            </Route>
          )}
          <Route exact path="/gamestop/category/:category">
            <Consolepage />
          </Route>
          <Route exact path="/gamestop/product/:productId">
            <Gamedesc />
          </Route>
          <Route path="/gamestop/auth/login">
            <Authpage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
};

export default App;
