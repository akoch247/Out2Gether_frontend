import { Outlet } from "react-router-dom";
import "./Layout.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

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
