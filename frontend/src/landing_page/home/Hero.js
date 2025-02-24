import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <div className="container-fluid position-relative">
      <div className="parent-container">
      <img
        src="media/images/serving.webp"
        alt="Background"
        className="hero-bg"
      />
      </div>
      {/* Background Image */}
      

      {/* Content Overlay */}
      <div className="hero-content">
        <div className="container text-white">
          <div className="row align-items-center">
            {/* Left Section */}
            <div className="col-md-6 bg-dark bg-opacity-50 p-4 rounded-3 text-center">
              <h1>Sri Sai Caterers provide best Food Catering Services in Hyderabad</h1>
              <p>
                Get premium quality food catering services nearby you at an affordable price.
                Enjoy a wide range of delicious and hygienic dishes crafted by expert chefs.
                Customized menus to suit every occasion, from weddings to corporate events.
              </p>
            </div>

            {/* Right Section - Form */}
            <div className="col-md-6 text-center bg-light p-4 rounded text-dark">
              <h2>Register Now</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name:</label>
                  <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" id="email" name="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">Phone Number:</label>
                  <input type="number" id="number" name="number" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <textarea id="message" name="message" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn text-dark fw-bold px-4 py-2 rounded-3 border-0" style={{ backgroundColor: "#d9b99b" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
