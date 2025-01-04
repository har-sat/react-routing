import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Your are at Home!</h1>
      <p>
        Go to <Link to="/products">Products</Link>
      </p>
    </>
  );
}
