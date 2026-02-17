import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  
  useEffect(() => {
    console.log("ProductDetailsPage rendered with ID:", id);
    window.scrollTo(0, 0);
  }, [id]);
  
  return (
    <div className="product-details-page">
      <ProductCard productId={id ? parseInt(id, 10) : undefined} />
    </div>
  );
};

export default ProductDetailsPage;