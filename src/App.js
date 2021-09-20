import Welcome from "./pages/welcome";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/products" component={Product} />
    </Switch>
  );
}

export default App;
