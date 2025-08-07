import { useContext, createContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [minimumDate, setMinimumDate] = useState();
  const [maximumDate, setMaximumDate] = useState();

  const exports = {
    minimumDate,
    setMinimumDate,
    maximumDate,
    setMaximumDate,
  };

  return (
    <FilterContext.Provider value={exports}>{children}</FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context)
    throw new Error("useFilter must be used within the FilterContext");

  return context;
}
