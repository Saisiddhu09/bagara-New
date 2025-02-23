import React from "react";
import "./Menu.css"; // Import custom CSS
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-50"style={{ position: "relative" }}>
     
      
      <img 
        src="/media/images/bg.png" 
        alt="Background" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: -1  // Sends the image behind other content
        }}
      />
        <div className="row text-center mt-5">
          <h1>Choose Your Menu</h1>
          <p>
            Sri Sai Caterers' menus are designed to provide the best level of
            comfort for our customer's food needs. We offer a range of
            customizable Veg and Non-Veg menu options in addition to the pre-set
            menus
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/menu" className="btn custom-btn">
              Veg Menu
            </Link>
            <Link to="/menu" className="btn custom-btn">
              Non Veg Menu
            </Link>
          </div>
        </div>
      </div>
      <div className="container px-5">
        <div className="d-flex justify-content-center align-items-center gap-4 mt-5 flex-wrap">
          {/* Left Image */}
          <img
            src="/media/images/veg.webp"
            alt="Vegetarian Dish"
            className="img-fluid rounded shadow-lg"
            style={{ width: "25%", objectFit: "cover" }}
          />

          {/* Center Image */}
          <img
            src="/media/images/Biryani.webp"
            alt="Main Dish"
            className="img-fluid rounded shadow-lg"
            style={{ width: "50%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
