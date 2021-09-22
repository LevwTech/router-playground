import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
function ProductDetails() {
  const paramsObj = useParams();
  const Products = ["book", "course", "proteinshake"];
  const [goToHome, setGoToHome] = useState(false);
  return (
    <React.Fragment>
      {Products.includes(paramsObj.id) ? (
        <h1>{paramsObj.id}</h1>
      ) : (
        <h1>404 Not Found</h1>
      )}
      <button
        onClick={() => {
          setGoToHome(true);
        }}
      >
        back to home
      </button>
      {goToHome && <Redirect to="/home"></Redirect>}
    </React.Fragment>
  );
}
export default ProductDetails;
// good approach is to have the products array saved in redux state management and used insite both products and here
