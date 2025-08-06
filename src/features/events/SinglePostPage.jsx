// Shows all the details for a single event

import { useParams, Link, useLocation } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import FavoriteButton from "./components/FavoriteButton";
import AddToCartButton from "./components/AddToCartButton";

export default function SinglePostPage() {
  const { id } = useParams();
  const { data: post, loading, error } = useQuery(`/posts/${id}`, "post_" + id);

  const routeLocation = useLocation();
  const from = routeLocation.state?.from || "/";

  if (loading) return <p>Loading...</p>;
  if (error) return <div className="alert alert-danger">{error.message}</div>;
  if (!post) return <p>Post not found.</p>;

  const { title, body, date, time, location, price, image_url, user } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = time
    ? new Date(`1970-01-01T${time}Z`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC",
      })
    : "";
  const formattedLocation = location
    ? `${location.address}, ${location.city}, ${location.state}, ${location.zip_code}`
    : "";

  return (
    <div className="container bg-white rounded-3 shadow-sm p-4 my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to={from} className="btn d-flex align-items-center">
          <IoArrowBackCircleOutline size={40} className="me-2" />
          Back to Listing
        </Link>
        <FavoriteButton post={post} />
      </div>

      <div className="row g-5">
        <div className="col-md-5">
          <img src={image_url} alt={title} className="img-fluid rounded" />
        </div>
        <div className="col-md-7">
          <h2>{title}</h2>
          <p className="text-muted">Posted by {user?.username || "a user"}</p>
          <p className="lead">{body}</p>
          <hr className="my-4" />
          <p>
            <strong>Date:</strong> {formattedDate}
          </p>
          <p>
            <strong>Time:</strong> {formattedTime}
          </p>
          <p>
            <strong>Location:</strong> {formattedLocation}
          </p>
          <p>
            <strong>Price:</strong> ${price} per couple
          </p>
          <AddToCartButton post={post} />
        </div>
      </div>
    </div>
  );
}
