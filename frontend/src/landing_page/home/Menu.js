import React from "react";
import "./Menu.css"; // Import custom CSS
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <div className="hello-container bg-dark bg-opacity-50 d-flex justify-content-center align-items-center vh-50">
     
      
      <div className="menu-description">
      <div className="row text-center mt-5">

          <h1>Choose Your Menu</h1>
          <p>
            Sri Sai Caterers' menus are designed to provide the best level of
            comfort for our customer's food needs. We offer a range of
            customizable Veg and Non-Veg menu options in addition to the pre-set
            menus
          </p>

      </div>
     
        
          <div className="menu-button d-flex justify-content-center gap-3 mt-4">
            <Link to="/menu" className="btn custom-btn">
              Veg Menu
            </Link>
            <Link to="/menu" className="btn custom-btn">
              Non Veg Menu
            </Link>
          </div>
        </div>
      </div>
      <div className="media-container px-5">
        <div className="media-container d-flex justify-content-center align-items-center gap-4 mt-3 flex-wrap">
          {/* Left Image */}
          <img
            src={`${process.env.PUBLIC_URL}/media/images/Veg.webp`}
            alt="Vegetarian Dish"
            className="img-fluid rounded shadow-lg"
            
          />

          {/* Center Image */}
          <img
            src={`${process.env.PUBLIC_URL}/media/images/Biryani.webp`}
            alt="Main Dish"
            className="img-fluid rounded shadow-lg"
          mt
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
