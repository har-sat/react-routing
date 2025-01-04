import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <>
      <h2>You are now in the products page!</h2>
      <Link to={"/"}>Go Home</Link>
    </>
  );
}
