import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import OfferSection from "../../components/OfferSection/OfferSection";
import Testimonials from "../../components/Testimonial/Testimonial";
import Brands from "../../components/Brands/Brands";

const HomePage = () => {
  return (
    <div className="home-page">
      <CategoriesSection />
      <FeaturedProducts />
      <LatestProducts />
      <OfferSection />
      <Testimonials />
      <Brands />
    </div>
  );
};

export default HomePage;