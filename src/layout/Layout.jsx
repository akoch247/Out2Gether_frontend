import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
    return (
        <div>
            <h1>Layout</h1>
            <Sidebar />
            <main><Outlet /></main>
        </div>
    );
}