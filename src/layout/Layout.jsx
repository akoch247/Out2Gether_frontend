import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
    return (
        <div>
            <Sidebar />
            <main><Outlet /></main>
        </div>
    );
}