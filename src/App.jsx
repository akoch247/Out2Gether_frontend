import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./Error404";
import Layout from "./layout/Layout.jsx";
import Favorites from "./features/favorites/FavoritesPage.jsx";
import CartPage from "./features/checkout/CartPage.jsx";
import CreateEventPage from "./features/events/CreateEventPage.jsx";
import EditEventPage from "./features/events/EditEventPage.jsx";
import AccountPage from "./features/accounts/AccountPage.jsx";
import NearbyPage from "./features/events/nearby/NearbyPage.jsx";
import SinglePostPage from "./features/events/SinglePostPage.jsx";
import ExplorePage from "./features/events/explore/ExplorePage.jsx";
import LoginPage from "./features/accounts/auth/LoginPage.jsx";
import RegisterPage from "./features/accounts/auth/RegisterPage.jsx";
import RequireAuth from "./components/RequireAuth.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NearbyPage />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<RequireAuth />}>
            <Route path="/posts/:id" element={<SinglePostPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/create-event" element={<CreateEventPage />} />
            <Route path="/edit-event" element={<EditEventPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
