// Shows a list of events the user has favorited

import useQuery from "../api/useQuery";

export default function Favorites() {
  const { data: favorites, loading, error } = useQuery("/favorites", "favorite_posts");

  if (loading || !favorites) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error}</>
  }

  return (
    <div className="favoritesPageContainer">
      <h1>Favorites</h1>
      {favorites.map(favorite => {
        return <div key={favorite.post_id}>{favorite.post.title}</div>
      })}
    </div>
  );
}
