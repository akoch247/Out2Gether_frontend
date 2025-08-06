import { useContext, createContext, useState, useEffect, useRef } from "react";
import useQuery from "../hooks/useQuery";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState();
  const [viewingSearch, setViewingSearch] = useState(false);
  const { data: results } = useQuery(
    search ? `/posts/search/1/10/${search}` : null,
    "search"
  );
  const searchRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (searchRef.current && searchRef.current.contains(event.target)) return;
      if (menuRef.current && menuRef.current.contains(event.target)) return;

      setViewingSearch(false);
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const exports = {
    search,
    setSearch,
    viewingSearch,
    setViewingSearch,
    searchRef,
    menuRef,
    results,
  };

  return (
      <SearchContext.Provider value={exports}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context)
    throw new Error("useSearch must be used within the SearchContext");

  return context;
}
