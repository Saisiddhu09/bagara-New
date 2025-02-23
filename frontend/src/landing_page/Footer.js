import React from "react";
import './Footer.css'
const Footer = () => {
  return (



    <footer className="bg-dark text-light py-5">
      <div className="container-fluid position-relative">
        <div className="row">
          {/* Left Section - About */}
          <div className="col-md-4 text-center text-md-start">
            <img
              src="media/images/logo.png"
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
                <li><a href="#" className="text-light">Services</a></li>
                <li><a href="#" className="text-light">Order Now</a></li>
                <li><a href="#" className="text-light">Our Menu</a></li>
                <li><a href="#" className="text-light">Our Menu QR</a></li>
                <li><a href="#" className="text-light">House Party Food</a></li>
                <li><a href="#" className="text-light">Catering</a></li>
              </ul>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">Veg Menu</a></li>
                <li><a href="#" className="text-light">Non Veg Menu</a></li>
                <li><a href="#" className="text-light">New Year Party</a></li>
                <li><a href="#" className="text-light">Privacy Policy</a></li>
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
