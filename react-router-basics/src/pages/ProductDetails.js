import { useParams } from "react-router-dom";

export default function ProductDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details Page it is!</h1>
      {params.productId}
    </>
  );
}
