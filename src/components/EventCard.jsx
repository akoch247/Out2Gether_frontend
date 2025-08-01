// Provides the format for how a single event will be displayed

import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ post, onAddToCart, addingError }) {
  const { id, title, body, date, time, location, price, image_url } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const formattedTime = time
    ? new Date(`1970-01-01T${time}Z`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC",
      })
    : "N/A";

  const formattedLocation = location
    ? `${location.address}, ${location.city}, ${location.state} ${location.zip_code}`
    : "N/A";

  let addingErrorMessage = addingError?.message;

  if (addingError && addingErrorMessage === "23505") {
    addingErrorMessage = "This item is already in your cart.";
  }

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <div className="card h-100 shadow">
        <div className="row g-0">
          <div className="col-md-5 p-3">
            <img
              src={image_url}
              className="img-fluid rounded"
              alt={title}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-semibold">{title}</h5>
              <p className="card-text">{body}</p>
              <p>
                <small>Date: {formattedDate}</small>
              </p>
              <p>
                <small>Time: {formattedTime}</small>
              </p>
              <p>
                <small>Location: {formattedLocation}</small>
              </p>

              <div className="mt-auto">
                <p className="card-text mt-3">
                  <small>Price: ${price} per couple</small>
                </p>
                {addingErrorMessage && <div className="alert alert-danger">{addingErrorMessage}</div>}
                <button
                  onClick={() => onAddToCart(id)}
                  className="btn"
                  style={{
                    backgroundColor: "#28BCB3",
                    color: "white",
                    borderColor: "#28BCB3",
                    fontWeight: "bold",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
