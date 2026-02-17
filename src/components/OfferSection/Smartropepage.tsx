import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CustomSelect from "../Customselect/CustomSelect";
import "./Smartropepage.scss";

const smartRope = {
  id: 99, // unique ID outside the products array
  name: "Smart Jump Rope",
  price: 29.00,
  description:
    "Halohop Smart Skipping Rope with built-in calorie counter and rep tracker. Adjustable 3M cable suits all heights. Perfect for cardio, HIIT, and boxing training. Available in sleek matte black.",
  images: [
    "/images/smartRope1.png",

  ],
  sizes: ["One Size (Adjustable)"],
  features: [
    "Built-in calorie & rep counter",
    "Adjustable 3M cable",
    "Lightweight aluminum handles",
    "Suitable for all fitness levels",
    "Battery-free smart mechanism",
  ],
};

const relatedProducts = [
  { id: 8,  name: "Redmi Watch 2 Lite",         image: "/images/redmi_watch.jpg",              price: 90.00 },
  { id: 12, name: "Sports Shorts with Pockets", image: "/images/menYogaPants.jpg",              price: 30.00 },
  { id: 9,  name: "Gym Gray T-Shirt for Men",   image: "/images/gray_tshirt.jpg",               price: 30.00 },
  { id: 5,  name: "Women's Running Shoe",        image: "/images/womans_black_runningshoes.jpg", price: 65.00 },
];

const SmartRopePage = () => {
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState(smartRope.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: smartRope.id,
        name: smartRope.name,
        price: smartRope.price,
        image: smartRope.images[0],
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-page smart-rope-page">
      {/* ── Product Detail ── */}
      <div className="small-container single-product">
        <div className="row">
          {/* Gallery */}
          <div className="col-2 images-gallery">
            <img src={mainImage} width="85%" alt={smartRope.name} />
            <div className="small-img-row">
              {smartRope.images.map((img, i) => (
                <div className="small-img-col" key={i}>
                  <img
                    src={img}
                    width="85%"
                    className={`small-images${mainImage === img ? " active" : ""}`}
                    onClick={() => setMainImage(img)}
                    alt={`View ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="col-2 product-desc">
            <p>
              <Link to="/">Home</Link> / <span>Exclusive Offer</span>
            </p>

            <div className="exclusive-badge">Exclusively Available Here</div>

            <h1 className="product-name">{smartRope.name}</h1>
            <h4>${smartRope.price.toFixed(2)}</h4>

            <CustomSelect
              options={smartRope.sizes}
              placeholder="Select Size"
            />

         

            <button
              className={`btn${added ? " btn-added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? "✓ Added to Cart!" : "Add To Cart"}
            </button>

            <h3>Product Details</h3>
            <p className="desc">{smartRope.description}</p>

            <ul className="features-list">
              {smartRope.features.map((f, i) => (
                <li key={i}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 3" stroke="#ff523b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      <div className="small-container">
        <div className="row row-2">
          <h1 className="heading">Related Products</h1>
          <Link to="/products" style={{ textDecoration: "none", color: "#ff523b" }}>
            View All
          </Link>
        </div>
      </div>

      <div className="small-container">
        <div className="row">
          {relatedProducts.map((p) => (
            <div className="col-4" key={p.id}>
              <Link to={`/products/${p.id}`} className="product-link">
                <div className="product-card-related">
                  <div className="related-image-container">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="related-product-info">
                    <h4>{p.name}</h4>
                    <p className="price">${p.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartRopePage;
