import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking a nav link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0 fixed-top">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/media/images/logo.PNG`}
            alt="Logo"
            style={{ width: "140px", maxHeight: "60px", objectFit: "contain" }}
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          className={`navbar-toggler ms-auto ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto text-center gap-4">
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" onClick={closeMenu}>
                Menu
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#" onClick={closeMenu}>
                  Wedding Catering
                </Link>
                <Link className="dropdown-item" to="#" onClick={closeMenu}>
                  Birthday Party Catering
                </Link>
                <Link className="dropdown-item" to="#" onClick={closeMenu}>
                  Cultural Event Catering
                </Link>
                <Link className="dropdown-item" to="#" onClick={closeMenu}>
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
