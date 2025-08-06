import useMutation from "../../api/UseMutation";
import useQuery from "../../api/useQuery";
import BlueButton from "../../components/BlueButton";

export default function AddToCartButton({ post }) {
  const { mutate: addToCart, loading: isAddingToCart } = useMutation(
    "POST",
    "/cart",
    ["cart"]
  );

  const handleAddToCart = () => {
    if (isAddingToCart || !post) return;
    addToCart({ post_id: post.id, quantity: 1 });
  };

  return (
    <>
      <BlueButton onClick={handleAddToCart} disabled={isAddingToCart}>
        {isAddingToCart ? "Adding..." : "Add to Cart"}
      </BlueButton>
    </>
  );
}
