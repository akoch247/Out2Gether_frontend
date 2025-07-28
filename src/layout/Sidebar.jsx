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
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="sidebar">
            {/* Logo */}
            <div className="brand">
                <img src="/Out2GetherLogo.png" alt="Out2Gether Logo" width="120" />
            </div>

            {/* Navigation Links */}
            <div className="nav-links flex-grow-1 d-flex flex-column">
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
            </div>

            {/* Logout button pinned to bottom */}
            <div className="nav-links flex-grow-2 d-flex flex-column">
                <button onClick={handleLogout} className="nav-item logout-button mx-3 mb-4">
                    <IoIosLogOut /> Logout
                </button>
            </div>
        </div>
    );
}
