import React from "react";
import './Hero.css'
const Hero = () => {
  return (
    <div className="container-fluid position-relative w-100 vh-100">
     <div
  style={{
    
    width: "100%",
    height: "100vh", // Full viewport height
     
  }}
>
  <img
    src="media/images/serving.webp"
    alt="Background"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures full coverage
    }}
  />
</div>


      <div className="position-absolute top-0 w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="container text-white">
          <div className="row">
            <div className="col-md-6 bg-dark bg-opacity-50 p-4 rounded-3 text-center">
              <h1>
                Sri Sai Caterers provide best Food Catering Services in
                Hyderabad
              </h1>
              <p>
                Get Premium quality food Catering Services nearby you at an
                affordable price. Get Premium Quality Food Catering Services
                Nearby You at an Affordable Price. Enjoy a wide range of
                delicious and hygienic dishes crafted by expert chefs.
                Customized menus to suit every occasion, from weddings to
                corporate events. Fresh ingredients and authentic flavors to
                elevate your dining experience. Timely service and professional
                staff to make your event seamless. Affordable catering packages
                tailored to your budget and guest count.
              </p>
            </div>
            <div className="col-md-6 text-center bg-light p-4 rounded text-dark">
              <h2>Register Now</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="number" className="form-label">
                    Phone Number:
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message:
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <button 
  type="submit" 
  className="btn text-dark fw-bold px-4 py-2 rounded-3 border-0"
  style={{ backgroundColor: "#d9b99b " }}
>
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
