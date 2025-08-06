import React from "react";
import BlueButton from "../components/BlueButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useApi } from "../api/ApiContext";
import EventCard from "../events/components/EventCard";
import { BsCalendar2Date } from "react-icons/bs";
import { Button } from "react-bootstrap";
import FilterBar from "../components/Filterbar";
import YellowButton from "../components/YellowButton";
import { TfiWrite } from "react-icons/tfi";

export default function MyPosts({ title, fromPath }) {
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

  const handleDelete = async (id) => {
    try {
      await request(`/posts/${id}`, { method: "DELETE" });
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading events...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  return (
    <div className="make-pot-container container mt-1 bg-white rounded p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-4">My posts</h1>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
        <FilterBar />
        <Link to="/createeventpage" className="mb-4">
          <YellowButton>
            <TfiWrite className="me-2" />
            Post an Event
          </YellowButton>
        </Link>
      </div>
      <div className="bg-white rounded p-1 pt-0">
        <h1 className="mb-4">{title}</h1>
        <div className="row g-4">
          {posts.map((post) => (
            <div key={post.id} className="col-12">
              <EventCard
                post={post}
                fromPath={"myposts"}
                onDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
