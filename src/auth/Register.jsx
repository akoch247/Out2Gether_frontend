import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";

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
            <div className="login-container text-center p-5 shadow rounded-4">

                {/* Logo Styling */}
                <img src="Out2GetherLogo.png" alt="Out2Gether Logo" width="120" className="mb-4" />

                {/* Register Styling */}
                <h2 className="mb-4">Register</h2>

                {/* Form Styling */}
                <form>

                    {/* Email Styling */}
                    <div className="mb-3 text-start">
                        <label className="form-label">Email</label>
                    </div>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Email"
                    />

                     {/* Username Styling */}
                     <div className="mb-3 text-start">
                        <label className="form-label">Username</label>
                    </div>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Create a Username"
                    />

                    {/* Password Styling */}
                    <div className="mb-3 text-start">
                        <label className="form-label">Password</label>
                    </div>
                    <input 
                        type="password"
                        className="form-control"
                        placeholder="Create a  Password"
                    />

                    {/* Login Styling */}
                    <div>
                        <Link to="/login" className="text-decoration-non text-info fw-semibold">
                            Already have an account? Login now!
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    );
}