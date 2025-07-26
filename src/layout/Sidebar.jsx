// The nav bar on the left that will have the logo, Nearby, Favorites, Explore, Checkout, and Logout buttons

import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

export default function Sidebar() {
    return (
        //sidebar container for entire left page 
        <div className="sidebar">
            {/*Logo styling*/}
            <div className="brand">
                <img src= "/Out2GetherLogo.png" alt="Out2Gether Logo" width="100" />
                <p className="brand-name">Out2Gether</p>
            </div>
            {/*Nav-Link styling*/}
            <nav className="nav-links">
                <Link to="/eventgrid" className="nav-item active">Nearby</Link>
                <Link to="/favorites" className="nav-item">Favorites</Link>
                <Link to="/eventgrid" className="nav-item">Explore</Link>
                <Link to="/cartpage" className="nav-item">Checkout</Link>
                <Link to="/login" className="nav-item">Logout</Link>
            </nav>

        </div>
    );
}