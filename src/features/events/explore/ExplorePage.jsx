import EventGrid from "../components/EventGrid";
import { FilterProvider } from "../../../context/FilterContext";

export default function ExplorePage() {
  return (
    <FilterProvider>
      <EventGrid title="Explore" fromPath="/explore" />;
    </FilterProvider>
  );
}
