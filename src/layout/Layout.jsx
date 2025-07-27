import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
    return (
        <div>
            <Sidebar />
            <Topbar />
            <main><Outlet /></main>
        </div>
    );
}