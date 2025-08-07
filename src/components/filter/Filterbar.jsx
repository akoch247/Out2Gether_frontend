// The main component that reuses DropdownFilter.jsx multiple times to create the filter bar for date, category, and price

import CategoryFilterButton from "./buttons/CategoryFilterButton";
import DateFilterButton from "./buttons/DateFilterButton";
import PriceFilterButton from "./buttons/PriceFilterButton";

export default function FilterBar({ children, ...props }) {
  return (
    <>
      <div className="d-flex flex-wrap gap-1 mb-4">
        <CategoryFilterButton />
        <DateFilterButton />
        <PriceFilterButton />
      </div>
      {children}
    </>
  );
}
