import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-5 py-1 fixed-top">
     <div className="container-fluid d-flex align-items-center justify-content-between">

      <Link className="navbar-brand d-flex align-items-center" to="/">
  <img
    src="media/images/logo.png"
    alt="Logo"
    className="d-block"
    style={{ width: "140px", maxHeight: "60px", objectFit: "contain" }}
  />
</Link>
      <div className="text-white fw-bold pe-3 d-sm-block">📞 +91 98765 43210</div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav text-center gap-4">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
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

      {/* Always visible phone number */}
     </div>
    </nav>
  );
};

export default Navbar;
