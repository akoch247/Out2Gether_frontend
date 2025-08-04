import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import "./Login.css";
import { CgProfile } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import { IoLockClosedOutline } from "react-icons/io5";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    setError(null);

    try {
      await register({ username, email, password });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#EBEBEB" }}
    >
      <div
        className="login-container text-center p-5 shadow rounded-4 w-100 h-100 bg-white"
        style={{ maxWidth: "600px", maxHeight: "700px" }}
      >
        <img
          src="Out2GetherLogo.png"
          alt="Out2Gether Logo"
          width="180"
          className="mb-3"
        />
        <h2 className="mb-4" style={{ fontWeight: "normal" }}>
          Register
        </h2>

        <form action={handleSubmit}>
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

          <div className="mb-3" style={{ maxWidth: "350px", margin: "0 auto" }}>
            <label
              htmlFor="username"
              className="form-label text-start w-100"
              style={{ marginBottom: "0.15rem" }}
            >
              Username
            </label>
            <div style={{ position: "relative" }}>
              <CgProfile
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "12px",
                  transform: "translateY(-50%)",
                  fontSize: "25px",
                }}
              />
              <input
                type="text"
                name="username"
                id="username"
                className="form-control form-control-sm"
                placeholder="Create a Username"
                required
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  paddingLeft: "40px",
                }}
              />
            </div>
          </div>
          <div className="mb-3" style={{ maxWidth: "350px", margin: "0 auto" }}>
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
                placeholder="Create a Password"
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
            Register
          </button>
          <div className="text-decoration-none text-info mt-2">
            <Link
              to="/login"
              style={{
                fontSize: "0.85rem",
                color: "#28BCB3",
              }}
            >
              Already have an account? Login now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
