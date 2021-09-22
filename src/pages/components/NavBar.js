import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
function NavBar() {
  return (
    <div className={classes.container}>
      <NavLink to="/home" exact activeClassName={classes.active}>
        <h1>Home</h1>
      </NavLink>
      <NavLink to="/welcome" activeClassName={classes.active}>
        <h1>Welcome</h1>
      </NavLink>
      <NavLink to="/products" exact activeClassName={classes.active}>
        <h1>Products</h1>
      </NavLink>
    </div>
  );
}
export default NavBar;
