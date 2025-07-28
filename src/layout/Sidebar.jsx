// The nav bar on the left that will have the logo, Nearby, Favorites, Explore, Checkout, and Logout buttons

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./Layout.css";
import { BsCart, BsHeart } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FiNavigation } from "react-icons/fi";

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    //sidebar container for entire left page
    <div className="sidebar">
      <div>
        {/*Logo styling*/}
        <div className="brand">
          <img src="/Out2GetherLogo.png" alt="Out2Gether Logo" width="120" />
        </div>
        {/*Nav-Link styling*/}
        <nav className="nav-links">
          <NavLink to="/" className="nav-item mx-3" end>
            <FiNavigation /> Nearby
          </NavLink>
          <NavLink to="/favorites" className="nav-item mx-3">
            <BsHeart /> Favorites
          </NavLink>
          <NavLink to="/explore" className="nav-item mx-3">
            <MdOutlineExplore /> Explore
          </NavLink>
          <NavLink to="/cart" className="nav-item mx-3">
            <BsCart /> Checkout
          </NavLink>
        </nav>
      </div>

      <button onClick={handleLogout} className="nav-item logout-button mx-3">
        <IoIosLogOut /> Logout
      </button>
    </div>
  );
}
