import Rating from "../Rating/Rating";
import "./LatestProducts.scss";
import { Link } from "react-router-dom";

const LatestProducts = () => {
  const latestProducts = [
    {
      id: 5,
      name: "new balance Womens Evoz Model Running Shoe",
      image: "/images/womans_black_runningshoes.jpg",
      price: 65.0,
      rating: 4,
    },
    {
      id: 6,
      name: "Men's Athletic Ankle Socks",
      image: "/images/mans_socks.jpg",
      price: 15.0,
      rating: 3.5,
    },
    {
      id: 7,
      name: "Womens Fit Track Pant",
      image: "/images/womans_fit_track_pants.jpg",
      price: 24.0,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Redmi Watch 2 Lite",
      image: "/images/redmi_watch.jpg",
      price: 90.0,
      rating: 3,
    },
    {
      id: 9,
      name: "Gym gray T-Shirt for Men",
      image: "/images/gray_tshirt.jpg",
      price: 30.0,
      rating: 4,
    },
    {
      id: 10,
      name: "Cotton Track Pant For Men",
      image: "/images/black_track_pants1.jpg",
      price: 45.0,
      rating: 4.5,
    },
    {
      id: 11,
      name: "Womens Ankle Socks",
      image: "/images/ankle_socks.jpg",
      price: 35.0,
      rating: 3.5,
    },
    {
      id: 12,
      name: "Summer Running Gym Sports Shorts with Pockets",
      image: "/images/menYogaPants.jpg",
      price: 30.0,
      rating: 3,
    },
  ];

  return (
    <div className="small-container">
      <h2 className="title">Latest Products</h2>
      <div className="row">
        {latestProducts.map((product) => (
          <div className="col-4" key={product.id}>
            <Link to={`/products/${product.id}`} className="product-card-link">
              <div className="product-card">
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                  <div className="card-overlay">
                    <span className="view-btn">View Product</span>
                  </div>
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

export default LatestProducts;