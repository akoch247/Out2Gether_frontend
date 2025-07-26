import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import Error404 from "./Error404";
import Layout from "./layout/Layout.jsx";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
