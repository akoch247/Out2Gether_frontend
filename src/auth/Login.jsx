import React from "react";
import { useState } from "react";
import { useAuth } from "./AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TfiEmail } from "react-icons/tfi";
import { IoLockClosedOutline } from "react-icons/io5";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData);

    try {
      await login(credentials);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg p-5"
      style={{ backgroundColor: "#EBEBEB" }}
    >
      <div
        className="login-container text-center p-5 shadow rounded-4 w-100 h-100 bg-white"
        style={{ maxWidth: "600px", maxHeight: "600px" }}
      >
        <img
          src="Out2GetherLogo.png"
          alt="Out2Gether Logo"
          width="180"
          className="mb-3"
        />
        <h2 className="mb-4" style={{ fontWeight: "normal" }}>
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3" style={{ maxWidth: "350px", margin: "0 auto" }}>
            <label
              htmlFor="email"
              className="form-label text-start w-100"
              style={{ marginBottom: "0.15rem" }}
            >
              Email
            </label>
            <div style={{ position: "relative" }}>
              <TfiEmail
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "12px",
                  transform: "translateY(-50%)",
                  fontSize: "25px",
                }}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control form-control-sm"
                placeholder="Enter Your Email"
                required
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  paddingLeft: "40px",
                }}
              />
            </div>
          </div>
          <div
            className="mb-3 text-start"
            style={{ maxWidth: "350px", margin: "0 auto" }}
          >
            <label
              htmlFor="password"
              className="form-label text-start w-100"
              style={{ marginBottom: "0.15rem" }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <IoLockClosedOutline
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "12px",
                  transform: "translateY(-50%)",
                  fontSize: "25px",
                }}
              />
              <input
                type="password"
                name="password"
                id="password"
                className="form-control form-control-sm"
                placeholder="Enter Your Password"
                required
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  paddingLeft: "40px",
                }}
              />
            </div>
          </div>
          {error && (
            <div className="text-danger text-center small mb-4">{error}</div>
          )}
          <button
            type="submit"
            className="btn mt-4"
            style={{
              backgroundColor: "#F35242",
              borderColor: "#F35242",
              color: "#FFFFFF",
            }}
          >
            Sign In
          </button>
          <div className="text-decoration-non text-info mt-2">
            <Link
              to="/register"
              style={{ fontSize: "0.85rem", color: "#28BCB3" }}
            >
              Don't have an account? Register now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
