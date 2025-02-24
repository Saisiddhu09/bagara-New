import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (



    <footer className="bg-dark text-light py-5">
      <div className="container-fluid position-relative">
        <div className="row">
          {/* Left Section - About */}
          <div className="col-md-4 text-center text-md-start">
            <img
              src={`${process.env.PUBLIC_URL}/media/images/logo.png`}
              alt="Sri Sai Caterers"
              style={{ maxWidth: "150px" }}
            />
            <p className="mt-3">
              Sri Sai Caterers is the best and premium leading catering service
              in Hyderabad. We cater to all types of
              occasions and events at the best prices.
            </p>
            {/* Social Icons */}
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com/" className="text-light fs-4">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-light fs-4">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
            <p className="mt-3">2025 Sri Sai Caterers. All Rights Reserved.</p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="col-md-4">
            <h4 className="mb-4 text-center">Quick Links</h4>
            <div className="d-flex justify-content-between">
              <ul className="list-unstyled">
                <li>
                <Link className="nav-link" to="/services">
                              Services
                            </Link>
                            </li>
                <li><Link className="nav-link" to="/">
                              Order Now
                            </Link></li>
                <li><Link className="nav-link" to="/menu">
                              Our Menu
                            </Link></li>
                
              </ul>
              <ul className="list-unstyled">
                <li><Link className="nav-link" to="/menu/veg">
                              Veg Menu
                            </Link></li>
                <li><Link className="nav-link" to="/menu/nonveg">
                             Non Veg Menu
                            </Link></li>
                
              </ul>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="col-md-4 text-center text-md-start">
            <h4 className="mb-4">Contact</h4>
            <p>
            <i className="fa fa-envelope-o me-1" aria-hidden="true"></i>
              example@gmail.com
            </p>
            <p>
            <i className="fa fa-phone me-1" aria-hidden="true"></i>
              +91 8367444488
            </p>
            <p>
              <i className="fas fa-clock text-warning me-2"></i>
              08 am - 06 pm
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};



      
export default Footer;
