import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home/HomePage";
import ProductDetailsPage from "./pages/ProductsDetails/ProductDetailsPage";
import ProductsPage from "./pages/Products/ProductsPage";
import CartPage from "./pages/Cart/CartPage";
import AccountPage from "./pages/Account/AccountPage";
import AboutPage from "./pages/About/Aboutpage";
import ContactPage from "./pages/Contact/Contactpage";
import SmartRopePage from "./components/OfferSection/Smartropepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetailsPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "smart-rope", element: <SmartRopePage /> },
    ],
  },
]);