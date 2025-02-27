import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [status, setStatus] = useState(null); // To show success/error message

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_BASEURL}/api/forms/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "We Will Contact You Soon!" });
        // Reset form using the correct keys
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Submission failed." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Try again later." });
    }
  };

  return (
    <div className="container-fluid position-relative">
      <div className="parent-container">
        <img
          src={`${process.env.PUBLIC_URL}/media/images/serving.webp`}
          alt="Background"
          className="hero-bg"
        />
      </div>

      {/* Content Overlay */}
      <div className="hero-content">
        <div className="container text-white">
          <div className="row align-items-center">
            {/* Left Section */}
            <div className="col-md-6 bg-dark bg-opacity-50 p-4 rounded-3 text-center">
              <h1>Bheemas Kitchen provide best Food Catering Services in Hyderabad</h1>
              <p>
                Get premium quality food catering services nearby you at an affordable price.
                Enjoy a wide range of delicious and hygienic dishes crafted by expert chefs.
                Customized menus to suit every occasion, from weddings to corporate events.
              </p>
            </div>

            {/* Right Section - Form */}
            <div className="col-md-6 text-center bg-light p-4 rounded text-dark">
              <h2>Message Us Now!</h2>

              {status && (
                <div className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"}`} role="alert">
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name:</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-control"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number:</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn text-dark fw-bold px-4 py-2 rounded-3 border-0" 
                  style={{ backgroundColor: "#d9b99b" }}
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
