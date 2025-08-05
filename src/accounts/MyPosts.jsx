import React from "react";
import BlueButton from "../components/BlueButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useApi } from "../api/ApiContext";
import EventCard from "../components/EventCard";
import { BsCalendar2Date } from "react-icons/bs";

export default function MyPosts( {title, fromPath}) {
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
        await request(`/events/${id}`, { method: "DELETE" });
        setRefetch((prev) => !prev);
    } catch (err) {
        setError(err.message);
    }
  }


  if (loading) return <p>Loading events...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;
    return (
        <div className="make-pot-container container mt-1 bg-white rounded p-4">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="mb-4">My posts</h1>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
                    <div className="d-flex flex-wrap gap-1">
                        <Button    
                            className="btn-info text-white fm-semibold px-3 py-2 rounded-pill border-0" 
                            style={{
                                backgroundColor: "#28BCB3",
                                color: "white",
                                borderColor: "#28BCB3",
                                fontWeight: "bold",
                            }}>
                                
                                <BsCalendar2Date /> Date
                        </Button>
                        <Button 
                            className="btn-info text-white fm-semibold px-3 py-2 rounded-pill border-0" 
                            style={{
                                backgroundColor: "#28BCB3",
                                color: "white",
                                borderColor: "#28BCB3",
                                fontWeight: "bold",
                        }}>
                        Category
                        </Button>
                        <Button 
                        className="btn-info text-white fm-semibold px-3 py-2 rounded-pill border-0"
                        style={{
                            backgroundColor: "#28BCB3",
                            color: "white",
                            borderColor: "#28BCB3",
                            fontWeight: "bold",
                          }}>
                        Price
                        </Button>
                    </div>
                    <Link to="/createeventpage"
                        className="fw-bold px-4 py-2 mt-2 text-decoration-none"
                        style={{backgroundColor: "#fbbf24", color: "#000", border: "none", borderRadius: "10px"}}>Post an Event</Link>
                </div>
                <div className="bg-white rounded p-1 pt-0">
                    <h1 className="mb-4">{title}</h1>
                    <div className="row g-4">
                        {posts.map((post) => (
                            <div key={post.id} className="col-12">
                                <EventCard post={post} fromPath={"myposts"} onDelete={handleDelete} />
                            </div>
                         ))}
                    </div>

                </div>

            </div>
    )
}
