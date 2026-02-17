import "./OfferSection.scss";
import { Link } from "react-router-dom";

const OfferSection = () => {
  return (
    <div className="offer">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img src="/images/smartRope1.png" alt="Exclusive Offer" className="offer-img" />
          </div>
          <div className="col-2">
            <p>Exclusively Available on Sportswear Store</p>
            <h1>Smart Jump Rope</h1>
            <small>
              Halohop Skipping Rope With Calorie Counter,
               Adjustable 3M Skipping Rope With Counter For Exercise & Fitness (Black).
            </small>
            <Link to="/smart-rope" className="btn">
              Buy Now ➔
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;