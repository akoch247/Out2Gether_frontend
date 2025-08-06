import { useSearch } from "../../context/SearchContext";
import SearchMenu from "./SearchMenu";

// TODO style me please :D
export default function SearchForm() {
  const { searchRef, setViewingSearch, setSearch } = useSearch();

  return (
    <div id="postSearchContainer">
      <input
        name="search"
        type="text"
        placeholder="Search for an event..."
        autoComplete="off"
        required
        onClick={() => setViewingSearch(true)}
        onChange={(e) => setSearch(e.target.value)}
        ref={searchRef}
      />
      <SearchMenu />
    </div>
  );
}
