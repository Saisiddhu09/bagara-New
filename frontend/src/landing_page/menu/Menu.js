import { Link } from "react-router-dom";
import './Menu.css'

const Menu = () => {
  return (
    <div className="menu-container bg-dark bg-opacity-50 text-white mt-5">
    <div className="d-flex justify-content-center text-white align-items-center gap-4 p-4 mt-5">
      {/* Veg Menu */}
      <Link to="/menu/veg" className="text-decoration-none text-center">
        <div className="position-relative border border-secondary border-dashed rounded-circle overflow-hidden" style={{ width: "300px", height: "300px" }}>
          <img
            src={`${process.env.PUBLIC_URL}/media/images/veg.webp`}
            alt="Veg Menu"
            className="w-100 h-100 object-fit-cover transition-transform"
            style={{ transition: "transform 0.3s ease-in-out" }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <p className="mt-3 fw-medium text-white">Veg Menu</p>
      </Link>

      {/* Non-Veg Menu */}
      <Link to="/menu/nonveg" className="text-decoration-none text-center">
        <div className="position-relative border border-secondary border-dashed rounded-circle overflow-hidden" style={{ width: "300px", height: "300px" }}>
          <img
            src={`${process.env.PUBLIC_URL}/media/images/biryani.webp`}
            alt="Non-Veg Menu"
            className="w-100 h-100 object-fit-cover transition-transform"
            style={{ transition: "transform 0.3s ease-in-out" }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <p className="mt-3 fw-medium text-white">Non-Veg Menu</p>
      </Link>
    </div>
    </div>
  );
};

export default Menu;
