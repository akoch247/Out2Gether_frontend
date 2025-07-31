// Provides the format for how a single event will be displayed

import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ post, onAddToCart }) {
  const { id, title, body, date, time, location, price, image_url } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const formattedTime = time
    ? new Date(`1970-01-01T${time}Z`).toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC",
      })
    : "N/A";

  const formattedLocation = location
    ? `${location.address}, ${location.city}, ${location.state} ${location.zip_code}`
    : "N/A";

  return (
    <div className="card h-100 shadow">
      {/* ✅ FIX: Wrap the image and body in a row */}
      <div className="row g-0">
        {/* ✅ FIX: Place the image in its own column */}
        <div className="col-md-5">
          <img
            src={image_url}
            className="img-fluid rounded-start"
            alt={title}
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* ✅ FIX: Place the text content in its own column */}
        <div className="col-md-7">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-semibold">{title.toUpperCase()}</h5>
            <p className="card-text">{body}</p>
            <p>
              <small className="text-muted">
                {formattedDate} at {formattedTime}
              </small>
            </p>
            <p>
              <small className="text-muted">{formattedLocation}</small>
            </p>

            <div className="mt-auto">
              <p className="card-text mt-3">
                <small className="text-muted">${price} per couple</small>
              </p>
              <button
                onClick={() => onAddToCart(id)}
                className="btn btn-success"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
