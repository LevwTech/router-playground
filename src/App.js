import Welcome from "./pages/welcome";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./pages/components/NavBar";
import React from "react";
import ProductDetails from "./pages/components/ProductDetails";
function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/products" exact>
          <Product />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
