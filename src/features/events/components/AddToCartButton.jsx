import useMutation from "../../../hooks/useMutation";
import BlueButton from "../../../components/BlueButton";

export default function AddToCartButton({ post }) {
  const { mutate: addToCart, loading: isAddingToCart } = useMutation(
    "POST",
    "/cart",
    ["cart", "cartQuantity"]
  );

  const handleAddToCart = () => {
    if (isAddingToCart || !post) return;
    addToCart({ post_id: post.id });
  };

  return (
    <>
      <BlueButton onClick={handleAddToCart} disabled={isAddingToCart}>
        {isAddingToCart ? "Adding..." : "Add to Cart"}
      </BlueButton>
    </>
  );
}
