import React from "react";
import CreateEventPage from "../events/CreateEventPage";
import EditEventPage from "../events/EditEventPage";
import MyPosts from "./MyPosts";
import "./AccountsPage.css";

export default function AccountPage() {
    console.log("account page loaded")
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="w-100" style={{ maxWidth: "900px "}}>
                <h1 className="mb-4">Your Account</h1>
            </div>

            {/* Create Event */}
            <section className="mb-3">
                <h2 className="mb-1 text-center">Create A New Event</h2>
                <CreateEventPage />
            </section>

            {/* Edit Event */}
            <section className="mb-3">
                <h2 className="mb-3 text-center">Edit Post</h2>
                <EditEventPage />
            </section>

            {/* My Posts */}
            <section>
                <h2 className="mb-3 text-center">Your Posts</h2>
                <MyPosts />
            </section>
        </div>
    );
}