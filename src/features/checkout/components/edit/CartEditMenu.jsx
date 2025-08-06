import { useCart } from "../../CartContext";
import DecreaseButton from "./DecreaseButton";
import IncreaseButton from "./IncreaseButton";
import QuantityForm from "./QuantityForm";

export default function CartEditMenu({ item }) {
  const { showingItem, editMenuRef } = useCart();

  if (!showingItem || showingItem.post_id !== item.post_id) return <></>;

  return (
    <div className="cartEditorMenu" ref={editMenuRef}>
      <DecreaseButton item={item} />
      <QuantityForm item={item} />
      <IncreaseButton item={item} />
    </div>
  );
}
