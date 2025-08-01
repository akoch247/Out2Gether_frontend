import { FiMinus } from "react-icons/fi";
import useMutation from "../../../api/UseMutation";

export default function DecreaseButton({ item }) {
  const { mutate, loading } = useMutation("PUT", "/cart/" + item.post_id, [
    "cart",
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