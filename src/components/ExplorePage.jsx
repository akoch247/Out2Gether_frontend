import React from "react";
import { useAuth } from "../auth/AuthContext";
import EventGrid from "./EventGrid";
import Login from "../auth/Login";

export default function ExplorePage() {
  const { token } = useAuth();

  return token ? <EventGrid title="Explore" fromPath="/explore" /> : <Login />;
}
