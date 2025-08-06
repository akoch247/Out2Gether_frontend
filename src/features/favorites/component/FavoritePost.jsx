import { useNavigate } from "react-router-dom";
import FavoriteButton from "../../events/components/FavoriteButton";
import "../style/FavoritePost.css";

export default function FavoritePost({ favorite }) {
  const { id, title, image_url, date, price } = favorite.post;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/posts/" + id);
  };

  return (
    <div className="favoritePostCard" onClick={handleClick}>
      <header>
        <img src={image_url}></img>
      </header>
      <div className="favoritePostCardContent">
        <div className="favoritePostCardDetails">
          <h3>{title}</h3>
          <h3>{date}</h3>
          <p>${price.toFixed(2)} per couple</p>
        </div>
        <div className="favoritePostButtons">
          <FavoriteButton post={favorite.post} />
        </div>
      </div>
    </div>
  );
}
