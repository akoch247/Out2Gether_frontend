import EventGrid from "../components/EventGrid";
import { FilterProvider } from "../../../context/FilterContext";

export default function NearbyPage() {
  return (
    <FilterProvider>
      <EventGrid />;
    </FilterProvider>
  );
}
