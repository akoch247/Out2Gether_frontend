import React from "react";

export default function MyPosts() {
    return (
        <div className="make-pot-container container mt-5 mb-5 bg-white rounded p-4">
            <div className="post-form-wrapper p-4">
                <h1 className="mb-5 pb-5">My posts</h1>

                <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
                    <button type="button" class="btn btn-info">Date</button>
                    <button type="button" class="btn btn-info">Category</button>
                    <button type="button" class="btn btn-info">Price</button>
                </div>
            </div>
        </div>
    )
}