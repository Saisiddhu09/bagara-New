import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0 fixed-top">
      <div className="container-fluid">
        {/* 1. Brand/Logo on the left */}
        <Link className="navbar-brand" to="/">
          <img
            src={`${process.env.PUBLIC_URL}media/images/logo.png`}
            alt="Logo"
            style={{ width: "140px", maxHeight: "60px", objectFit: "contain" }}
          />
        </Link>

        {/* 2. Hamburger menu toggler on the right (small screens) */}
        <button
          className="navbar-toggler ms-auto" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 3. Navbar links (collapsible) */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Use justify-content-center to center nav items horizontally */}
          <ul className="navbar-nav mx-auto text-center gap-4">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/services"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Wedding Catering
                </Link>
                <Link className="dropdown-item" to="#">
                  Birthday Party Catering
                </Link>
                <Link className="dropdown-item" to="#">
                  Cultural Event Catering
                </Link>
                <Link className="dropdown-item" to="#">
                  House Warming Catering
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
