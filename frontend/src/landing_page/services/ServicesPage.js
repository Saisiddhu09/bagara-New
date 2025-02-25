// pages/ServicesPage.jsx
import React from 'react';
import './ServicesPage.css';
import { Link } from 'react-router-dom';

const ServicePage = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1 className="services-title pt-5">OUR SERVICES</h1>
        <p className="services-subtitle">Catering Service in Quthbullapur and Suchitra</p>
      </div>

      <div className="services-grid">
        {/* First row */}
        <div className="service-item">
          <div className="service-image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/media/images/wedding.webp`} 
              alt="Wedding Catering"
              className="service-image" 
            />
          </div>
          <h2 className="service-title">Wedding Catering</h2>
          <p className="service-description">
            Sri Sai Caterers is a acclaimed wedding caterer in Quthbullapur and Suchitra. With around 10 years of catering experience
          </p>
          <Link to="/services/wedding" className="btn btn-gold">CLICK HERE →</Link>
        </div>

        <div className="service-item">
          <div className="service-image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/media/images/birthday.webp`} 
              alt="Birthday Party Catering"
              className="service-image" 
            />
          </div>
          <h2 className="service-title">Birthday Party Catering</h2>
          <p className="service-description pb-4">
          Sri Sai Caterers, an esteemed caterer in Hyderabad, has now added birthday parties to their services.
          </p>
          <Link to="/services/birthday" className="btn btn-gold">CLICK HERE →</Link>
        
        </div>

        <div className="service-item">
          <div className="service-image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/media/images/cultural.jpeg`} 
              alt="Cultural Event Catering"
              className="service-image" 
            />
          </div>
          <h2 className="service-title">Cultural Event Catering</h2>
          <p className="service-description">
            Whether its lunch, breakfast, snacks, or dinner, we provide top-notch Cultural events catering services to meet any special dietary
          </p>
          <Link to="/services/cultural" className="btn btn-gold">CLICK HERE →</Link>
        </div>

        {/* Second row */}
        <div className="service-item">
          <div className="service-image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/media/images/house.jpg`} 
              alt="House Warming Caterers"
              className="service-image" 
            />
          </div>
          <h2 className="service-title">House Warming Caterers</h2>
          <p className="service-description">
            Every home is a unique story, and your housewarming Catering should reflect it. At Sri Sai Caterers
          </p>
          <Link to="/services/house" className="btn btn-gold">CLICK HERE →</Link>
        </div>

        <div className="service-item">
          <div className="service-image-container">
            <img 
              src={`${process.env.PUBLIC_URL}/media/images/corporate.jpeg`}
              alt="Corporate Catering"
              className="service-image" 
            />
          </div>
          <h2 className="service-title">Corporate Catering</h2>
          <p className="service-description">
            At Sri Sai Caterers, Whether it's a corporate lunch, a high-profile executive event, or a milestone celebration
          </p>
          <Link to="/services/coorporate" className="btn btn-gold">CLICK HERE →</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;