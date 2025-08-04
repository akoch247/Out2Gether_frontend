import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MyPosts() {
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
                        Date
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
                        className="fw-bold px-4 py-2 mt-2 mt-md-0 text-decoration-none"
                        style={{backgroundColor: "#fbbf24", color: "#000", border: "none", borderRadius: "10px"}}>Post an Event</Link>
                </div>
            </div>
    )
}
