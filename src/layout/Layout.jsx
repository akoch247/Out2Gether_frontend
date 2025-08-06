import { Outlet } from "react-router-dom";
import "./style/Layout.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { LayoutProvider } from "./LayoutContext";

export default function Layout() {
  return (
    <LayoutProvider>
      <div className="layout">
        <Sidebar />
        <Topbar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </LayoutProvider>
  );
}
