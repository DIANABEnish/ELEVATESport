import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfStroke, faIndent } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(faStar, faStarHalfStroke, farStar, faIndent);

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;