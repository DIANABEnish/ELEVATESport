import { useState, useEffect } from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import CustomSelect from "../Customselect/CustomSelect";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
  productId?: number;
}

// ── Imported images for products 1–4 (multi-image gallery) ──────────────────
import redPrintedTshirt from "/images/red_printed_tshirt.jpg";
import redPrintedTshirt1 from "/images/redTishert1.jpg";
import redPrintedTshirt2 from "/images/redTishirt2.jpg";
import redPrintedTshirt3 from "/images/redTishirt3.jpg";

import mansRunningShoes from "/images/mans_running_shoes.jpg";
import mansRunningShoes1 from "/images/nikeRuningShoe1.jpg";
import mansRunningShoes2 from "/images/nikeRuningShoe4.jpg";
import mansRunningShoes3 from "/images/nikeRuningShoe3.jpg";

import womansSet from "/images/womans_set.jpg";
import womansSet1 from "/images/yogaSet1.jpg";
import womansSet2 from "/images/yogaSet2.jpg";
import womansSet3 from "/images/yogaSet3.jpg";

import womansSkinnyFitThight from "/images/womans_skinny_fit_thight.jpg";
import womansSkinnyFitThight1 from "/images/womansTrack1.jpg";
import womansSkinnyFitThight2 from "/images/womansTrack2.jpg";
import womansSkinnyFitThight3 from "/images/womansTrack3.jpg";

// ── All products data ────────────────────────────────────────────────────────
const productsData = [
  {
    id: 1,
    name: "Red Printed T-shirt",
    price: 30.00,
    description:
      "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
    images: [redPrintedTshirt, redPrintedTshirt1, redPrintedTshirt2, redPrintedTshirt3],
    sizes: ["XXL", "XL", "Large", "Medium", "Small"],
  },
  {
    id: 2,
    name: "Black Running Shoe",
    price: 45.00,
    description:
      "Premium quality running shoes designed for comfort and performance. Perfect for daily workouts or casual wear.",
    images: [mansRunningShoes, mansRunningShoes1, mansRunningShoes2, mansRunningShoes3],
    sizes: ["45", "44", "43", "42", "41", "40"],
  },
  {
    id: 3,
    name: "Dry Fit Women's Set",
    price: 55.00,
    description:
      "High-quality dry-fit women's sportswear set. Breathable, comfortable, and stylish for your active lifestyle.",
    images: [womansSet, womansSet1, womansSet2, womansSet3],
    sizes: ["XXL", "XL", "Large", "Medium", "Small"],
  },
  {
    id: 4,
    name: "Women's Skinny Fit Mid Rise Track Pant",
    price: 25.00,
    description:
      "Comfortable and stylish skinny fit mid-rise track pants for women. Perfect for workouts or casual wear.",
    images: [womansSkinnyFitThight, womansSkinnyFitThight1, womansSkinnyFitThight2, womansSkinnyFitThight3],
    sizes: ["XXL", "XL", "Large", "Medium", "Small"],
  },
  {
    id: 5,
    name: "new balance Womens Evoz Model Running Shoe",
    price: 65.00,
    description:
      "The New Balance Evoz is engineered for everyday running with a fresh foam midsole that delivers a plush, cushioned ride. Lightweight and breathable upper keeps your feet cool on long runs.",
    images: [
      "/images/womans_black_runningshoes.jpg",
     
     
    ],
    sizes: ["41", "40", "39", "38", "37", "36"],
  },
  {
    id: 6,
    name: "Men's Athletic Ankle Socks",
    price: 15.00,
    description:
      "High-performance athletic ankle socks with moisture-wicking fabric to keep your feet dry and comfortable during intense workouts. Reinforced heel and toe for extra durability.",
    images: [
      "/images/mans_socks.jpg",

    ],
    sizes: ["S (35–38)", "M (39–42)", "L (43–46)"],
  },
  {
    id: 7,
    name: "Womens Fit Track Pant",
    price: 24.00,
    description:
      "Versatile women's track pants with a comfortable elastic waistband and tapered fit. Ideal for gym sessions, jogging, or lounging at home.",
    images: [
      "/images/womans_fit_track_pants.jpg",
    
    ],
    sizes: ["XXL", "XL", "Large", "Medium", "Small"],
  },
  {
    id: 8,
    name: "Redmi Watch 2 Lite",
    price: 90.00,
    description:
      "Stay on top of your fitness goals with the Redmi Watch 2 Lite. Features GPS tracking, heart rate monitoring, SpO2 sensor, and 100+ workout modes — all in a sleek, lightweight design.",
    images: [
      "/images/redmi_watch.jpg",
     
    ],
    sizes: ["One Size"],
  },
  {
    id: 9,
    name: "Gym Gray T-Shirt for Men",
    price: 30.00,
    description:
      "A classic gym staple. This moisture-wicking gray t-shirt offers a relaxed athletic fit and superior breathability, making it the go-to choice for any workout.",
    images: [
      "/images/gray_tshirt.jpg",
   
    ],
    sizes: ["XXL", "XL", "Large", "Medium", "Small"],
  },
  {
    id: 10,
    name: "Cotton Track Pant For Men",
    price: 45.00,
    description:
      "Soft 100% cotton track pants with a drawstring waist and two side pockets. A comfortable everyday essential that works just as well at the gym as it does at home.",
    images: [
      "/images/black_track_pants1.jpg",
     
    ],
    sizes: ["XXL", "XL", "Large", "Medium", "Small"],
  },
  {
    id: 11,
    name: "Womens Ankle Socks",
    price: 35.00,
    description:
      "Ultra-soft women's ankle socks with cushioned sole and arch support. Designed for all-day comfort whether you're at the gym, running errands, or relaxing.",
    images: [
      "/images/ankle_socks.jpg",
   
    ],
    sizes: ["S (35–38)", "M (39–42)"],
  },
  {
    id: 12,
    name: "Summer Running Gym Sports Shorts with Pockets",
    price: 30.00,
    description:
      "Lightweight and breathable sports shorts perfect for running, gym sessions, or yoga. Features deep side pockets and a comfortable elastic waistband.",
    images: [
      "/images/menYogaPants.jpg",
  
    ],
    sizes: ["XXL", "XL", "Large", "Medium", "Small"],
  },
  {
    id: 13,
    name: "Smart Jump Rope",
    price: 29.00,
    description:
      "Halohop Smart Skipping Rope with built-in calorie counter and rep tracker. Adjustable 3M cable suits all heights. Perfect for cardio, HIIT, and boxing training. Available in sleek matte black.",
    images: [
      "/images/smartRope1.png",

    ],
    sizes: ["One Size (Adjustable)"],
  },
];

