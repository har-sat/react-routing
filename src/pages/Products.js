import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "product-1",
    title: "the first product",
  },
  {
    id: "product-2",
    title: "the second product",
  },
  {
    id: "product-3",
    title: "the third product",
  },
];
export default function ProductsPage() {
  return (
    <>
      <h2>You are now in the products page!</h2>

      <br />
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
