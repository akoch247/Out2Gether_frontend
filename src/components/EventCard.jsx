// Provides the format and styling for how a single event will be displayed in the event grid

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import YellowButton from "./YellowButton";
import BlueButton from "./BlueButton";

export default function EventCard({ post, fromPath = "/", onDelete }) {
  return (
    <div
      className="card rounded-4 h-100 shadow"
      style={{ backgroundColor: "#EBEBEB" }}
    >
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
            <YellowButton>
              <Link
                to={`/posts/${post.id}`}
                state={{ from: fromPath }}
                className="text-decoration-none text-dark"
              >
                View Details
              </Link>
            </YellowButton>
            {fromPath === "myposts" && (
              <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
                <div className="d-flex flex-wrap gap-1">
                  <BlueButton>
                    <Link
                      to={`/editeventpage/`}
                      className="text-decoration-none text-dark"
                    >
                      Edit
                    </Link>
                  </BlueButton>
                  <Button
                    variant="danger"
                    className="fw-bold"
                    onClick={() => onDelete(post.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
