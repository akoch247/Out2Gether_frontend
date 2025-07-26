// The nav bar on the left that will have the logo, Nearby, Favorites, Explore, Checkout, and Logout buttons

import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

export default function Sidebar() {
    return (
        <>
            <div id="brand">
                <img src= "/Out2GetherLogo.png" alt="Out2Gether Logo" width="100" />
                <p>Out2Gether</p>
            </div>

            <nav id="nav-links">
                <Link to="/eventgrid">Nearby</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/eventgrid">Explore</Link>
                <Link to="/cartpage">Checkout</Link>
                <Link to="/login">Logout</Link>
            </nav>
        </>
    );
}