import React from "react";
import BlueButton from "../components/BlueButton";
import { Link } from "react-router-dom";
import FilterBar from "../components/Filterbar";

export default function MyPosts() {
  return (
    <div className="make-pot-container container mt-1 bg-white rounded p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-4">My posts</h1>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
        <FilterBar />
        <Link
          to="/createeventpage"
          className="fw-bold px-4 py-2 mt-2 mt-md-0 text-decoration-none"
          style={{
            backgroundColor: "#fbbf24",
            color: "#000",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Post an Event
        </Link>
      </div>
    </div>
  );
}
