import { Link } from "react-router-dom";
function Product() {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <Link to="/products/book">
          <li>Book</li>
        </Link>

        <Link to="/products/course">
          <li>Course</li>
        </Link>
      </ul>
    </section>
  );
}

export default Product;
