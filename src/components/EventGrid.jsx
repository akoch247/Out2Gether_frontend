// Lays out multiple event cards in a responsive grid/list
import React, { useState, useEffect } from "react";
import { useApi } from "../api/ApiContext";
import { Link } from "react-router-dom";

export default function EventGrid() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { request } = useApi();
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await request(`/posts/${page}/${limit}`);
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [request, page]);

  if (loading) return <p>Loading events...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="bg-white rounded p-4">
      <h1 className="mb-4">Date Spots Nearby</h1>
      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-12">
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
                  <div className="card-body p-5">
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
                      <small className="text-muted">
                        ${post.price} per couple
                      </small>
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
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button
          className="btn"
          style={{
            backgroundColor: "#28BCB3",
            color: "white",
            borderColor: "#28BCB3",
            fontWeight: "bold",
          }}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <span>Page {page}</span>
        <button
          className="btn"
          style={{
            backgroundColor: "#28BCB3",
            color: "white",
            borderColor: "#28BCB3",
            fontWeight: "bold",
          }}
          onClick={() => setPage(page + 1)}
          disabled={posts.length < limit}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
