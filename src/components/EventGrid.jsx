// Lays out multiple event cards in a responsive grid/list
import React, { useState, useEffect } from "react";
import { useApi } from "../api/ApiContext";
import { Link } from "react-router-dom";

export default function EventGrid() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { request } = useApi();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await request("/posts/1/20");
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [request]);

  if (loading) return <p>Loading events...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="bg-white rounded p-4">
      <h1 className="mb-4">Date Spots Nearby</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-12">
            <div className="card h-100">
              <img
                src={post.image_url}
                className="card-img-top"
                alt={post.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{post.title.toUpperCase()}</h5>
                <p className="card-text">{post.body}</p>
                <p className="card-text">
                  <small className="text-muted">${post.price} per couple</small>
                </p>
                <Link to={`/posts/${post.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
