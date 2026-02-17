import "./Footer.scss";
import Logo from "../Logo/logo"; 
import { Link } from "react-router-dom";

const Footer = () => {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div className="app-logo">
              <img src="/images/play-store.webp" alt="Play Store" />
              <img src="/images/app-store.png" alt="App Store" />
            </div>
          </div>

          <div className="footer-col-2">
          
            <Link 
              to="/" 
              className="logo-link" 
              onClick={(e) => {
                // אם אנחנו כבר בעמוד הבית, נמנע את הניווט הרגיל ורק נגלול למעלה
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  scrollToTop();
                } else {
                  // אם נמצאים בעמוד אחר, מבצע ניווט לעמוד הבית וגולל למעלה
                  // הגלילה תתבצע אחרי שהניווט יסתיים
                  setTimeout(scrollToTop, 100);
                }
              }}
            >
              <div className="logo">
                <Logo />
              </div>
            </Link>
           
            <p>
              We're committed to bringing the excitement and benefits
               of an active lifestyle to everyone through sustainable sportswear solutions.
            </p>
          </div>

          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
            
            </ul>
          </div>

          <div className="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2025 - DB Digital</p>
      </div>
    </div>
  );
};

export default Footer;
