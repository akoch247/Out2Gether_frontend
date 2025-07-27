import React from "react";
import { useState } from "react";
import { useAuth } from "./AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.target);
        const credentials = Object.fromEntries(formData);

        try {
            await login(credentials);
            navigate("/eventgrid");
        }   catch (err) {
            setError(err.message);
        }
    };

    return (
        
        <div className="d-flex justify-content-center align-items-center vh-100 bg-white p-5">
            <div className="login-container text-center p-5 shadow rounded-4 w-100 h-100" style={{ maxWidth: "600px", maxHeight: "600px" }}>
            

                {/* Logo Styling */}
                <img src="Out2GetherLogo.png" alt="Out2Gether Logo" width="180" className="mb-3" />

                {/* Login Styling */}
                <h2 className="mb-4" style={{ fontWeight: "normal" }}>Login</h2>

                {/* Form Styling */}
                <form onSubmit={handleSubmit}>

                    {/* Username Styling */}
                    <div className="mb-3" style={{ maxWidth: "350px", margin: "0 auto" }}>
                        <label htmlFor="username" className="form-label text-start w-100" style={{ marginBottom: "0.15rem" }}>Username</label>
                        <input 
                            type="text"
                            name="username"
                            id="username"
                            className="form-control form-control-sm"
                            placeholder="Enter Your Username"
                            required
                            style={{ border: "2px solid #333", boxShadow: "none" }}
                        />
                    </div>

                    {/* Password Styling */}
                    <div className="mb-3 text-start" style={{ maxWidth: "350px", margin: "0 auto" }}>
                        <label htmlFor="password" className="form-label text-start w-100" style={{ marginBottom: "0.15rem" }}>Password</label>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            className="form-control form-control-sm"
                            placeholder="Enter Your Password"
                            required
                            style={{ border: "2px solid #333", boxShadow: "none" }}
                        />
                    </div>

                    {/* Error Message Styling */}
                    {error && (
                        <div className="text-danger text-center small mb-4">{error}</div>
                    )}

                    {/* Login Button Styling */}
                    <button type="submit" className="btn btn-primary w-100 mt-4" style={{ maxWidth: "350px", margin: "0 auto" }}>
                        Sign In
                    </button>

                    {/* Register Styling */}
                    <div className="text-decoration-non text-info mt-2">
                        <Link to="/register" style={{ fontSize: "0.85rem", color: "#34c0eb" }}>
                            Don't have an account? Register now!
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}