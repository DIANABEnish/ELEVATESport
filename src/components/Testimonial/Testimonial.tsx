import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Rating from "../Rating/Rating";
import "./Testimonials.scss";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The service exceeded all my expectations. The team was professional, responsive, and delivered results beyond what I imagined possible.",
      rating: 5,
      image: "/images/profile1.jpg",
      name: "Emily Johnson",
    },
    {
      id: 2,
      text: "Working with them was a game-changer for my business. Their attention to detail and creative solutions made all the difference in our project.",
      rating: 4,
      image: "/images/profile2.jpg",
      name: "David Thompson",
    },
    {
      id: 3,
      text: "I was impressed by their expertise and dedication. They delivered on time and within budget, while maintaining excellent communication throughout.",
      rating: 5,
      image: "/images/profile3.jpg",
      name: "Ron Williams",
    },
  ];

  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col-3" key={testimonial.id}>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <p>{testimonial.text}</p>
              <Rating rating={testimonial.rating} />
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;