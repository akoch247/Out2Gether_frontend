import React from "react";
import { Button } from "react-bootstrap";

export default function MyPosts() {
    return (
        <div className="make-pot-container container mt-5 mb-5 bg-white rounded p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="mb-5">My posts</h1>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                    <div className="d-flex flex-wrap gap-2">
                        <Button className="btn-info text-white fm-semibold px-3 py-2 rounded-pill border-0">
                            Date
                        </Button>
                        <Button className="btn-info text-white fm-semibold px-3 py-2 rounded-pill border-0">
                            Category
                        </Button>
                        <Button className="btn-info text-white fm-semibold px-3 py-2 rounded-pill border-0">
                            Price
                        </Button>
                    </div>
                    <Button className="fw-bold px-4 py-2 mt-2 mt-md-0"
                        style={{backgroundColor: "#fbbf24", color: "#000", border: "none", borderRadius: "10px"}}>Post an Event</Button>
                </div>
            </div>
    )
}