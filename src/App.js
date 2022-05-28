import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import HealthPage from "./pages/HealthPage";
import ContactPage from "./pages/ContactPage";
import VendorPage from "./pages/VendorPage";


function App() {
  return (
        <div className="App">
        <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/health" element={<HealthPage />} />
                <Route path="/vendor" element={<VendorPage />} />
                <Route path="/contact" element={<ContactPage />} />
          </Routes>
        <Footer />
        </div>
  );
};

export default App;
