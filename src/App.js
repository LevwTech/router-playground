import Welcome from "./pages/welcome";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/products">
          <Product />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
