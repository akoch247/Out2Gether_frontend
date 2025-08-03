import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
