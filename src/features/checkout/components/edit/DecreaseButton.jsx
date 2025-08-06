import { FiMinus } from "react-icons/fi";
import useMutation from "../../../../hooks/useMutation";

export default function DecreaseButton({ item }) {
  const { mutate, loading } = useMutation("PUT", "/cart/" + item.post_id, [
    "cartItem_" + item.post_id,
    "cartButton",
    item.quantity == 1 ? "cart" : "",
  ]);

  const handleClick = (event) => {
    event.preventDefault();

    if (loading) return;

    mutate({
      quantity: item.quantity - 1,
    });
  };

  return <FiMinus onClick={handleClick} className="cartBtn decreaseBtn" />;
}
