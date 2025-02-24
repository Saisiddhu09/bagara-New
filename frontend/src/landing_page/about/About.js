import React from "react";

import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-4  mt-3">
<section className="why-choose-us bg-dark bg-opacity-50 container mt-5">
  <div className="whycont ">
  <h2 className="text-center mt-5">WHY CHOOSE US</h2>
  <p className="text-center ">Because we believe good food builds good relations</p>

  </div>
      
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>30 Years Of Experience In Catering Services</h3>
          <p>
            Vaaraahi Caterers is an expert outdoor catering service provider in Hyderabad.
            We serve events from small to large crowds with the most comfortable buffet setups at your location.
            Be it a family reunion, colleagues gathering, family function, Indian wedding, birthday, housewarming,
            cradle ceremony, or anniversaries, we are just a call away. From welcome drinks to non-veg specials,
            we offer packages as per your budgets.
          </p>
          <Link to="/menu" className="btn btn-gold">DISCOVER MORE →</Link>
          
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="info-box p-4 bg-light rounded">
            <img src={`${process.env.PUBLIC_URL}/media/images/about-us.webp`} alt="Delicious Food" className="img-fluid rounded" />
            <ul className="mt-3 list-unstyled">
              <li>✔ Good Food & Beverages</li>
              <li>✔ Professionals & Skilled Chefs</li>
              <li>✔ Affordable Prices & Best Packages</li>
              <li>✔ Any Size Guest List Served</li>
              <li>✔ Serves Hot & Fresh</li>
              
            </ul>
            <div className="satisfaction-box d-flex flex-column align-items-center text-center mt-3">

              <span className="heart-icon text-danger fs-3 me-2">❤️</span>
              <div>
                <h4 className="mb-0">20000+</h4>
                <p className="text-muted">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default About;
