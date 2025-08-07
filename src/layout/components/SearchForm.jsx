import { useSearch } from "../../context/SearchContext";
import SearchMenu from "./SearchMenu";
import { FaSearch } from "react-icons/fa";

// TODO style me please :D
export default function SearchForm() {
  const { searchRef, setViewingSearch, setSearch } = useSearch();

  return (
    <div id="postSearchContainer ">
      <input
        className="form-control rounded-pill"
        name="search"
        type="text"
        placeholder="Search for an event..."
        autoComplete="off"
        required
        onClick={() => setViewingSearch(true)}
        onChange={(e) => setSearch(e.target.value)}
        ref={searchRef}
      />
      <div style={{ position: "relative" }}>
        <FaSearch
          style={{
            position: "absolute",
            left: "180px",
            bottom: "0px",
            transform: "translateY(-50%)",
            fontSize: "18px",
            color: "gray",
          }}
        />
      </div>

      <SearchMenu />
    </div>
  );
}
