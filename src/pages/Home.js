import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <Link to="/welcome">
        <h1>welcome</h1>
      </Link>
      <Link to="/products">
        <h1>Product</h1>
      </Link>
    </React.Fragment>
  );
}

export default Home;
