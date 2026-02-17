import Rating from "../Rating/Rating";
import "./FeaturedProducts.scss"
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Red Printed T-shirt",
      image: "/images/red_printed_tshirt.jpg",
      price: 30.0,
      rating: 4,
    },
    {
      id: 2,
      name: "Black Running Shoe",
      image: "/images/mans_running_shoes.jpg",
      price: 45.0,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Dry Fit Women's Set",
      image: "/images/womans_set.jpg",
      price: 55.0,
      rating: 3.5,
    },
    {
      id: 4,
      name: "Women's Skinny Fit Mid Rise Track Pant",
      image: "/images/womans_skinny_fit_thight.jpg",
      price: 25.0,
      rating: 3,
    },
  ];

  return (
    <div className="small-container">
      <h2 className="title">Featured Products</h2>
      <div className="row">
        {featuredProducts.map((product) => (
          <div className="col-4" key={product.id}>
            <Link to={`/products/${product.id}`} className="product-link">
              <div className="product-card">
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <div className="rating-container">
                    <Rating rating={product.rating} />
                  </div>
                  <p className="price">${product.price.toFixed(1)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;