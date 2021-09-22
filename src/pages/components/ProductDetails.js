import React from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const paramsObj = useParams();
  const Products = ["book", "course", "proteinshake"];
  return (
    <React.Fragment>
      {Products.includes(paramsObj.id) ? (
        <h1>{paramsObj.id}</h1>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </React.Fragment>
  );
}
export default ProductDetails;
