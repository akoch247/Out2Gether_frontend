// A page with form to post a new event
import React from "react";

export default function CreateEventPage() {
    return (
        //Outer container for Make A Post 
        <div className="make-pot-container container mt-5 mb-5">
            <div className="post-form-wrapper p-4">
                <h2 className="mb-4">Make a Post</h2>

                <form>
                    <div className="row mb-3">
                        <div classname="col-md-6">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter a title" /> 
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input type="text" className="form-control" id="location" placeholder="Enter an address" /> 
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" id="date" /> 
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="time" className="form-label">Time</label>
                            <input type="time" className="form-control" id="time" /> 
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select className="form-select" id="category"> 
                                <option>Choose a category</option>
                                <option>Outdoor</option>
                                <option>Food</option>
                                <option>Art</option>
                                <option>Budegt Friendly</option>
                            </select>
                        </div>
                        <div className="col=md-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="text" className="form-control" id="price" /> 
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="5"
                                placeholder="Add an event description"
                            ></textarea> 
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <button type="button" className="btn btn-warning me-2">
                                <i className="bi bi-upload"></i> Upload
                            </button>
                            <span>Add an image for your event</span>
                        </div>
                        <button type="submit" className="btn btn-info text-white">Post Event</button>
                    </div>
                </form>
            </div>
        </div>
    )
}