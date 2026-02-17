import "./CategoriesSection.scss";

const CategoriesSection = () => {
  return (
    <div className="categories">
      <div className="small-container">
        <div className="row">
          <div className="col-3">
            <div className="image-container">
              <img
                src="/images/category-3.jpg"
                alt="Sports jackets"
                className="features-img"
              />
              <div className="overlay">
                <h3 className="feature-title">Sports Jackets</h3>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="image-container">
              <img
                src="/images/sportSet.jpg"
                alt="Sports sets"
                className="features-img"
              />
              <div className="overlay">
                <h3 className="feature-title">Sports Sets</h3>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="image-container">
              <img 
                src="/images/shoes3.jpg" 
                alt="Shoes" 
                className="features-img" 
              />
              <div className="overlay">
                <h3 className="feature-title">Shoes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;