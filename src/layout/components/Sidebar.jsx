// The nav bar on the left that will have the logo, Nearby, Favorites, Explore, Checkout, and Logout buttons

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { BsCart, BsHeart } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FiNavigation } from "react-icons/fi";
import { useLayout } from "../LayoutContext";

export default function Sidebar() {
  const { sidebar, sidebarRef, closeSidebar } = useLayout();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className={"sidebar " + (sidebar ? "active" : "inactive")}
      ref={sidebarRef}
    >
      {/* Logo */}
      <Link to="/" onClick={closeSidebar}>
        <div className="brand">
          <img src="/Out2GetherLogo.png" alt="Out2Gether Logo" width="120" />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="nav-links flex-grow-1 d-flex flex-column">
        <NavLink to="/" className="nav-item mx-3" end onClick={closeSidebar}>
          <FiNavigation /> Nearby
        </NavLink>
        <NavLink
          to="/favorites"
          className="nav-item mx-3"
          onClick={closeSidebar}
        >
          <BsHeart /> Favorites
        </NavLink>
        <NavLink to="/explore" className="nav-item mx-3" onClick={closeSidebar}>
          <MdOutlineExplore /> Explore
        </NavLink>
        <NavLink to="/cart" className="nav-item mx-3" onClick={closeSidebar}>
          <BsCart /> Checkout
        </NavLink>
      </div>

      {/* Logout button pinned to bottom */}
      {user && (
        <div className="nav-links flex-grow-2 d-flex flex-column">
          <button
            onClick={handleLogout}
            className="nav-item logout-button mx-3 mb-4"
          >
            <IoIosLogOut /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
