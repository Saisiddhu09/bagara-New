import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ message, onClose }) => {
  

  return (
    <div className="popup-overlay">
      <div className="popup-box">
      <h2>Get into Contact!</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
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
                
                <button 
  type="submit" 
  className="btn text-dark fw-bold px-4 py-2 rounded-3 border-0"
  style={{ backgroundColor: "#d9b99b " }}
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
