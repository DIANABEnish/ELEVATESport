import { Link } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import { useState } from "react";
import "./ProductsPage.scss";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Red Printed T-shirt",
    image: "/images/red_printed_tshirt.jpg",
    price: 50.0,
    rating: 4,
  },
  {
    id: 2,
    name: "Black Sports Shoe",
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

const ProductsPage = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  return (
    <div className="products-page">
      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <div className={`sort-container ${isSortOpen ? 'open' : ''}`}>
            <select 
              onChange={() => {}} 
              onClick={() => setIsSortOpen(!isSortOpen)}
              onBlur={() => setIsSortOpen(false)}
            >
              <option>Default Sorting</option>
              <option>Sort by price</option>
              <option>Sort by popularity</option>
              <option>Sort by rating</option>
              <option>Sort by sale</option>
            </select>
          </div>
        </div>

        <div className="products-row">
          {products.map((product) => (
            <div className="col-4" key={product.id}>
              <Link to={`/products/${product.id}`} className="product-card">
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
              </Link>
            </div>
          ))}
        </div>

        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
