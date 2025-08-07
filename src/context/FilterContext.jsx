import { useContext, createContext, useState } from "react";
import useQuery from "../hooks/useQuery";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    categories: [],
    dateMin: "",
    dateMax: "",
    priceMin: "",
    priceMax: "",
  });
  const limit = 10;
  const resource = createResource({ ...filter, page, limit });
  const { data: posts, loading } = useQuery(resource, "filter", [page, filter]);

  if (loading || !posts) return <></>;

  const exports = {
    page,
    setPage,
    limit,
    posts,
    filter,
    setFilter,
  };

  console.log("Filtered Posts: ", posts);

  return (
    <FilterContext.Provider value={exports}>{children}</FilterContext.Provider>
  );
}

function createResource({
  page,
  limit,
  categories,
  dateMin,
  dateMax,
  priceMin,
  priceMax,
}) {
  const categoryString = categories.join(",");

  return `/posts/filter?page=${page}&limit=${limit}&minDate=${dateMin}&maxDate=${dateMax}&minPrice=${priceMin}&maxPrice=${priceMax}&categoryIds=${categoryString}`;
}

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context)
    throw new Error("useFilter must be used within the FilterContext");

  return context;
}
