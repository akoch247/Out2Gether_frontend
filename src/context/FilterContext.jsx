import { useContext, createContext, useState } from "react";
import useQuery from "../hooks/useQuery";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    category: "",
    dateMin: "",
    dateMax: "",
    priceMin: "",
    priceMax: "",
  });
  const { data: posts, loading } = useQuery(
    `/posts/filter?page=${page}&limit=10&minDate=${filter.dateMin}&maxDate=${filter.dateMax}&minPrice=${filter.priceMin}&maxPrice=${filter.priceMax}`,
    "filter",
    [page]
  );

  const exports = {
    filter,
    setFilter,
  };

  if (loading || !posts) return <></>;

  console.log("Filtered Posts: ", posts);

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
