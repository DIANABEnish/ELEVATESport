import "./Brands.scss";

const Brands = () => {
 const brands = [
  { id: 1, image: "/images/NikeLogo.jpg", alt: "NikeLogo.jpg" },
  { id: 2, image: "/images/adidasLogo.PNG", alt: "Myprotein" },
  { id: 3, image: "/images/UnderArmourLogo.png", alt: "Under Armour" },
  { id: 4, image: "/images/LululemonLogo.png", alt: "Lululemon" },
  { id: 5, image: "/images/GoProLogo.png", alt: "GoPro" },
  { id: 6, image: "/images/GymShark.jpg", alt: "Gymshark" }
];

  return (
    <div className="brands">
      <div className="small-container">
        <div className="row">
          {brands.map((brand) => (
            <div className="col-5" key={brand.id}>
              <img src={brand.image} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;