import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

export default function SearchMenu() {
  const { search, results, viewingSearch, menuRef } = useSearch();

  if (!viewingSearch || !results || !search) return <></>;

  return (
    <div className="searchMenuContainer" ref={menuRef}>
      {results.map((post) => {
        return <Link key={post.id} to={"/posts/" + post.id}> {post.title}</Link>;
      })}
    </div>
  );
}
