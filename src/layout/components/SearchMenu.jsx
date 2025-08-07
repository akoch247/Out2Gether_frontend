import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

export default function SearchMenu() {
  const { search, results, viewingSearch, menuRef } = useSearch();

  if (!viewingSearch || !results || !search) return <></>;

  return (
    <div className="searchMenuContainer" ref={menuRef}>
      {results.length > 0 ? (
        results.map((post) => {
          return (
            <Link key={post.id} to={"/posts/" + post.id}>
              {post.title}
            </Link>
          );
        })
      ) : (
        <a>
          No results found. Try something else.{" "}
        </a>
      )}
    </div>
  );
}
