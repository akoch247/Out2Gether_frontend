import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";
import Error404 from "./Error404";
import Layout from "./layout/Layout.jsx";
import Favorites from "./favorites/FavoritesPage.jsx";
import CartPage from "./checkout/CartPage.jsx";
import CreateEventPage from "./events/CreateEventPage.jsx";
import EditEventPage from "./events/EditEventPage.jsx";
import MyPosts from "./accounts/MyPosts.jsx";
import AccountPage from "./accounts/AccountPage.jsx";
import NearbyPage from "./events/nearby/NearbyPage.jsx";
import SinglePostPage from "./events/components/SinglePostPage.jsx";
import ExplorePage from "./events/explore/ExplorePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NearbyPage />} />
          <Route path="/posts/:id" element={<SinglePostPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/createeventpage" element={<CreateEventPage />} />
          <Route path="/editeventpage" element={<EditEventPage />} />
          <Route path="/myposts" element={<MyPosts />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
