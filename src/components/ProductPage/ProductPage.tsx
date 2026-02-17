import { useState } from "react";
import "./ProductPage.scss"; // You'll need to create this SCSS file

const Product = () => {
  const [mainImage, setMainImage] = useState("/images/gallery-1.jpg");
  const [quantity, setQuantity] = useState(1);

  // Product data
  const product = {
    name: "Red Printed T-Shirt by PUMA",
    price: 50.00,
    description: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys.",
    images: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg"
    ],
    sizes: ["XXL", "XL", "Large", "Medium", "Small"]
  };

  // Related products data
  const relatedProducts = [
    {
      id: 1,
      image: "/images/product-9.jpg",
      name: "Automatic Watches for Men",
      price: 99.00,
      rating: 4
    },
    {
      id: 2,
      image: "/images/product-10.jpg",
      name: "Black Sports Shoe",
      price: 45.00,
      rating: 4.5
    },
    {
      id: 3,
      image: "/images/product-11.jpg",
      name: "Walking Shoes",
      price: 35.00,
      rating: 3.5
    },
    {
      id: 4,
      image: "/images/product-12.jpg",
      name: "Nike Track Pant",
      price: 80.00,
      rating: 3
    }
    
  ];

  const handleImageClick = (imgPath: string) => {
    setMainImage(imgPath);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="product-page">
      
      <div className="small-container single-product">
        <div className="row">
          <div className="col-2 images-gallery">
            <img src={mainImage} width="85%" alt="Main Product" />
            
            <div className="small-img-row">
              {product.images.map((img, index) => (
                <div className="small-img-col" key={index}>
                  <img 
                    src={img} 
                    width="85%" 
                    className="small-images" 
                    onClick={() => handleImageClick(img)}
                    alt={`Product view ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-2 product-desc">
            <p>Home / T-Shirt</p>
            <h1 className="product-name">{product.name}</h1>
            <h4>${product.price.toFixed(2)}</h4>
            
            <select>
              <option>Select Size</option>
              {product.sizes.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
            
            <input 
              type="number" 
              value={quantity} 
              min="1" 
              onChange={handleQuantityChange}
            />
            
            <button className="btn">Add To Cart</button>
            
            <h3>Product Details</h3>
            <p className="desc">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="small-container">
        <div className="row row-2">
          <h1 className="heading">Related Products</h1>
          <p>View More</p>
        </div>
      </div>

      <div className="small-container">
        <div className="row">
          {relatedProducts.map((product) => (
            <div className="col-4" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <div className="rating">
                {[...Array(5)].map((_, i) => {
                  const starValue = i + 1;
                  if (starValue <= Math.floor(product.rating)) {
                    return <i key={i} className="fa-solid fa-star" />;
                  } else if (starValue - 0.5 <= product.rating) {
                    return <i key={i} className="fa-solid fa-star-half-stroke" />;
                  } else {
                    return <i key={i} className="fa-regular fa-star" />;
                  }
                })}
              </div>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;