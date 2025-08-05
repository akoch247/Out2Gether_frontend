import useMutation from "../api/UseMutation";
import useQuery from "../api/useQuery";
import BlueButton from "../components/BlueButton";

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
    <>
      <BlueButton
        onClick={handleAddToCart}
        disabled={isAddingToCart || !!cartItem}
      >
        {isAddingToCart ? "Adding..." : cartItem ? "In Cart" : "Add to Cart"}
      </BlueButton>
    </>
  );
}
