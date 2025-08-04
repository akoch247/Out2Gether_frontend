import { useAuth } from "../auth/AuthContext";
import EventGrid from "./EventGrid";
import Login from "../auth/Login";

export default function NearbyPage() {
  const { token } = useAuth();

  return token ? <EventGrid /> : <Login />;
}
