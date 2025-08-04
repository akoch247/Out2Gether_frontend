import useMutation from "../api/UseMutation";

export default function AddToCartButton({ post }) {
  const { mutate: addToCart, loading: isAddingToCart } = useMutation(
    "POST",
    "/cart",
    ["cart", "cartItem"]
  );

  const handleAddToCart = () => {
    if (isAddingToCart || !post) return;
    addToCart({ post_id: post.id });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="btn"
      disabled={isAddingToCart}
      style={{
        backgroundColor: "#28BCB3",
        color: "white",
        borderColor: "#28BCB3",
        fontWeight: "bold",
      }}
    >
      {isAddingToCart ? "Adding..." : "Add to Cart"}
    </button>
  );
}
