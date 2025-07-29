import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import Error404 from "./Error404";
import Layout from "./layout/Layout.jsx";
import Favorites from "./favorites/FavoritesPage.jsx";
import EventGrid from "./components/EventGrid.jsx";
import CartPage from "./checkout/CartPage.jsx";
import CreateEventPage from "./events/CreateEventPage.jsx";
import EditEventPage from "./events/EditEventPage.jsx";
import MyPosts from "./accounts/MyPosts.jsx";
import AccountPage from "./accounts/AccountPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/eventgrid" element={<EventGrid />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/createeventpage" element={<CreateEventPage />} />
          <Route path="/editeventpage" element={<EditEventPage />} />
          <Route path="/myposts" element={<MyPosts />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
