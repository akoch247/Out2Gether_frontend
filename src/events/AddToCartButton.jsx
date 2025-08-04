import useMutation from "../api/UseMutation";
import useQuery from "../api/useQuery";

export default function AddToCartButton({ post }) {
  const { mutate: addToCart, loading: isAddingToCart } = useMutation(
    "POST",
    "/cart",
    ["cart", "cartItem"]
  );
  const { data: cartItem } = useQuery("/cart/" + post.id, "cartItem");

  const handleAddToCart = () => {
    if (isAddingToCart || !post || cartItem) return;
    addToCart({ post_id: post.id, quantity: 1 });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="btn"
      disabled={isAddingToCart || cartItem}
      style={{
        backgroundColor: "#28BCB3",
        color: "white",
        borderColor: "#28BCB3",
        fontWeight: "bold",
      }}
    >
      {isAddingToCart
        ? "Adding..."
        : cartItem
        ? "Already Added"
        : "Add to Cart"}
    </button>
  );
}
