import React from "react";
import { useState } from "react";
import { useAuth } from "./AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";

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
        
        <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
            <div className="login-container text-center p-5 shadow rounded-4">

                {/* Logo Styling */}
                <img src="Out2GetherLogo.png" alt="Out2Gether Logo" width="120" className="mb-4" />

                {/* Login Styling */}
                <h2 className="mb-4">Login</h2>

                {/* Form Styling */}
                <form>

                    {/* Username Styling */}
                    <div className="mb-3 text-start">
                        <label className="form-label">Username</label>
                    </div>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Username"
                    />

                    {/* Password Styling */}
                    <div className="mb-3 text-start">
                        <label className="form-label">Password</label>
                    </div>
                    <input 
                        type="password"
                        className="form-control"
                        placeholder="Enter Your Password"
                    />

                    {/* Register Styling */}
                    <div>
                        <Link to="/register" className="text-decoration-non text-info fw-semibold">
                            Don't have an account? Register now!
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}