const ProductCard = ({ productId }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);
  const [product, setProduct] = useState<(typeof productsData)[0] | null>(null);

  useEffect(() => {
    const numericId = productId ? Number(productId) : null;
    const found = numericId
      ? productsData.find((p) => p.id === numericId) ?? productsData[0]
      : productsData[0];

    setProduct(found);
    setMainImage(found.images[0]);
    setQuantity(1);
    setSelectedSize("");
    setAdded(false);
  }, [productId]);

  const handleImageClick = (imgPath: string) => setMainImage(imgPath);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1) setQuantity(val);
  };

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize || undefined,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Related products: show 4 products that are NOT the current one
  const relatedProducts = productsData
    .filter((p) => p.id !== product?.id)
    .slice(0, 4);

  if (!product) return <div className="loading">Loading product...</div>;

  return (
    <div className="product-page">
      {/* ── Product Details ── */}
      <div className="small-container single-product">
        <div className="row">
          {/* Image Gallery */}
          <div className="col-2 images-gallery">
            {mainImage ? (
              <img src={mainImage} width="85%" alt="Main Product" />
            ) : (
              <div className="placeholder-image">No image available</div>
            )}

            {product.images.length > 1 && (
              <div className="small-img-row">
                {product.images.map((img, index) => (
                  <div className="small-img-col" key={index}>
                    <img
                      src={img}
                      width="85%"
                      className={`small-images${mainImage === img ? " active" : ""}`}
                      onClick={() => handleImageClick(img)}
                      alt={`Product view ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="col-2 product-desc">
            <p>
              <Link to="/">Home</Link> /{" "}
              <Link to="/products">Products</Link> / {product.name}
            </p>
            <h1 className="product-name">{product.name}</h1>
            <h4>${product.price.toFixed(2)}</h4>

            <CustomSelect
              options={product.sizes}
              placeholder="Select Size"
              onChange={setSelectedSize}
              className="size-select"
            />

            <input
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />

            <button
              className={`btn ${added ? "btn-added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? "✓ Added to Cart!" : "Add To Cart"}
            </button>

            <h3>Product Details</h3>
            <p className="desc">{product.description}</p>
          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      <div className="small-container">
        <div className="row row-2">
          <h1 className="heading">Related Products</h1>
          <Link to="/products" style={{ textDecoration: "none", color: "#ff523b" }}>
            View More
          </Link>
        </div>
      </div>

      <div className="small-container">
        <div className="row">
          {relatedProducts.map((related) => (
            <div className="col-4" key={related.id}>
              <Link to={`/products/${related.id}`} className="product-link">
                <div className="product-card-related">
                  <div className="related-image-container">
                    <img src={related.images[0]} alt={related.name} />
                  </div>
                  <div className="related-product-info">
                    <h4>{related.name}</h4>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => {
                        const starValue = i + 1;
                        const rating = 4;
                        if (starValue <= Math.floor(rating))
                          return <i key={i} className="fa-solid fa-star" />;
                        else if (starValue - 0.5 <= rating)
                          return <i key={i} className="fa-solid fa-star-half-stroke" />;
                        else return <i key={i} className="fa-regular fa-star" />;
                      })}
                    </div>
                    <p className="price">${related.price.toFixed(2)}</p>
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

export default ProductCard;