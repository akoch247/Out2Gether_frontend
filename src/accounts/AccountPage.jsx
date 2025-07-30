import React from "react";
import CreateEventPage from "../events/CreateEventPage";
import EditEventPage from "../events/EditEventPage";
import MyPosts from "./MyPosts";
import "./AccountsPage.css";

export default function AccountPage() {
    console.log("account page loaded")
    return (
        <>
            <CreateEventPage />
        </>
    );
}