import { useParams } from "react-router-dom";
function ProductDetails() {
  const paramsObj = useParams();
  return <h1>{paramsObj.id}</h1>;
}
export default ProductDetails;
