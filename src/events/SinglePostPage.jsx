// Shows all the details for a single event

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../api/ApiContext";
import EventCard from "../components/EventCard";

export default function SinglePostPage() {
  const { id } = useParams();
  const { request } = useApi();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await request(`/posts/${id}`);
        setPost(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPost();
  }, [id, request]);

  const handleAddToCart = (postId) => {
    console.log(`Adding post ${postId} to cart`);
  };

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <EventCard post={post} onAddtoCart={handleAddToCart} />
    </div>
  );
}
