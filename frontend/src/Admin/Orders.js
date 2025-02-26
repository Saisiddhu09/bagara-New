import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.css"; // Import the CSS file

const Orders = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. You must log in first.");
      navigate("/admin"); // Redirect to login page if token is missing
      return;
    }

    fetch(`${process.env.REACT_APP_BACKEND_BASEURL}/api/forms/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setFormData(data);
        } else {
          console.error("Expected an array but got:", data);
          setFormData([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setFormData([]);
      });
  }, [navigate]);

  // Logout function that clears the token and redirects to the login page
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className="orders-page-wrapper">
    <div className="orders-container">
      <h2 className="orders-header">Admin Panel</h2>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((entry, index) => (
            <tr key={index}>
              <td data-label="Full Name">{entry.fullName || entry.name}</td>
              <td data-label="Email">{entry.email}</td>
              <td data-label="Phone Number">{entry.phone || entry.number}</td>
              <td data-label="Message">{entry.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Orders;
