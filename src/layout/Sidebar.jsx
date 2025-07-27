// The nav bar on the left that will have the logo, Nearby, Favorites, Explore, Checkout, and Logout buttons

import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import { BsCart, BsHeart } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FiNavigation } from "react-icons/fi";

export default function Sidebar() {
    return (
        //sidebar container for entire left page 
        <div className="sidebar">
            {/*Logo styling*/}
            <div className="brand">
                <img src= "/Out2GetherLogo.png" alt="Out2Gether Logo" width="120" />
            </div>
            {/*Nav-Link styling*/}
            <nav className="nav-links" >
                <Link to="/eventgrid" className="nav-item active mx-3"><FiNavigation /> Nearby</Link>
                <Link to="/favorites" className="nav-item mx-3"><BsHeart /> Favorites</Link>
                <Link to="/eventgrid" className="nav-item mx-3"><MdOutlineExplore /> Explore</Link>
                <Link to="/cartpage" className="nav-item mx-3"><BsCart /> Checkout</Link>
                <Link to="/login" className="nav-item mx-3"><IoIosLogOut /> Logout</Link>
            </nav>

        </div>
    );
}