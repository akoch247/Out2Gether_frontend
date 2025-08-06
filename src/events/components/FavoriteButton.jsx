import { BsHeart, BsHeartFill } from "react-icons/bs";
import useMutation from "../../api/UseMutation";
import useQuery from "../../api/useQuery";

export default function FavoriteButton({ post }) {
  const { mutate: toggleFavorite, loading: isFavoriting } = useMutation(
    "PATCH",
    "/favorites",
    ["favorite"]
  );
  const { data: favorite } = useQuery("/favorites/" + post.id, "favorite");

  const handleFavorite = () => {
    if (isFavoriting || !post) return;

    toggleFavorite({ post_id: post.id });
  };

  return (
    <button className="btn" onClick={handleFavorite}>
      {favorite && <BsHeartFill size={30} color="#F35242" />}
      {!favorite && <BsHeart size={30} />}
    </button>
  );
}
