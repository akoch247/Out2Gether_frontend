import { LuPencil } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
import { useCart } from "../CartContext";
import CartEditMenu from "./edit/CartEditMenu";

export default function CartEditButton({ item }) {
  const { showingItem, setShowingItem } = useCart();

  const handleClick = (event) => {
    event.preventDefault();

    setShowingItem((prev) => (prev === null ? item : null));
  };

  return (
    <>
      <span className="cartBtn editBtn">
        <CartEditMenu item={item} />
        {item.quantity} Couple(s)
        {showingItem && showingItem.post_id == item.post_id ? (
          <GiCancel className="editBtn icon" onClick={handleClick} />
        ) : (
          <LuPencil className="editBtn icon" onClick={handleClick} />
        )}
      </span>
    </>
  );
}
