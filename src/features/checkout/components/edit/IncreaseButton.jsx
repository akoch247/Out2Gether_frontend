import { FiPlus } from "react-icons/fi";
import useMutation from "../../../../hooks/useMutation";

export default function IncreaseButton({ item }) {
  const { mutate, loading } = useMutation("PUT", "/cart/" + item.post_id, [
    "cartItem_" + item.post_id,
    "cartButton",
  ]);

  const handleClick = (event) => {
    event.preventDefault();

    if (loading) return;

    mutate({
      quantity: item.quantity + 1,
    });
  };

  return <FiPlus onClick={handleClick} className="cartBtn increaseBtn" />;
}
