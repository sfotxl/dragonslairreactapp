import "./App.css";
import {
  Routes,
  BrowserRouter,
  Link,
  Route,
  Router,
  nav,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import { Nav } from "reactstrap";
import HealthPage from "./pages/HealthPage";
import ContactPage from "./pages/ContactPage";
import VendorPage from "./pages/VendorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        Welcome!
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/vendor" element={<VendorPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
