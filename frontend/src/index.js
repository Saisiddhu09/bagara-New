import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import AboutSection from "./landing_page/about/AboutSection";
import MenuSection from "./landing_page/menu/MenuSection";
import ServicesPage from "./landing_page/services/ServicesPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Whatsapp from "./landing_page/Whatsapp";
import Veg from "./landing_page/menu/Veg";
import NonVeg from "./landing_page/menu/NonVeg";
import ScrollToTop from "./ScrollToTop";
import Popup from "./landing_page/PopUp";
import { HashRouter } from "react-router-dom";




  const App = () => {
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
  
    useEffect(() => {
      if (showPopup) return; // Prevent setting another timeout if a popup already exists
  
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000);
  
      return () => clearTimeout(timer); // Cleanup previous timer if pathname changes
    }, [location.pathname]); // Runs only when pathname changes// Runs on every route change

  return (
    <div className="app-container">
     
      <ScrollToTop />
      <Navbar />
      
      {/* Show Popup when page changes */}
      {showPopup && <Popup message="You switched pages!" onClose={() => setShowPopup(false)} />}

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/menu" element={<MenuSection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/menu/veg" element={<Veg />} />
        <Route path="/menu/nonveg" element={<NonVeg />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Whatsapp />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<HashRouter>
  <App />
</HashRouter>
);
