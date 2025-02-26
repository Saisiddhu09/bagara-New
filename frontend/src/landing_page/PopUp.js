import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = ({ message, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
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
      const response = await fetch("http://localhost:8000/api/forms/submit", {
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
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Get into Contact!</h2>
        {status && (
          <div
            className={`alert ${
              status.type === "success" ? "alert-success" : "alert-danger"
            }`}
            role="alert"
          >
            {status.message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Name:
            </label>
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
            <label htmlFor="phone" className="form-label">
              Phone Number:
            </label>
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

          <button
            type="submit"
            className="btn text-dark fw-bold px-4 py-2 rounded-3 border-0"
            style={{ backgroundColor: "#d9b99b" }}
          >
            Send Message
          </button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
