import { LuPencil } from "react-icons/lu";

import { useCart } from "../context/CartContext";
import CartEditMenu from "./edit/CartEditMenu";

export default function CartEditButton({ item }) {
  const { setShowingItem } = useCart();

  const handleClick = (event) => {
    event.preventDefault();

    setShowingItem((prev) => (prev === null ? item : null));
  };

  return (
    <>
      <span className="cartBtn editBtn">
        <CartEditMenu item={item} />
        {item.quantity} Couple(s)
        <LuPencil className="editBtn icon" onClick={handleClick} />
      </span>
    </>
  );
}
