// Allows components that require auth to redirect to the login/home page to view them

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequireAuth({ children }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children ? children : <Outlet />;
}
