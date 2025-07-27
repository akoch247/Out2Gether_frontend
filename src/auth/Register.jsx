import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import "./Login.css";

export default function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit= async (e) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.target);
        const credentials = Object.fromEntries(formData);

        try {
            await register(credentials);
            navigate("/eventgrid");
        }   catch (err) {
            setError(err.message);
        }
    };

    return (
        
        <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
            <div className="login-container text-center p-5 shadow rounded-4 w-100 h-100" style={{ maxWidth: "600px", maxHeight: "700px" }}>

                {/* Logo Styling */}
                <img src="Out2GetherLogo.png" alt="Out2Gether Logo" width="180" className="mb-3" />

                {/* Register Styling */}
                <h2 className="mb-4" style={{ fontWeight: "normal" }}>Register</h2>

                {/* Form Styling */}
                <form onSubmit={handleSubmit}>

                    {/* Email Styling */}
                    <div className="mb-3" style={{ maxWidth: "350px", margin: "0 auto" }}>
                        <label htmlFor="email" className="form-label text-start w-100" style={{ marginBottom: "0.15rem" }}>Email</label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            className="form-control form-control-sm"
                            placeholder="Enter Your Email"
                            required
                            style={{ border: "2px solid #333", boxShadow: "none" }}
                        />
                    </div>

                     {/* Username Styling */}
                     <div className="mb-3" style={{ maxWidth: "350px", margin: "0 auto" }}>
                        <label htmlFor="username" className="form-label text-start w-100" style={{ marginBottom: "0.15rem" }}>Username</label>
                        <input 
                            type="text"
                            name="username"
                            id="username"
                            className="form-control form-control-sm"
                            placeholder="Create a Username"
                            required
                            style={{ border: "2px solid #333", boxShadow: "none" }}
                        />
                    </div>

                    {/* Password Styling */}
                    <div className="mb-3" style={{ maxWidth: "350px", margin: "0 auto" }}>
                        <label htmlFor="password" className="form-label text-start w-100" style={{ marginBottom: "0.15rem" }}>Password</label>
                        <input 
                            type="password"
                            name="password"
                            className="form-control form-control-sm"
                            placeholder="Create a Password"
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
                        Register
                    </button>

                    {/* Login Styling */}
                    <div className="text-decoration-none text-info mt-2">
                        <Link to="/login" style={{ fontSize: "0.85rem", color: "#34c0eb" }}>
                            Already have an account? Login now!
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}