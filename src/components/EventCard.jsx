// Provides the format and styling for how a single event will be displayed in the event grid

import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ post }) {
  return (
    <div className="card rounded-4 h-100 shadow bg-light">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={post.image_url}
            className="img-fluid rounded-start"
            alt={post.title}
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body p-4">
            <h5 className="card-title fw-semibold">
              {post.title.toUpperCase()}
            </h5>
            <p className="card-text">{post.body}</p>
            <p className="card-text">
              <strong className="text-dark">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </strong>
            </p>
            <p className="card-text">
              <small className="text-muted">${post.price} per couple</small>
            </p>
            <Link
              to={`/posts/${post.id}`}
              className="btn"
              style={{
                backgroundColor: "#FFC244",
                color: "black",
                borderColor: "#FFC244",
                fontWeight: "bold",
              }}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
