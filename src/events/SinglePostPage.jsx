// Shows all the details for a single event

import { useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import useQuery from "../api/useQuery";
import useMutation from "../api/UseMutation";

export default function SinglePostPage() {
  const { id } = useParams();
  const { data: post, loading, error } = useQuery(`/posts/${id}`, "post");
  const {
    mutate,
    loading: adding,
    error: addingError,
  } = useMutation("POST", "/cart", ["cart"]);

  const handleAddToCart = (postId) => {
    if (adding) return;

    mutate({
      post_id: postId,
      quantity: 1,
    });
  };

  if (loading || !post) return <p>Loading...</p>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div>
      <EventCard
        post={post}
        onAddToCart={handleAddToCart}
        addingError={addingError}
      />
    </div>
  );
}
