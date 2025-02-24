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


const App = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timerr = setTimeout(()=>{
        setShowPopup(true);

    },3000)
    
    

    
  },[location.pathname]); // Runs on every route change

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
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
