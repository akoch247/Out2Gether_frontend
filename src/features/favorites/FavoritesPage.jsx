// Shows a list of events the user has favorited

import FilterBar from "../../components/filter/Filterbar";
import useQuery from "../../hooks/useQuery";
import FavoritePost from "./component/FavoritePost";
import "./style/FavoritesPage.css";

export default function Favorites() {
  const {
    data: favorites,
    loading,
    error,
  } = useQuery("/favorites", ["favorite_posts"]);

  if (loading || !favorites) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <div className="favoritesPageContainer bg-white rounded p-4">
      <header>
        <h1>Favorites</h1>
        <FilterBar />
      </header>
      <div className="favoritePosts">
        {favorites.map((favorite) => {
          return <FavoritePost key={favorite.post_id} favorite={favorite} />;
        })}
      </div>
    </div>
  );
}
